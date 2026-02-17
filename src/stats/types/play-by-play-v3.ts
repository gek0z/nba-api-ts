export interface PlayByPlayV3Params {
	gameID: number;
	endPeriod?: number;
	startPeriod?: number;
}

export interface AvailableVideoRow {
	videoavailable: unknown;
}

export interface PlayByPlayRow {
	gameid: number;
	actionnumber: unknown;
	clock: unknown;
	period: unknown;
	teamid: number;
	teamtricode: string;
	personid: number;
	playername: string;
	playernamei: string;
	xlegacy: unknown;
	ylegacy: unknown;
	shotdistance: unknown;
	shotresult: unknown;
	isfieldgoal: unknown;
	scorehome: unknown;
	scoreaway: unknown;
	pointstotal: unknown;
	location: unknown;
	description: string;
	actiontype: string;
	subtype: string;
	videoavailable: unknown;
	actionid: number;
}

export interface PlayByPlayV3Response {
	availableVideo: AvailableVideoRow[];
	playByPlay: PlayByPlayRow[];
}
