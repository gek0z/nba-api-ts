export interface GameRotationParams {
	gameID: number;
	leagueID?: string;
}

export interface AwayTeamRow {
	gameId: string;
	teamId: number;
	teamCity: string;
	teamName: string;
	personId: number;
	playerFirst: unknown;
	playerLast: unknown;
	inTimeReal: unknown;
	outTimeReal: unknown;
	playerPts: unknown;
	ptDiff: unknown;
	usgPct: number | null;
}

export interface HomeTeamRow {
	gameId: string;
	teamId: number;
	teamCity: string;
	teamName: string;
	personId: number;
	playerFirst: unknown;
	playerLast: unknown;
	inTimeReal: unknown;
	outTimeReal: unknown;
	playerPts: unknown;
	ptDiff: unknown;
	usgPct: number | null;
}

export interface GameRotationResponse {
	awayTeam: AwayTeamRow[];
	homeTeam: HomeTeamRow[];
}
