export interface DraftCombinePlayerAnthroParams {
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
	heightWoShoes: unknown;
	heightWoShoesFtIn: unknown;
	heightWShoes: unknown;
	heightWShoesFtIn: unknown;
	weight: unknown;
	wingspan: unknown;
	wingspanFtIn: unknown;
	standingReach: unknown;
	standingReachFtIn: unknown;
	bodyFatPct: number | null;
	handLength: unknown;
	handWidth: unknown;
}

export interface DraftCombinePlayerAnthroResponse {
	results: ResultsRow[];
}
