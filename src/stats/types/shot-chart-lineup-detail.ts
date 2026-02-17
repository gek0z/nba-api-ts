export interface ShotChartLineupDetailParams {
	contextMeasure?: string;
	gROUP_ID?: number;
	leagueID?: string;
	period?: number;
	season?: string;
	seasonType?: string;
	contextFilter?: string;
	dateFrom?: string;
	dateTo?: string;
	gameID?: number;
	gameSegment?: string;
	lastNGames?: number;
	location?: string;
	month?: number;
	opponentTeamID?: number;
	outcome?: string;
	seasonSegment?: string;
	teamID?: number;
	vsConference?: string;
	vsDivision?: string;
}

export interface ShotChartLineupDetailRow {
	gridType: string;
	gameId: string;
	gameEventId: number;
	groupId: number;
	groupName: string;
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

export interface ShotChartLineupLeagueAverageRow {
	gridType: string;
	shotZoneBasic: unknown;
	shotZoneArea: unknown;
	shotZoneRange: unknown;
	fga: number;
	fgm: number;
	fgPct: number | null;
}

export interface ShotChartLineupDetailResponse {
	shotChartLineupDetail: ShotChartLineupDetailRow[];
	shotChartLineupLeagueAverage: ShotChartLineupLeagueAverageRow[];
}
