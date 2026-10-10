export interface BoxScorePlayerTrackV3Params {
	gameID: string;
}

/** Parsed from the `boxScorePlayerTrack` object of the V3 response. */
export interface BoxScorePlayerTrackV3Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScorePlayerTrackV3Team;
	awayTeam: BoxScorePlayerTrackV3Team;
}

export interface BoxScorePlayerTrackV3Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScorePlayerTrackV3Player[];
	statistics: BoxScorePlayerTrackV3TeamStatistics;
}

export interface BoxScorePlayerTrackV3TeamStatistics {
	minutes: string;
	distance: number;
	reboundChancesOffensive: number;
	reboundChancesDefensive: number;
	reboundChancesTotal: number;
	touches: number;
	secondaryAssists: number;
	freeThrowAssists: number;
	passes: number;
	assists: number;
	contestedFieldGoalsMade: number;
	contestedFieldGoalsAttempted: number;
	contestedFieldGoalPercentage: number;
	uncontestedFieldGoalsMade: number;
	uncontestedFieldGoalsAttempted: number;
	uncontestedFieldGoalsPercentage: number;
	fieldGoalPercentage: number;
	defendedAtRimFieldGoalsMade: number;
	defendedAtRimFieldGoalsAttempted: number;
	defendedAtRimFieldGoalPercentage: number;
}

export interface BoxScorePlayerTrackV3Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	statistics: BoxScorePlayerTrackV3PlayerStatistics;
}

export interface BoxScorePlayerTrackV3PlayerStatistics {
	minutes: string;
	speed: number;
	distance: number;
	reboundChancesOffensive: number;
	reboundChancesDefensive: number;
	reboundChancesTotal: number;
	touches: number;
	secondaryAssists: number;
	freeThrowAssists: number;
	passes: number;
	assists: number;
	contestedFieldGoalsMade: number;
	contestedFieldGoalsAttempted: number;
	contestedFieldGoalPercentage: number;
	uncontestedFieldGoalsMade: number;
	uncontestedFieldGoalsAttempted: number;
	uncontestedFieldGoalsPercentage: number;
	fieldGoalPercentage: number;
	defendedAtRimFieldGoalsMade: number;
	defendedAtRimFieldGoalsAttempted: number;
	defendedAtRimFieldGoalPercentage: number;
}
