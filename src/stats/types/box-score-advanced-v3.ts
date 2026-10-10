export interface BoxScoreAdvancedV3Params {
	gameID: string;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

/** Parsed from the `boxScoreAdvanced` object of the V3 response. */
export interface BoxScoreAdvancedV3Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScoreAdvancedV3Team;
	awayTeam: BoxScoreAdvancedV3Team;
}

export interface BoxScoreAdvancedV3Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScoreAdvancedV3Player[];
	statistics: BoxScoreAdvancedV3TeamStatistics;
}

export interface BoxScoreAdvancedV3TeamStatistics {
	minutes: string;
	estimatedOffensiveRating: number;
	offensiveRating: number;
	estimatedDefensiveRating: number;
	defensiveRating: number;
	estimatedNetRating: number;
	netRating: number;
	assistPercentage: number;
	assistToTurnover: number;
	assistRatio: number;
	offensiveReboundPercentage: number;
	defensiveReboundPercentage: number;
	reboundPercentage: number;
	estimatedTeamTurnoverPercentage: number;
	turnoverRatio: number;
	effectiveFieldGoalPercentage: number;
	trueShootingPercentage: number;
	usagePercentage: number;
	estimatedUsagePercentage: number;
	estimatedPace: number;
	pace: number;
	pacePer40: number;
	possessions: number;
	PIE: number;
}

export interface BoxScoreAdvancedV3Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	statistics: BoxScoreAdvancedV3PlayerStatistics;
}

export interface BoxScoreAdvancedV3PlayerStatistics {
	minutes: string;
	estimatedOffensiveRating: number;
	offensiveRating: number;
	estimatedDefensiveRating: number;
	defensiveRating: number;
	estimatedNetRating: number;
	netRating: number;
	assistPercentage: number;
	assistToTurnover: number;
	assistRatio: number;
	offensiveReboundPercentage: number;
	defensiveReboundPercentage: number;
	reboundPercentage: number;
	turnoverRatio: number;
	effectiveFieldGoalPercentage: number;
	trueShootingPercentage: number;
	usagePercentage: number;
	estimatedUsagePercentage: number;
	estimatedPace: number;
	pace: number;
	pacePer40: number;
	possessions: number;
	PIE: number;
}
