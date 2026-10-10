export interface BoxScoreHustleV2Params {
	gameID: string;
}

/** Parsed from the `boxScoreHustle` object of the V3 response. */
export interface BoxScoreHustleV2Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScoreHustleV2Team;
	awayTeam: BoxScoreHustleV2Team;
}

export interface BoxScoreHustleV2Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScoreHustleV2Player[];
	statistics: BoxScoreHustleV2Statistics;
}

export interface BoxScoreHustleV2Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	statistics: BoxScoreHustleV2Statistics;
}

export interface BoxScoreHustleV2Statistics {
	minutes: string;
	points: number;
	contestedShots: number;
	contestedShots2pt: number;
	contestedShots3pt: number;
	deflections: number;
	chargesDrawn: number;
	screenAssists: number;
	screenAssistPoints: number;
	looseBallsRecoveredOffensive: number;
	looseBallsRecoveredDefensive: number;
	looseBallsRecoveredTotal: number;
	offensiveBoxOuts: number;
	defensiveBoxOuts: number;
	boxOutPlayerTeamRebounds: number;
	boxOutPlayerRebounds: number;
	boxOuts: number;
}
