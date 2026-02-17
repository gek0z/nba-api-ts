export interface BoxScoreAdvancedV3Params {
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
	estimatedoffensiverating: unknown;
	offensiverating: unknown;
	estimateddefensiverating: unknown;
	defensiverating: unknown;
	estimatednetrating: unknown;
	netrating: unknown;
	assistpercentage: unknown;
	assisttoturnover: unknown;
	assistratio: unknown;
	offensivereboundpercentage: unknown;
	defensivereboundpercentage: unknown;
	reboundpercentage: unknown;
	turnoverratio: unknown;
	effectivefieldgoalpercentage: unknown;
	trueshootingpercentage: unknown;
	usagepercentage: unknown;
	estimatedusagepercentage: unknown;
	estimatedpace: unknown;
	pace: unknown;
	paceper40: unknown;
	possessions: unknown;
	pie: unknown;
}

export interface TeamStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	minutes: unknown;
	estimatedoffensiverating: unknown;
	offensiverating: unknown;
	estimateddefensiverating: unknown;
	defensiverating: unknown;
	estimatednetrating: unknown;
	netrating: unknown;
	assistpercentage: unknown;
	assisttoturnover: unknown;
	assistratio: unknown;
	offensivereboundpercentage: unknown;
	defensivereboundpercentage: unknown;
	reboundpercentage: unknown;
	estimatedteamturnoverpercentage: unknown;
	turnoverratio: unknown;
	effectivefieldgoalpercentage: unknown;
	trueshootingpercentage: unknown;
	usagepercentage: unknown;
	estimatedusagepercentage: unknown;
	estimatedpace: unknown;
	pace: unknown;
	paceper40: unknown;
	possessions: unknown;
	pie: unknown;
}

export interface BoxScoreAdvancedV3Response {
	playerStats: PlayerStatsRow[];
	teamStats: TeamStatsRow[];
}
