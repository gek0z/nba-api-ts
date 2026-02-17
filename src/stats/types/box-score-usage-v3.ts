export interface BoxScoreUsageV3Params {
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
	usagepercentage: unknown;
	percentagefieldgoalsmade: unknown;
	percentagefieldgoalsattempted: unknown;
	percentagethreepointersmade: unknown;
	percentagethreepointersattempted: unknown;
	percentagefreethrowsmade: unknown;
	percentagefreethrowsattempted: unknown;
	percentagereboundsoffensive: unknown;
	percentagereboundsdefensive: unknown;
	percentagereboundstotal: unknown;
	percentageassists: unknown;
	percentageturnovers: unknown;
	percentagesteals: unknown;
	percentageblocks: unknown;
	percentageblocksallowed: unknown;
	percentagepersonalfouls: unknown;
	percentagepersonalfoulsdrawn: unknown;
	percentagepoints: unknown;
}

export interface TeamStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	minutes: unknown;
	usagepercentage: unknown;
	percentagefieldgoalsmade: unknown;
	percentagefieldgoalsattempted: unknown;
	percentagethreepointersmade: unknown;
	percentagethreepointersattempted: unknown;
	percentagefreethrowsmade: unknown;
	percentagefreethrowsattempted: unknown;
	percentagereboundsoffensive: unknown;
	percentagereboundsdefensive: unknown;
	percentagereboundstotal: unknown;
	percentageassists: unknown;
	percentageturnovers: unknown;
	percentagesteals: unknown;
	percentageblocks: unknown;
	percentageblocksallowed: unknown;
	percentagepersonalfouls: unknown;
	percentagepersonalfoulsdrawn: unknown;
	percentagepoints: unknown;
}

export interface BoxScoreUsageV3Response {
	playerStats: PlayerStatsRow[];
	teamStats: TeamStatsRow[];
}
