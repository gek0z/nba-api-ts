// Writes one docs page per endpoint into src/content/docs/endpoints/, read
// straight from the library source so the docs can't drift from the code.
//
// For each stats endpoint it pulls the NBA path, the camelCase → PascalCase
// query param mapping (with defaults), the Params interface and every result
// set with its columns. Uses the TypeScript 6 compiler API, pinned in this
// package because TypeScript 7 no longer ships a JavaScript API.

import {
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { basename, join, resolve } from "node:path";
import ts from "typescript";

const ROOT = resolve(import.meta.dir, "../..");
const SRC = join(ROOT, "src");
const OUT = resolve(import.meta.dir, "../src/content/docs/endpoints");
const REPO = "https://github.com/gek0z/nba-api-ts/blob/main";

// ---------------------------------------------------------------- parsing

interface Member {
	name: string;
	type: string;
	optional: boolean;
	doc: string;
}

interface Param extends Member {
	query?: string;
	default?: string;
}

interface ResultSet {
	name: string;
	type: string;
	columns?: Member[];
}

interface StatsEndpoint {
	name: string;
	file: string;
	path: string;
	format: "v2" | "v3" | "raw";
	paramsType: string;
	responseType: string;
	params: Param[];
	fixed: { query: string; value: string }[];
	resultSets: ResultSet[];
	category: string;
}

function parse(file: string): ts.SourceFile {
	return ts.createSourceFile(
		file,
		readFileSync(file, "utf8"),
		ts.ScriptTarget.Latest,
		true,
	);
}

function walk(node: ts.Node, visit: (n: ts.Node) => void): void {
	visit(node);
	ts.forEachChild(node, (child) => walk(child, visit));
}

function docOf(node: ts.Node): string {
	return ts
		.getJSDocCommentsAndTags(node)
		.filter(ts.isJSDoc)
		.map((d) => ts.getTextOfJSDocComment(d.comment) ?? "")
		.join(" ")
		.trim();
}

function interfaces(sf: ts.SourceFile): Map<string, Member[]> {
	const out = new Map<string, Member[]>();
	walk(sf, (n) => {
		if (!ts.isInterfaceDeclaration(n)) return;
		const members: Member[] = [];
		for (const m of n.members) {
			if (!ts.isPropertySignature(m) || !m.type) continue;
			members.push({
				name: m.name.getText(sf),
				type: m.type.getText(sf).replace(/\s+/g, " "),
				optional: Boolean(m.questionToken),
				doc: docOf(m),
			});
		}
		const heritage = n.heritageClauses
			?.flatMap((h) => h.types.map((t) => t.getText(sf)))
			.join(", ");
		if (heritage) {
			members.unshift({
				name: "…",
				type: heritage,
				optional: false,
				doc: `Everything from ${heritage}.`,
			});
		}
		out.set(n.name.text, members);
	});
	return out;
}

function parseStatsEndpoint(file: string): StatsEndpoint {
	const sf = parse(file);
	let name = "";
	let path = "";
	let typesFile = "";
	let paramsType = "";
	let responseType = "";
	const params = new Map<string, { query: string; default?: string }>();
	const fixed: { query: string; value: string }[] = [];
	const text = sf.getFullText();
	const format = text.includes("parseV3Response")
		? "v3"
		: text.includes("parseStatsResponse")
			? "v2"
			: "raw";

	walk(sf, (n) => {
		if (ts.isFunctionDeclaration(n) && n.name) name = n.name.text;
		if (
			ts.isImportDeclaration(n) &&
			ts.isStringLiteral(n.moduleSpecifier) &&
			n.moduleSpecifier.text.startsWith("../types/")
		) {
			typesFile = join(
				SRC,
				"stats/types",
				basename(n.moduleSpecifier.text).replace(/\.js$/, ".ts"),
			);
			const named = n.importClause?.namedBindings;
			if (named && ts.isNamedImports(named)) {
				for (const el of named.elements) {
					if (el.name.text.endsWith("Params")) paramsType = el.name.text;
					if (el.name.text.endsWith("Response")) responseType = el.name.text;
				}
			}
		}
		if (
			ts.isCallExpression(n) &&
			n.expression.getText(sf) === "client.get" &&
			n.arguments[0] &&
			ts.isStringLiteralLike(n.arguments[0])
		) {
			path = n.arguments[0].text;
		}
		if (
			ts.isVariableDeclaration(n) &&
			n.name.getText(sf) === "apiParams" &&
			n.initializer &&
			ts.isObjectLiteralExpression(n.initializer)
		) {
			for (const prop of n.initializer.properties) {
				if (!ts.isPropertyAssignment(prop)) continue;
				const query = ts.isStringLiteral(prop.name)
					? prop.name.text
					: prop.name.getText(sf);
				let init = prop.initializer;
				let def: string | undefined;
				if (
					ts.isBinaryExpression(init) &&
					init.operatorToken.kind === ts.SyntaxKind.QuestionQuestionToken
				) {
					def = init.right.getText(sf);
					init = init.left;
				}
				if (
					ts.isPropertyAccessExpression(init) &&
					init.expression.getText(sf) === "params"
				) {
					params.set(init.name.text, { query, default: def });
				} else {
					fixed.push({ query, value: init.getText(sf) });
				}
			}
		}
	});

	const types = interfaces(parse(typesFile));
	const resultSets: ResultSet[] = (types.get(responseType) ?? []).map((m) => {
		const row = m.type.match(/^(\w+)\[\]$/)?.[1];
		return {
			name: m.name,
			type: m.type,
			columns: row ? types.get(row) : undefined,
		};
	});

	return {
		name,
		file: file.slice(ROOT.length + 1),
		path,
		format,
		paramsType,
		responseType,
		params: (types.get(paramsType) ?? []).map((m) => ({
			...m,
			...params.get(m.name),
		})),
		fixed,
		resultSets,
		category: categorize(name),
	};
}

// ---------------------------------------------------------- organization

const CATEGORIES: Record<string, string> = {
	"box-scores": "Box scores",
	games: "Games and schedule",
	players: "Players",
	teams: "Teams",
	league: "League dashboards",
	leaders: "Leaders",
	draft: "Draft",
	shots: "Shots",
	video: "Video",
};

function categorize(name: string): string {
	const rules: [RegExp, string][] = [
		[/^(boxScore|hustleStatsBoxScore|gLAlumBoxScore)/, "box-scores"],
		[/^draft/, "draft"],
		[/^video/, "video"],
		[/^shotChart/, "shots"],
		[
			/^(playByPlay|scoreboard|schedule|gameRotation|winProbability|leagueGameFinder|leagueGameLog|playoffPicture|commonPlayoffSeries)/,
			"games",
		],
		[/^(franchise|team|commonTeam|cumeStatsTeam)/, "teams"],
		[
			/^(player|commonPlayerInfo|commonAllPlayers|cumeStatsPlayer|infographicFanDuelPlayer|fantasyWidget)/,
			"players",
		],
		[/(Leaders|^leadersTiles|^homePage|^assistTracker|^defenseHub)/, "leaders"],
		[/^(league|iSTStandings|matchupsRollup|synergyPlayTypes)/, "league"],
	];
	const category = rules.find(([re]) => re.test(name))?.[1];
	if (!category) throw new Error(`No docs category for ${name}, add a rule`);
	return category;
}

/** One-liners for the endpoints people reach for first. */
const SUMMARIES: Record<string, string> = {
	playerCareerStats:
		"Career totals and season-by-season stats for one player, split by regular season, playoffs, All-Star and college.",
	commonPlayerInfo:
		"Biographical details for one player: height, weight, draft, team, position, and headline stats.",
	commonAllPlayers:
		"Every player in the league for a season, with team and active status.",
	leagueDashPlayerStats:
		"League-wide player stats for a season, one row per player, with every split filter the NBA site offers.",
	leagueDashTeamStats:
		"League-wide team stats for a season, one row per team, with the same filters as the player dashboard.",
	playerGameLog: "Game-by-game box score lines for one player in one season.",
	teamGameLog:
		"Game-by-game results and team box scores for one team in one season.",
	shotChartDetail:
		"Every shot a player or team took, with court coordinates, zone and result.",
	leagueGameFinder:
		"Search games by team, player, season, date range, and stat thresholds.",
	boxScoreTraditionalV3:
		"The classic box score for one game: player and team lines.",
	playByPlayV3:
		"Every event in a game, in order, with clock, score and description.",
	scoreboardV2:
		"All games on a given date, with line scores and series standings.",
	leagueStandings: "Conference and division standings for a season.",
	leagueLeaders: "League leaders for a stat category and season.",
	commonTeamRoster: "A team's roster and coaching staff for a season.",
	playerIndex:
		"The full player directory for a season, as used by nba.com/players.",
};

/** Realistic values for required params, so every example is runnable. */
const EXAMPLES: Record<string, string> = {
	playerID: "2544",
	teamID: "1610612747",
	gameID: '"0022400061"',
	gameIDs: '"0022400061"',
	vsPlayerID: "201939",
	vsTeamID: "1610612744",
	playerIDList: '"2544,201939"',
	vsPlayerIDList: '"201939,203110"',
	playerID1: '"2544"',
	playerID2: '"201566"',
	playerID3: '"203076"',
	playerID4: '"1628398"',
	playerID5: '"1629029"',
	vsPlayerID1: '"201939"',
	vsPlayerID2: '"203110"',
	vsPlayerID3: '"202691"',
	vsPlayerID4: '"1626172"',
	vsPlayerID5: '"1630228"',
	person1Id: "2544",
	person2Id: "201939",
	minutesMin: '"10"',
	gameDate: '"2024-12-25"',
	college: '"Duke"',
	season: '"2024-25"',
};

// ------------------------------------------------------------- rendering

const code = (s: string) => `\`${s.replace(/\|/g, "\\|")}\``;
const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\n/g, " ");
const yaml = (s: string) => JSON.stringify(s);
const methodLink = (e: StatsEndpoint) =>
	`/endpoints/stats/${e.category}/${kebab(e.name)}/`;

function kebab(name: string): string {
	return name
		.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
		.toLowerCase();
}

function example(e: StatsEndpoint): string {
	const required = e.params.filter((p) => !p.optional);
	const args = required.map(
		(p) => `${p.name}: ${EXAMPLES[p.name] ?? "/* … */"}`,
	);
	if (args.length === 0 && e.params.some((p) => p.name === "season")) {
		args.push(`season: ${EXAMPLES.season}`);
	}
	const first = (
		e.resultSets.find((r) => r.name.endsWith("RegularSeason")) ??
		e.resultSets[0]
	)?.name;
	const call = `await nba.stats.${e.name}({${args.length ? ` ${args.join(", ")} ` : ""}})`;
	const lines = [
		'import { NBAClient } from "nba-api-ts";',
		"",
		"const nba = new NBAClient({ stats: { fetch: browserFetch } });",
		"",
		`const res = ${call};`,
	];
	if (first && e.format === "v2") lines.push(`console.log(res.${first}[0]);`);
	else lines.push("console.log(res);");
	return lines.join("\n");
}

function summary(e: StatsEndpoint): string {
	if (SUMMARIES[e.name]) return SUMMARIES[e.name];
	const sets = e.resultSets.length;
	if (e.format === "v3")
		return `Calls ${e.path} and returns the parsed V3 JSON payload.`;
	return `Calls ${e.path} and returns ${sets} result set${sets === 1 ? "" : "s"}.`;
}

function renderStats(e: StatsEndpoint): string {
	const out: string[] = [
		"---",
		`title: ${e.name}`,
		`description: ${yaml(summary(e))}`,
		"editUrl: false",
		"---",
		"",
		summary(e),
		"",
		"```ts",
		`nba.stats.${e.name}(params: ${e.paramsType}): Promise<${e.responseType}>`,
		"```",
		"",
		`| | |`,
		`|---|---|`,
		`| **Request** | ${code(`GET https://stats.nba.com${e.path}`)} |`,
		`| **Format** | ${e.format === "v3" ? "V3, nested JSON" : e.format === "v2" ? "V2, tabular result sets parsed to rows" : "Raw JSON"} |`,
		`| **Source** | [${e.file}](${REPO}/${e.file}) |`,
		"",
		":::note[Needs a browser-like client]",
		"Stats endpoints only answer requests that look like a real browser, from a residential IP. `browserFetch` in the example is the impersonating fetch set up in [Getting past Akamai](/guides/akamai/).",
		":::",
		"",
		"## Example",
		"",
		"```ts",
		example(e),
		"```",
		"",
		"## Parameters",
		"",
	];

	if (e.params.length === 0) {
		out.push("This endpoint takes no parameters.", "");
	} else {
		out.push(
			"| Name | Type | Required | Default | Sent as |",
			"|---|---|---|---|---|",
			...e.params.map(
				(p) =>
					`| ${code(p.name)} | ${code(p.type)} | ${p.optional ? "" : "yes"} | ${p.default ? code(p.default) : ""} | ${p.query ? code(p.query) : ""} |`,
			),
			"",
		);
	}
	if (e.fixed.length) {
		out.push(
			"Always sent, not configurable:",
			"",
			...e.fixed.map((f) => `- ${code(f.query)} = ${code(f.value)}`),
			"",
		);
	}

	out.push("## Response", "");
	if (e.format === "v3") {
		out.push(
			":::caution[V3 types are approximate]",
			"V3 endpoints return the NBA's nested JSON as-is (for example `{ gameId, homeTeam: { players: [...] } }`). The declared result sets below come from an older flat model and may not match the runtime shape. Inspect the response before relying on field names.",
			":::",
			"",
		);
	}
	if (e.resultSets.length === 0) {
		out.push(`Returns ${code(e.responseType)}.`, "");
	}
	for (const rs of e.resultSets) {
		out.push(`### ${rs.name}`, "", code(rs.type), "");
		if (rs.columns?.length) {
			out.push(
				`<details><summary>${rs.columns.length} columns</summary>`,
				"",
				"| Field | Type |",
				"|---|---|",
				...rs.columns.map((c) => `| ${code(c.name)} | ${code(c.type)} |`),
				"",
				"</details>",
				"",
			);
		}
	}
	return out.join("\n");
}

function renderIndex(endpoints: StatsEndpoint[]): string {
	const rows = endpoints
		.map((e) => {
			const required = e.params.filter((p) => !p.optional).map((p) => p.name);
			return `<tr data-search="${`${e.name} ${e.path} ${CATEGORIES[e.category]} ${required.join(" ")}`.toLowerCase()}"><td><a href="${methodLink(e)}"><code>${e.name}</code></a></td><td>${CATEGORIES[e.category]}</td><td><code>${e.path}</code></td><td>${required.map((r) => `<code>${r}</code>`).join(" ") || "none"}</td></tr>`;
		})
		.join("\n");

	return `---
title: All stats endpoints
description: Every stats.nba.com endpoint the client wraps, searchable by name, path, category or parameter.
editUrl: false
tableOfContents: false
---

All ${endpoints.length} methods on \`nba.stats\`. Type to filter by method, NBA path, category or a required parameter such as \`gameID\`.

<input id="endpoint-filter" type="search" placeholder="Filter endpoints, e.g. shot, gameID, league…" aria-label="Filter endpoints" />
<p id="endpoint-count" aria-live="polite"></p>

<div class="endpoint-table">
<table>
<thead><tr><th>Method</th><th>Category</th><th>NBA path</th><th>Required</th></tr></thead>
<tbody>
${rows}
</tbody>
</table>
</div>

<script>
	const input = document.getElementById("endpoint-filter");
	const count = document.getElementById("endpoint-count");
	const rows = [...document.querySelectorAll(".endpoint-table tbody tr")];
	function update() {
		const terms = input.value.toLowerCase().split(/\\s+/).filter(Boolean);
		let shown = 0;
		for (const row of rows) {
			const match = terms.every((t) => row.dataset.search.includes(t));
			row.hidden = !match;
			if (match) shown++;
		}
		count.textContent = shown === rows.length ? "" : shown + " of " + rows.length + " endpoints";
	}
	input.addEventListener("input", update);
</script>
`;
}

// --------------------------------------------------------------- live

const LIVE = [
	{
		name: "scoreboard",
		types: "scoreboard.ts",
		call: "await nba.live.scoreboard()",
		summary:
			"Today's games with live scores, status, period, clock and game leaders.",
		params: "",
	},
	{
		name: "boxscore",
		types: "boxscore.ts",
		call: 'await nba.live.boxscore("0022400061")',
		summary:
			"The live box score for one game: teams, players, arena and officials.",
		params: "gameId: string",
	},
	{
		name: "playByPlay",
		types: "play-by-play.ts",
		call: 'await nba.live.playByPlay("0022400061")',
		summary: "Every action in a game so far, updated as the game is played.",
		params: "gameId: string",
	},
	{
		name: "odds",
		types: "odds.ts",
		call: "await nba.live.odds()",
		summary: "Betting markets for today's games, by sportsbook.",
		params: "",
	},
];

function liveEndpointPath(name: string): string {
	const file = join(SRC, "live/endpoints", `${kebab(name)}.ts`);
	const sf = parse(file);
	let path = "";
	walk(sf, (n) => {
		if (path) return;
		if (ts.isStringLiteral(n) && n.text.startsWith("/static/")) path = n.text;
		if (ts.isTemplateExpression(n) && n.head.text.startsWith("/static/")) {
			path = n
				.getText(sf)
				.slice(1, -1)
				.replace(/\$\{(\w+)\}/g, "{$1}");
		}
	});
	return path;
}

function renderLive(l: (typeof LIVE)[number], order: number): string {
	const typesFile = join(SRC, "live/types", l.types);
	const types = interfaces(parse(typesFile));
	const [responseType] = types.keys();
	const out = [
		"---",
		`title: ${l.name}`,
		`description: ${yaml(l.summary)}`,
		"editUrl: false",
		`sidebar: { order: ${order} }`,
		"---",
		"",
		l.summary,
		"",
		"```ts",
		`nba.live.${l.name}(${l.params}): Promise<${responseType}>`,
		"```",
		"",
		"| | |",
		"|---|---|",
		`| **Request** | ${code(`GET https://cdn.nba.com${liveEndpointPath(l.name)}`)} |`,
		`| **Source** | [src/live/types/${l.types}](${REPO}/src/live/types/${l.types}) |`,
		"",
		"## Example",
		"",
		"```ts",
		'import { NBAClient } from "nba-api-ts";',
		"",
		"const nba = new NBAClient({ live: { fetch: browserFetch } });",
		"",
		`const res = ${l.call};`,
		"```",
		"",
		"## Types",
		"",
	];
	for (const [name, members] of types) {
		out.push(
			`### ${name}`,
			"",
			"| Field | Type | |",
			"|---|---|---|",
			...members.map(
				(m) =>
					`| ${code(m.name)} | ${code(m.type)} | ${m.optional ? "optional" : ""} ${cell(m.doc)} |`,
			),
			"",
		);
	}
	return out.join("\n");
}

// ----------------------------------------------------------------- main

const endpointDir = join(SRC, "stats/endpoints");
const endpoints = readdirSync(endpointDir)
	.filter((f) => f.endsWith(".ts") && f !== "index.ts")
	.map((f) => parseStatsEndpoint(join(endpointDir, f)))
	.sort((a, b) => a.name.localeCompare(b.name));

const broken = endpoints.filter((e) => !e.name || !e.path || !e.paramsType);
if (broken.length) {
	throw new Error(`Could not parse: ${broken.map((e) => e.file).join(", ")}`);
}

rmSync(OUT, { recursive: true, force: true });
for (const e of endpoints) {
	const dir = join(OUT, "stats", e.category);
	mkdirSync(dir, { recursive: true });
	writeFileSync(join(dir, `${kebab(e.name)}.md`), renderStats(e));
}
writeFileSync(join(OUT, "index.md"), renderIndex(endpoints));

mkdirSync(join(OUT, "live"), { recursive: true });
LIVE.forEach((l, i) => {
	writeFileSync(join(OUT, "live", `${kebab(l.name)}.md`), renderLive(l, i));
});

const counts = Object.entries(Object.groupBy(endpoints, (e) => e.category)).map(
	([c, list]) => `${c} ${list?.length}`,
);
console.log(
	`Generated ${endpoints.length} stats + ${LIVE.length} live pages (${counts.join(", ")})`,
);
