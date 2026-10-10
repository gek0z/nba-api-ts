export interface BoxScoreScoringV3Params {
	gameID: string;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

/** Parsed from the `boxScoreScoring` object of the V3 response. */
export interface BoxScoreScoringV3Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScoreScoringV3Team;
	awayTeam: BoxScoreScoringV3Team;
}

export interface BoxScoreScoringV3Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScoreScoringV3Player[];
	statistics: BoxScoreScoringV3Statistics;
}

export interface BoxScoreScoringV3Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	statistics: BoxScoreScoringV3Statistics;
}

export interface BoxScoreScoringV3Statistics {
	minutes: string;
	percentageFieldGoalsAttempted2pt: number;
	percentageFieldGoalsAttempted3pt: number;
	percentagePoints2pt: number;
	percentagePointsMidrange2pt: number;
	percentagePoints3pt: number;
	percentagePointsFastBreak: number;
	percentagePointsFreeThrow: number;
	percentagePointsOffTurnovers: number;
	percentagePointsPaint: number;
	percentageAssisted2pt: number;
	percentageUnassisted2pt: number;
	percentageAssisted3pt: number;
	percentageUnassisted3pt: number;
	percentageAssistedFGM: number;
	percentageUnassistedFGM: number;
}
