export interface BoxScoreMatchupsV3Params {
	gameID: string;
}

/** Parsed from the `boxScoreMatchups` object of the V3 response. */
export interface BoxScoreMatchupsV3Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScoreMatchupsV3Team;
	awayTeam: BoxScoreMatchupsV3Team;
}

export interface BoxScoreMatchupsV3Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScoreMatchupsV3Player[];
}

export interface BoxScoreMatchupsV3Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	matchups: BoxScoreMatchupsV3PlayerMatchup[];
}

export interface BoxScoreMatchupsV3PlayerMatchup {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	jerseyNum: string;
	statistics: BoxScoreMatchupsV3PlayerMatchupStatistics;
}

export interface BoxScoreMatchupsV3PlayerMatchupStatistics {
	matchupMinutes: string;
	matchupMinutesSort: number;
	partialPossessions: number;
	percentageDefenderTotalTime: number;
	percentageOffensiveTotalTime: number;
	percentageTotalTimeBothOn: number;
	switchesOn: number;
	playerPoints: number;
	teamPoints: number;
	matchupAssists: number;
	matchupPotentialAssists: number;
	matchupTurnovers: number;
	matchupBlocks: number;
	matchupFieldGoalsMade: number;
	matchupFieldGoalsAttempted: number;
	matchupFieldGoalsPercentage: number;
	matchupThreePointersMade: number;
	matchupThreePointersAttempted: number;
	matchupThreePointersPercentage: number;
	helpBlocks: number;
	helpFieldGoalsMade: number;
	helpFieldGoalsAttempted: number;
	helpFieldGoalsPercentage: number;
	matchupFreeThrowsMade: number;
	matchupFreeThrowsAttempted: number;
	shootingFouls: number;
}
