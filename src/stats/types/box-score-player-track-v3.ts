export type BoxScorePlayerTrackV3Params = {};

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
	speed: unknown;
	distance: unknown;
	reboundchancesoffensive: unknown;
	reboundchancesdefensive: unknown;
	reboundchancestotal: unknown;
	touches: unknown;
	secondaryassists: unknown;
	freethrowassists: unknown;
	passes: unknown;
	assists: unknown;
	contestedfieldgoalsmade: unknown;
	contestedfieldgoalsattempted: unknown;
	contestedfieldgoalpercentage: unknown;
	uncontestedfieldgoalsmade: unknown;
	uncontestedfieldgoalsattempted: unknown;
	uncontestedfieldgoalspercentage: unknown;
	fieldgoalpercentage: unknown;
	defendedatrimfieldgoalsmade: unknown;
	defendedatrimfieldgoalsattempted: unknown;
	defendedatrimfieldgoalpercentage: unknown;
}

export interface TeamStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	minutes: unknown;
	distance: unknown;
	reboundchancesoffensive: unknown;
	reboundchancesdefensive: unknown;
	reboundchancestotal: unknown;
	touches: unknown;
	secondaryassists: unknown;
	freethrowassists: unknown;
	passes: unknown;
	assists: unknown;
	contestedfieldgoalsmade: unknown;
	contestedfieldgoalsattempted: unknown;
	contestedfieldgoalpercentage: unknown;
	uncontestedfieldgoalsmade: unknown;
	uncontestedfieldgoalsattempted: unknown;
	uncontestedfieldgoalspercentage: unknown;
	fieldgoalpercentage: unknown;
	defendedatrimfieldgoalsmade: unknown;
	defendedatrimfieldgoalsattempted: unknown;
	defendedatrimfieldgoalpercentage: unknown;
}

export interface BoxScorePlayerTrackV3Response {
	playerStats: PlayerStatsRow[];
	teamStats: TeamStatsRow[];
}
