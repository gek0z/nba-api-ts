export interface WinProbabilityPBPParams {
	gameID: number;
	runType?: string;
}

export interface GameInfoRow {
	gameId: string;
	gameDate: string;
	homeTeamId: number;
	homeTeamAbr: unknown;
	homeTeamPts: unknown;
	visitorTeamId: number;
	visitorTeamAbr: unknown;
	visitorTeamPts: unknown;
}

export interface WinProbPBPRow {
	gameId: string;
	eventNum: unknown;
	homePct: number | null;
	visitorPct: number | null;
	homePts: unknown;
	visitorPts: unknown;
	homeScoreMargin: unknown;
	period: unknown;
	secondsRemaining: unknown;
	homePossInd: unknown;
	homeG: unknown;
	description: string;
	location: unknown;
	pctimestring: unknown;
	isvisible: unknown;
}

export interface WinProbabilityPBPResponse {
	gameInfo: GameInfoRow[];
	winProbPBP: WinProbPBPRow[];
}
