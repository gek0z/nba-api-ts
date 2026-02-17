export interface PlayerCompareParams {
	vsPlayerIDList: string;
	playerIDList: string;
	lastNGames?: number;
	measureType?: string;
	month?: number;
	opponentTeamID?: number;
	paceAdjust?: string;
	perMode?: string;
	period?: number;
	plusMinus?: string;
	rank?: string;
	season?: string;
	seasonType?: string;
	conference?: string;
	dateFrom?: string;
	dateTo?: string;
	division?: string;
	gameSegment?: string;
	leagueID?: string;
	location?: string;
	outcome?: string;
	seasonSegment?: string;
	shotClockRange?: number;
	vsConference?: string;
	vsDivision?: string;
}

export interface IndividualRow {
	groupSet: unknown;
	description: string;
	min: number;
	fgm: number;
	fga: number;
	fgPct: number | null;
	fg3m: number;
	fg3a: number;
	fg3Pct: number | null;
	ftm: number;
	fta: number;
	ftPct: number | null;
	oreb: number;
	dreb: number;
	reb: number;
	ast: number;
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
}

export interface OverallCompareRow {
	groupSet: unknown;
	description: string;
	min: number;
	fgm: number;
	fga: number;
	fgPct: number | null;
	fg3m: number;
	fg3a: number;
	fg3Pct: number | null;
	ftm: number;
	fta: number;
	ftPct: number | null;
	oreb: number;
	dreb: number;
	reb: number;
	ast: number;
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
}

export interface PlayerCompareResponse {
	individual: IndividualRow[];
	overallCompare: OverallCompareRow[];
}
