export interface BoxScoreTraditionalV3Params {
	gameID: string;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

/** Parsed from the `boxScoreTraditional` object of the V3 response. */
export interface BoxScoreTraditionalV3Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScoreTraditionalV3Team;
	awayTeam: BoxScoreTraditionalV3Team;
}

export interface BoxScoreTraditionalV3Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScoreTraditionalV3Player[];
	statistics: BoxScoreTraditionalV3Statistics;
	starters: BoxScoreTraditionalV3StarterBenchStatistics;
	bench: BoxScoreTraditionalV3StarterBenchStatistics;
}

export interface BoxScoreTraditionalV3StarterBenchStatistics {
	minutes: string;
	fieldGoalsMade: number;
	fieldGoalsAttempted: number;
	fieldGoalsPercentage: number;
	threePointersMade: number;
	threePointersAttempted: number;
	threePointersPercentage: number;
	freeThrowsMade: number;
	freeThrowsAttempted: number;
	freeThrowsPercentage: number;
	reboundsOffensive: number;
	reboundsDefensive: number;
	reboundsTotal: number;
	assists: number;
	steals: number;
	blocks: number;
	turnovers: number;
	foulsPersonal: number;
	points: number;
}

export interface BoxScoreTraditionalV3Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	statistics: BoxScoreTraditionalV3Statistics;
}

export interface BoxScoreTraditionalV3Statistics {
	minutes: string;
	fieldGoalsMade: number;
	fieldGoalsAttempted: number;
	fieldGoalsPercentage: number;
	threePointersMade: number;
	threePointersAttempted: number;
	threePointersPercentage: number;
	freeThrowsMade: number;
	freeThrowsAttempted: number;
	freeThrowsPercentage: number;
	reboundsOffensive: number;
	reboundsDefensive: number;
	reboundsTotal: number;
	assists: number;
	steals: number;
	blocks: number;
	turnovers: number;
	foulsPersonal: number;
	points: number;
	plusMinusPoints: number;
}
