export interface ShotChartDetailParams {
	teamID: number;
	playerID: number;
	contextMeasure?: string;
	lastNGames?: number;
	leagueID?: string;
	month?: number;
	opponentTeamID?: number;
	period?: number;
	seasonType?: string;
	aheadBehind?: string;
	clutchTime?: string;
	contextFilter?: string;
	dateFrom?: string;
	dateTo?: string;
	endPeriod?: number;
	endRange?: number;
	gameID?: number;
	gameSegment?: string;
	location?: string;
	outcome?: string;
	playerPosition?: string;
	pointDiff?: number;
	position?: string;
	rangeType?: number;
	rookieYear?: number;
	season?: string;
	seasonSegment?: string;
	startPeriod?: number;
	startRange?: number;
	vsConference?: string;
	vsDivision?: string;
}

export interface LeagueAveragesRow {
	gridType: string;
	shotZoneBasic: unknown;
	shotZoneArea: unknown;
	shotZoneRange: unknown;
	fga: number;
	fgm: number;
	fgPct: number | null;
}

export interface Shot_Chart_DetailRow {
	gridType: string;
	gameId: string;
	gameEventId: number;
	playerId: number;
	playerName: string;
	teamId: number;
	teamName: string;
	period: unknown;
	minutesRemaining: unknown;
	secondsRemaining: unknown;
	eventType: string;
	actionType: string;
	shotType: string;
	shotZoneBasic: unknown;
	shotZoneArea: unknown;
	shotZoneRange: unknown;
	shotDistance: unknown;
	locX: unknown;
	locY: unknown;
	shotAttemptedFlag: unknown;
	shotMadeFlag: unknown;
	gameDate: string;
	htm: unknown;
	vtm: unknown;
}

export interface ShotChartDetailResponse {
	leagueAverages: LeagueAveragesRow[];
	shot_Chart_Detail: Shot_Chart_DetailRow[];
}
