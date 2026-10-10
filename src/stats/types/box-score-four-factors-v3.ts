export interface BoxScoreFourFactorsV3Params {
	gameID: string;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

/** Parsed from the `boxScoreFourFactors` object of the V3 response. */
export interface BoxScoreFourFactorsV3Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScoreFourFactorsV3Team;
	awayTeam: BoxScoreFourFactorsV3Team;
}

export interface BoxScoreFourFactorsV3Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScoreFourFactorsV3Player[];
	statistics: BoxScoreFourFactorsV3Statistics;
}

export interface BoxScoreFourFactorsV3Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	statistics: BoxScoreFourFactorsV3Statistics;
}

export interface BoxScoreFourFactorsV3Statistics {
	minutes: string;
	effectiveFieldGoalPercentage: number;
	freeThrowAttemptRate: number;
	teamTurnoverPercentage: number;
	offensiveReboundPercentage: number;
	oppEffectiveFieldGoalPercentage: number;
	oppFreeThrowAttemptRate: number;
	oppTeamTurnoverPercentage: number;
	oppOffensiveReboundPercentage: number;
}
