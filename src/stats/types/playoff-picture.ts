export interface PlayoffPictureParams {
	leagueID?: string;
	seasonID?: number;
}

export interface EastConfPlayoffPictureRow {
	conference: unknown;
	highSeedRank: number;
	highSeedTeam: unknown;
	highSeedTeamId: number;
	lowSeedRank: number;
	lowSeedTeam: unknown;
	lowSeedTeamId: number;
	highSeedSeriesW: unknown;
	highSeedSeriesL: unknown;
	highSeedSeriesRemainingG: unknown;
	highSeedSeriesRemainingHomeG: unknown;
	highSeedSeriesRemainingAwayG: unknown;
}

export interface EastConfRemainingGamesRow {
	team: unknown;
	teamId: number;
	remainingG: unknown;
	remainingHomeG: unknown;
	remainingAwayG: unknown;
}

export interface EastConfStandingsRow {
	conference: unknown;
	rank: unknown;
	team: unknown;
	teamSlug: string;
	teamId: number;
	wins: unknown;
	losses: unknown;
	pct: unknown;
	div: unknown;
	conf: unknown;
	home: unknown;
	away: unknown;
	gb: unknown;
	grOver500: unknown;
	grOver500Home: unknown;
	grOver500Away: unknown;
	grUnder500: unknown;
	grUnder500Home: unknown;
	grUnder500Away: unknown;
	rankingCriteria: unknown;
	clinchedPlayoffs: unknown;
	clinchedConference: unknown;
	clinchedDivision: unknown;
	clinchedPlayIn: unknown;
	eliminatedPlayoffs: unknown;
	sosaRemaining: unknown;
	returntoplayEastPiFlag: unknown;
	returntoplayAlreadyEliminated: unknown;
	seedingGame1Outcome: unknown;
	seedingGame2Outcome: unknown;
	seedingGame3Outcome: unknown;
	seedingGame4Outcome: unknown;
	seedingGame5Outcome: unknown;
	seedingGame6Outcome: unknown;
	seedingGame7Outcome: unknown;
	seedingGame8Outcome: unknown;
	seedingGame1Id: number;
	seedingGame2Id: number;
	seedingGame3Id: number;
	seedingGame4Id: number;
	seedingGame5Id: number;
	seedingGame6Id: number;
	seedingGame7Id: number;
	seedingGame8Id: number;
	seedingGame1Opponent: unknown;
	seedingGame2Opponent: unknown;
	seedingGame3Opponent: unknown;
	seedingGame4Opponent: unknown;
	seedingGame5Opponent: unknown;
	seedingGame6Opponent: unknown;
	seedingGame7Opponent: unknown;
	seedingGame8Opponent: unknown;
	seedingGame1Label: unknown;
	seedingGame2Label: unknown;
	seedingGame3Label: unknown;
	seedingGame4Label: unknown;
	seedingGame5Label: unknown;
	seedingGame6Label: unknown;
	seedingGame7Label: unknown;
	seedingGame8Label: unknown;
}

export interface WestConfPlayoffPictureRow {
	conference: unknown;
	highSeedRank: number;
	highSeedTeam: unknown;
	highSeedTeamId: number;
	lowSeedRank: number;
	lowSeedTeam: unknown;
	lowSeedTeamId: number;
	highSeedSeriesW: unknown;
	highSeedSeriesL: unknown;
	highSeedSeriesRemainingG: unknown;
	highSeedSeriesRemainingHomeG: unknown;
	highSeedSeriesRemainingAwayG: unknown;
}

export interface WestConfRemainingGamesRow {
	team: unknown;
	teamId: number;
	remainingG: unknown;
	remainingHomeG: unknown;
	remainingAwayG: unknown;
}

export interface WestConfStandingsRow {
	conference: unknown;
	rank: unknown;
	team: unknown;
	teamSlug: string;
	teamId: number;
	wins: unknown;
	losses: unknown;
	pct: unknown;
	div: unknown;
	conf: unknown;
	home: unknown;
	away: unknown;
	gb: unknown;
	grOver500: unknown;
	grOver500Home: unknown;
	grOver500Away: unknown;
	grUnder500: unknown;
	grUnder500Home: unknown;
	grUnder500Away: unknown;
	rankingCriteria: unknown;
	clinchedPlayoffs: unknown;
	clinchedConference: unknown;
	clinchedDivision: unknown;
	clinchedPlayIn: unknown;
	eliminatedPlayoffs: unknown;
	sosaRemaining: unknown;
	returntoplayWestPiFlag: unknown;
	returntoplayAlreadyEliminated: unknown;
	seedingGame1Outcome: unknown;
	seedingGame2Outcome: unknown;
	seedingGame3Outcome: unknown;
	seedingGame4Outcome: unknown;
	seedingGame5Outcome: unknown;
	seedingGame6Outcome: unknown;
	seedingGame7Outcome: unknown;
	seedingGame8Outcome: unknown;
	seedingGame1Id: number;
	seedingGame2Id: number;
	seedingGame3Id: number;
	seedingGame4Id: number;
	seedingGame5Id: number;
	seedingGame6Id: number;
	seedingGame7Id: number;
	seedingGame8Id: number;
	seedingGame1Opponent: unknown;
	seedingGame2Opponent: unknown;
	seedingGame3Opponent: unknown;
	seedingGame4Opponent: unknown;
	seedingGame5Opponent: unknown;
	seedingGame6Opponent: unknown;
	seedingGame7Opponent: unknown;
	seedingGame8Opponent: unknown;
	seedingGame1Label: unknown;
	seedingGame2Label: unknown;
	seedingGame3Label: unknown;
	seedingGame4Label: unknown;
	seedingGame5Label: unknown;
	seedingGame6Label: unknown;
	seedingGame7Label: unknown;
	seedingGame8Label: unknown;
}

export interface PlayoffPictureResponse {
	eastConfPlayoffPicture: EastConfPlayoffPictureRow[];
	eastConfRemainingGames: EastConfRemainingGamesRow[];
	eastConfStandings: EastConfStandingsRow[];
	westConfPlayoffPicture: WestConfPlayoffPictureRow[];
	westConfRemainingGames: WestConfRemainingGamesRow[];
	westConfStandings: WestConfStandingsRow[];
}
