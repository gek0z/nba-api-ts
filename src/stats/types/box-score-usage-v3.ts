export interface BoxScoreUsageV3Params {
	gameID: string;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

/** Parsed from the `boxScoreUsage` object of the V3 response. */
export interface BoxScoreUsageV3Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScoreUsageV3Team;
	awayTeam: BoxScoreUsageV3Team;
}

export interface BoxScoreUsageV3Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScoreUsageV3Player[];
	statistics: BoxScoreUsageV3Statistics;
}

export interface BoxScoreUsageV3Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	statistics: BoxScoreUsageV3Statistics;
}

export interface BoxScoreUsageV3Statistics {
	minutes: string;
	usagePercentage: number;
	percentageFieldGoalsMade: number;
	percentageFieldGoalsAttempted: number;
	percentageThreePointersMade: number;
	percentageThreePointersAttempted: number;
	percentageFreeThrowsMade: number;
	percentageFreeThrowsAttempted: number;
	percentageReboundsOffensive: number;
	percentageReboundsDefensive: number;
	percentageReboundsTotal: number;
	percentageAssists: number;
	percentageTurnovers: number;
	percentageSteals: number;
	percentageBlocks: number;
	percentageBlocksAllowed: number;
	percentagePersonalFouls: number;
	percentagePersonalFoulsDrawn: number;
	percentagePoints: number;
}
