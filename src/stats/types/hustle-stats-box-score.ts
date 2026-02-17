export type HustleStatsBoxScoreParams = {};

export interface HustleStatsAvailableRow {
	gameId: string;
	hustleStatus: string;
}

export interface PlayerStatsRow {
	gameId: string;
	teamId: number;
	teamAbbreviation: string;
	teamCity: string;
	playerId: number;
	playerName: string;
	startPosition: string;
	comment: string;
	minutes: unknown;
	pts: number;
	contestedShots: unknown;
	contestedShots2pt: unknown;
	contestedShots3pt: unknown;
	deflections: unknown;
	chargesDrawn: unknown;
	screenAssists: unknown;
	screenAstPts: unknown;
	offLooseBallsRecovered: unknown;
	defLooseBallsRecovered: unknown;
	looseBallsRecovered: unknown;
	offBoxouts: unknown;
	defBoxouts: unknown;
	boxOutPlayerTeamRebs: unknown;
	boxOutPlayerRebs: unknown;
	boxOuts: unknown;
}

export interface TeamStatsRow {
	gameId: string;
	teamId: number;
	teamName: string;
	teamAbbreviation: string;
	teamCity: string;
	minutes: unknown;
	pts: number;
	contestedShots: unknown;
	contestedShots2pt: unknown;
	contestedShots3pt: unknown;
	deflections: unknown;
	chargesDrawn: unknown;
	screenAssists: unknown;
	screenAstPts: unknown;
	offLooseBallsRecovered: unknown;
	defLooseBallsRecovered: unknown;
	looseBallsRecovered: unknown;
	offBoxouts: unknown;
	defBoxouts: unknown;
	boxOutPlayerTeamRebs: unknown;
	boxOutPlayerRebs: unknown;
	boxOuts: unknown;
}

export interface HustleStatsBoxScoreResponse {
	hustleStatsAvailable: HustleStatsAvailableRow[];
	playerStats: PlayerStatsRow[];
	teamStats: TeamStatsRow[];
}
