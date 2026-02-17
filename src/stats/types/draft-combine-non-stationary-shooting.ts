export interface DraftCombineNonStationaryShootingParams {
	leagueID?: string;
	seasonYear?: number;
}

export interface ResultsRow {
	tempPlayerId: number;
	playerId: number;
	firstName: string;
	lastName: string;
	playerName: string;
	position: string;
	offDribFifteenBreakLeftMade: unknown;
	offDribFifteenBreakLeftAttempt: unknown;
	offDribFifteenBreakLeftPct: number | null;
	offDribFifteenTopKeyMade: unknown;
	offDribFifteenTopKeyAttempt: unknown;
	offDribFifteenTopKeyPct: number | null;
	offDribFifteenBreakRightMade: unknown;
	offDribFifteenBreakRightAttempt: unknown;
	offDribFifteenBreakRightPct: number | null;
	offDribCollegeBreakLeftMade: unknown;
	offDribCollegeBreakLeftAttempt: unknown;
	offDribCollegeBreakLeftPct: number | null;
	offDribCollegeTopKeyMade: unknown;
	offDribCollegeTopKeyAttempt: unknown;
	offDribCollegeTopKeyPct: number | null;
	offDribCollegeBreakRightMade: unknown;
	offDribCollegeBreakRightAttempt: unknown;
	offDribCollegeBreakRightPct: number | null;
	onMoveFifteenMade: unknown;
	onMoveFifteenAttempt: unknown;
	onMoveFifteenPct: number | null;
	onMoveCollegeMade: unknown;
	onMoveCollegeAttempt: unknown;
	onMoveCollegePct: number | null;
}

export interface DraftCombineNonStationaryShootingResponse {
	results: ResultsRow[];
}
