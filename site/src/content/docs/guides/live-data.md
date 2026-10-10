---
title: Live data
description: Follow games as they happen with the scoreboard, live box score, play-by-play and odds feeds from cdn.nba.com.
---

`nba.live` reads the JSON files nba.com's own scoreboard uses. They update every few seconds during games and need no parsing: what you get is the NBA's JSON, typed.

| Method | Returns |
|---|---|
| [`scoreboard()`](/endpoints/live/scoreboard/) | Today's games, scores, status and leaders |
| [`boxscore(gameId)`](/endpoints/live/boxscore/) | Full box score for one game |
| [`playByPlay(gameId)`](/endpoints/live/play-by-play/) | Every action so far in one game |
| [`odds()`](/endpoints/live/odds/) | Betting markets for today's games |

Like stats, cdn.nba.com needs a [browser-like fetch](/guides/akamai/). Unlike stats, it works from servers and CI, not just residential IPs.

## Today's games

```ts
const { scoreboard } = await nba.live.scoreboard();

for (const game of scoreboard.games) {
	const { awayTeam: away, homeTeam: home } = game;
	console.log(
		`${away.teamTricode} ${away.score} @ ${home.teamTricode} ${home.score}  ${game.gameStatusText}`,
	);
}
```

`gameStatus` is `1` before tip-off, `2` while live and `3` when final.

## Following one game

Poll the play-by-play feed and keep track of the last `actionNumber` you've seen:

```ts
let last = 0;

async function poll(gameId: string) {
	const { game } = await nba.live.playByPlay(gameId);
	for (const action of game.actions) {
		if (action.actionNumber <= last) continue;
		last = action.actionNumber;
		console.log(`Q${action.period} ${action.clock}  ${action.description}`);
	}
}

setInterval(() => poll("0022400061"), 10_000);
```

The files are cached at the CDN for a few seconds, so polling faster than every 5 to 10 seconds just returns the same data.

## When there are no games

On days without games `scoreboard.games` is an empty array, and `boxscore` or `playByPlay` for a game whose file doesn't exist yet throws `NBAApiError` with status `403` (an S3 `AccessDenied` XML body, not an Akamai block). Check `gameStatus` from the scoreboard before asking for a game's details.
