export interface BoxScoreMiscV3Params {
	gameID: string;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

/** Parsed from the `boxScoreMisc` object of the V3 response. */
export interface BoxScoreMiscV3Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScoreMiscV3Team;
	awayTeam: BoxScoreMiscV3Team;
}

export interface BoxScoreMiscV3Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScoreMiscV3Player[];
	statistics: BoxScoreMiscV3Statistics;
}

export interface BoxScoreMiscV3Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	statistics: BoxScoreMiscV3Statistics;
}

export interface BoxScoreMiscV3Statistics {
	minutes: string;
	pointsOffTurnovers: number;
	pointsSecondChance: number;
	pointsFastBreak: number;
	pointsPaint: number;
	oppPointsOffTurnovers: number;
	oppPointsSecondChance: number;
	oppPointsFastBreak: number;
	oppPointsPaint: number;
	blocks: number;
	blocksAgainst: number;
	foulsPersonal: number;
	foulsDrawn: number;
}
