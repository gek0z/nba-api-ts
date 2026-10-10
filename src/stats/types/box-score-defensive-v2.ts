export interface BoxScoreDefensiveV2Params {
	gameID: string;
}

/** Parsed from the `boxScoreDefensive` object of the V3 response. */
export interface BoxScoreDefensiveV2Response {
	gameId: string;
	awayTeamId: number;
	homeTeamId: number;
	homeTeam: BoxScoreDefensiveV2Team;
	awayTeam: BoxScoreDefensiveV2Team;
}

export interface BoxScoreDefensiveV2Team {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	players: BoxScoreDefensiveV2Player[];
	statistics: BoxScoreDefensiveV2TeamStatistics;
}

export interface BoxScoreDefensiveV2TeamStatistics {
	minutes: unknown;
}

export interface BoxScoreDefensiveV2Player {
	personId: number;
	firstName: string;
	familyName: string;
	nameI: string;
	playerSlug: string;
	position: string;
	comment: string;
	jerseyNum: string;
	statistics: BoxScoreDefensiveV2PlayerStatistics;
}

export interface BoxScoreDefensiveV2PlayerStatistics {
	matchupMinutes: string;
	partialPossessions: number;
	switchesOn: number;
	playerPoints: number;
	defensiveRebounds: number;
	matchupAssists: number;
	matchupTurnovers: number;
	steals: number;
	blocks: number;
	matchupFieldGoalsMade: number;
	matchupFieldGoalsAttempted: number;
	matchupFieldGoalPercentage: number;
	matchupThreePointersMade: number;
	matchupThreePointersAttempted: number;
	matchupThreePointerPercentage: number;
}
