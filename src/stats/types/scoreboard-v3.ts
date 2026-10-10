export interface ScoreboardV3Params {
	gameDate: string;
	leagueID?: string;
}

/** Parsed from the `scoreboard` object of the V3 response. */
export interface ScoreboardV3Response {
	gameDate: string;
	leagueId: string;
	leagueName: string;
	games: ScoreboardV3Game[];
}

export interface ScoreboardV3Game {
	gameId: string;
	gameCode: string;
	gameStatus: number;
	gameStatusText: string;
	period: number;
	gameClock: string;
	gameTimeUTC: string;
	gameEt: string;
	regulationPeriods: number;
	seriesGameNumber: string;
	gameLabel: string;
	gameSubLabel: string;
	seriesText: string;
	ifNecessary: boolean;
	seriesConference: string;
	poRoundDesc: string;
	gameSubtype: string;
	isNeutral: boolean;
	gameLeaders: ScoreboardV3GameLeaders;
	teamLeaders: ScoreboardV3TeamLeaders;
	broadcasters: ScoreboardV3Broadcasters;
	homeTeam: ScoreboardV3Team;
	awayTeam: ScoreboardV3Team;
}

export interface ScoreboardV3Team {
	teamId: number;
	teamName: string;
	teamCity: string;
	teamTricode: string;
	teamSlug: string;
	wins: number;
	losses: number;
	score: number;
	seed: number;
	inBonus: unknown;
	timeoutsRemaining: number;
	periods: ScoreboardV3TeamPeriod[];
}

export interface ScoreboardV3TeamPeriod {
	period: number;
	periodType: string;
	score: number;
}

export interface ScoreboardV3Broadcasters {
	nationalBroadcasters: ScoreboardV3Broadcaster[];
	nationalRadioBroadcasters: ScoreboardV3Broadcaster[];
	nationalOttBroadcasters: unknown[];
	homeTvBroadcasters: ScoreboardV3Broadcaster[];
	homeRadioBroadcasters: ScoreboardV3Broadcaster[];
	homeOttBroadcasters: ScoreboardV3Broadcaster[];
	awayTvBroadcasters: ScoreboardV3Broadcaster[];
	awayRadioBroadcasters: ScoreboardV3Broadcaster[];
	awayOttBroadcasters: ScoreboardV3Broadcaster[];
}

export interface ScoreboardV3Broadcaster {
	broadcasterId: number;
	broadcastDisplay: string;
	broadcasterTeamId: number;
	broadcasterDescription: string;
}

export interface ScoreboardV3TeamLeaders {
	homeLeaders: ScoreboardV3Leader;
	awayLeaders: ScoreboardV3Leader;
	seasonLeadersFlag: number;
}

export interface ScoreboardV3GameLeaders {
	homeLeaders: ScoreboardV3Leader;
	awayLeaders: ScoreboardV3Leader;
}

export interface ScoreboardV3Leader {
	personId: number;
	name: string;
	playerSlug: string;
	jerseyNum: string;
	position: string;
	teamTricode: string;
	points: number;
	rebounds: number;
	assists: number;
}
