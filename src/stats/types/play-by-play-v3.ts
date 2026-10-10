export interface PlayByPlayV3Params {
	gameID: string;
	endPeriod?: number;
	startPeriod?: number;
}

/** Parsed from the `game` object of the V3 response. */
export interface PlayByPlayV3Response {
	gameId: string;
	videoAvailable: number;
	actions: PlayByPlayV3Action[];
}

export interface PlayByPlayV3Action {
	actionNumber: number;
	clock: string;
	period: number;
	teamId: number;
	teamTricode: string;
	personId: number;
	playerName: string;
	playerNameI: string;
	xLegacy: number;
	yLegacy: number;
	shotDistance: number;
	shotResult: string;
	isFieldGoal: number;
	scoreHome: string;
	scoreAway: string;
	pointsTotal: number;
	location: string;
	description: string;
	actionType: string;
	subType: string;
	videoAvailable: number;
	shotValue: number;
	actionId: number;
}
