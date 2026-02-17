export interface BoxScoreFourFactorsV3Params {
	gameID: number;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

export interface PlayerStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	personid: number;
	firstname: string;
	familyname: string;
	namei: string;
	playerslug: string;
	position: string;
	comment: string;
	jerseynum: unknown;
	minutes: unknown;
	effectivefieldgoalpercentage: unknown;
	freethrowattemptrate: unknown;
	teamturnoverpercentage: unknown;
	offensivereboundpercentage: unknown;
	oppeffectivefieldgoalpercentage: unknown;
	oppfreethrowattemptrate: unknown;
	oppteamturnoverpercentage: unknown;
	oppoffensivereboundpercentage: unknown;
}

export interface TeamStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	minutes: unknown;
	effectivefieldgoalpercentage: unknown;
	freethrowattemptrate: unknown;
	teamturnoverpercentage: unknown;
	offensivereboundpercentage: unknown;
	oppeffectivefieldgoalpercentage: unknown;
	oppfreethrowattemptrate: unknown;
	oppteamturnoverpercentage: unknown;
	oppoffensivereboundpercentage: unknown;
}

export interface BoxScoreFourFactorsV3Response {
	playerStats: PlayerStatsRow[];
	teamStats: TeamStatsRow[];
}
