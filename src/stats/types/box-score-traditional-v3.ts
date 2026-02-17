export interface BoxScoreTraditionalV3Params {
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
	fieldgoalsmade: unknown;
	fieldgoalsattempted: unknown;
	fieldgoalspercentage: unknown;
	threepointersmade: unknown;
	threepointersattempted: unknown;
	threepointerspercentage: unknown;
	freethrowsmade: unknown;
	freethrowsattempted: unknown;
	freethrowspercentage: unknown;
	reboundsoffensive: unknown;
	reboundsdefensive: unknown;
	reboundstotal: unknown;
	assists: unknown;
	steals: unknown;
	blocks: unknown;
	turnovers: unknown;
	foulspersonal: unknown;
	points: unknown;
	plusminuspoints: unknown;
}

export interface TeamStarterBenchStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	minutes: unknown;
	fieldgoalsmade: unknown;
	fieldgoalsattempted: unknown;
	fieldgoalspercentage: unknown;
	threepointersmade: unknown;
	threepointersattempted: unknown;
	threepointerspercentage: unknown;
	freethrowsmade: unknown;
	freethrowsattempted: unknown;
	freethrowspercentage: unknown;
	reboundsoffensive: unknown;
	reboundsdefensive: unknown;
	reboundstotal: unknown;
	assists: unknown;
	steals: unknown;
	blocks: unknown;
	turnovers: unknown;
	foulspersonal: unknown;
	points: unknown;
	startersbench: unknown;
}

export interface TeamStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	minutes: unknown;
	fieldgoalsmade: unknown;
	fieldgoalsattempted: unknown;
	fieldgoalspercentage: unknown;
	threepointersmade: unknown;
	threepointersattempted: unknown;
	threepointerspercentage: unknown;
	freethrowsmade: unknown;
	freethrowsattempted: unknown;
	freethrowspercentage: unknown;
	reboundsoffensive: unknown;
	reboundsdefensive: unknown;
	reboundstotal: unknown;
	assists: unknown;
	steals: unknown;
	blocks: unknown;
	turnovers: unknown;
	foulspersonal: unknown;
	points: unknown;
	plusminuspoints: unknown;
}

export interface BoxScoreTraditionalV3Response {
	playerStats: PlayerStatsRow[];
	teamStarterBenchStats: TeamStarterBenchStatsRow[];
	teamStats: TeamStatsRow[];
}
