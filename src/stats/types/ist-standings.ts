export interface ISTStandingsParams {
	leagueID?: string;
	season?: string;
	section?: string;
}

export interface StandingsRow {
	leagueid: number;
	seasonyear: string;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamabbreviation: string;
	teamslug: string;
	conference: unknown;
	istgroup: unknown;
	clinchindicator: unknown;
	clinchedistknockout: unknown;
	clinchedistgroup: unknown;
	clinchedistwildcard: unknown;
	istwildcardrank: unknown;
	istgrouprank: unknown;
	istknockoutrank: unknown;
	wins: unknown;
	losses: unknown;
	pct: unknown;
	istgroupgb: unknown;
	istwildcardgb: unknown;
	diff: unknown;
	pts: number;
	opppts: unknown;
	gameid1: unknown;
	opponentteamabbreviation1: string;
	location1: unknown;
	gamestatus1: string;
	gamestatustext1: string;
	outcome1: unknown;
	gameid2: unknown;
	opponentteamabbreviation2: string;
	location2: unknown;
	gamestatus2: string;
	gamestatustext2: string;
	outcome2: unknown;
	gameid3: unknown;
	opponentteamabbreviation3: string;
	location3: unknown;
	gamestatus3: string;
	gamestatustext3: string;
	outcome3: unknown;
	gameid4: unknown;
	opponentteamabbreviation4: string;
	location4: unknown;
	gamestatus4: string;
	gamestatustext4: string;
	outcome4: unknown;
}

export interface ISTStandingsResponse {
	standings: StandingsRow[];
}
