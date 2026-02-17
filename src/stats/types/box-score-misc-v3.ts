export interface BoxScoreMiscV3Params {
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
	pointsoffturnovers: unknown;
	pointssecondchance: unknown;
	pointsfastbreak: unknown;
	pointspaint: unknown;
	opppointsoffturnovers: unknown;
	opppointssecondchance: unknown;
	opppointsfastbreak: unknown;
	opppointspaint: unknown;
	blocks: unknown;
	blocksagainst: unknown;
	foulspersonal: unknown;
	foulsdrawn: unknown;
}

export interface TeamStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	minutes: unknown;
	pointsoffturnovers: unknown;
	pointssecondchance: unknown;
	pointsfastbreak: unknown;
	pointspaint: unknown;
	opppointsoffturnovers: unknown;
	opppointssecondchance: unknown;
	opppointsfastbreak: unknown;
	opppointspaint: unknown;
	blocks: unknown;
	blocksagainst: unknown;
	foulspersonal: unknown;
	foulsdrawn: unknown;
}

export interface BoxScoreMiscV3Response {
	playerStats: PlayerStatsRow[];
	teamStats: TeamStatsRow[];
}
