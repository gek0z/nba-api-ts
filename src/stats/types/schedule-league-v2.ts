export interface ScheduleLeagueV2Params {
	leagueID?: string;
	season?: string;
}

/** Parsed from the `leagueSchedule` object of the V3 response. */
export interface ScheduleLeagueV2Response {
	seasonYear: string;
	leagueId: string;
	gameDates: ScheduleLeagueV2GameDate[];
	weeks: ScheduleLeagueV2Week[];
}

export interface ScheduleLeagueV2Week {
	weekNumber: number;
	weekName: string;
	startDate: string;
	endDate: string;
}

export interface ScheduleLeagueV2GameDate {
	gameDate: string;
	games: ScheduleLeagueV2Game[];
}

export interface ScheduleLeagueV2Game {
	gameId: string;
	gameCode: string;
	gameStatus: number;
	gameStatusText: string;
	gameSequence: number;
	gameDateEst: string;
	gameTimeEst: string;
	gameDateTimeEst: string;
	gameDateUTC: string;
	gameTimeUTC: string;
	gameDateTimeUTC: string;
	awayTeamTime: string;
	homeTeamTime: string;
	day: string;
	monthNum: number;
	weekNumber: number;
	weekName: string;
	ifNecessary: string;
	seriesGameNumber: string;
	gameLabel: string;
	gameSubLabel: string;
	seriesText: string;
	arenaName: string;
	arenaState: string;
	arenaCity: string;
	postponedStatus: string;
	branchLink: string;
	gameSubtype: string;
	isNeutral: boolean;
	broadcasters: ScheduleLeagueV2Broadcasters;
	homeTeam: ScheduleLeagueV2Team;
	awayTeam: ScheduleLeagueV2Team;
	pointsLeaders: ScheduleLeagueV2PointsLeader[];
}

export interface ScheduleLeagueV2PointsLeader {
	personId: number;
	firstName: string;
	lastName: string;
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	points: number;
}

export interface ScheduleLeagueV2Team {
	teamId: number;
	teamName: string;
	teamCity: string;
	teamTricode: string;
	teamSlug: string;
	wins: number;
	losses: number;
	score: number;
	seed: number;
}

export interface ScheduleLeagueV2Broadcasters {
	nationalBroadcasters: ScheduleLeagueV2NationalBroadcaster[];
	nationalRadioBroadcasters: ScheduleLeagueV2NationalRadioBroadcaster[];
	nationalOttBroadcasters: unknown[];
	homeTvBroadcasters: ScheduleLeagueV2NationalRadioBroadcaster[];
	homeRadioBroadcasters: ScheduleLeagueV2NationalRadioBroadcaster[];
	homeOttBroadcasters: unknown[];
	awayTvBroadcasters: ScheduleLeagueV2NationalRadioBroadcaster[];
	awayRadioBroadcasters: ScheduleLeagueV2NationalRadioBroadcaster[];
	awayOttBroadcasters: unknown[];
}

export interface ScheduleLeagueV2NationalRadioBroadcaster {
	broadcasterScope: string;
	broadcasterMedia: string;
	broadcasterId: number;
	broadcasterDisplay: string;
	broadcasterAbbreviation: string;
	broadcasterDescription: string;
	tapeDelayComments: string;
	broadcasterVideoLink: string;
	broadcasterTeamId: number;
	broadcasterRanking: unknown;
	localizationRegion: string;
}

export interface ScheduleLeagueV2NationalBroadcaster {
	broadcasterScope: string;
	broadcasterMedia: string;
	broadcasterId: number;
	broadcasterDisplay: string;
	broadcasterAbbreviation: string;
	broadcasterDescription: string;
	tapeDelayComments: string;
	broadcasterVideoLink: string;
	broadcasterTeamId: number;
	broadcasterRanking: number | null;
	localizationRegion: string;
}
