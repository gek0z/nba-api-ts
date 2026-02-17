export interface DraftHistoryParams {
	leagueID?: string;
	college?: string;
	overallPick?: string;
	roundNum?: string;
	roundPick?: string;
	season?: string;
	teamID?: number;
	topX?: string;
}

export interface DraftHistoryRow {
	personId: number;
	playerName: string;
	season: string;
	roundNumber: unknown;
	roundPick: unknown;
	overallPick: unknown;
	draftType: string;
	teamId: number;
	teamCity: string;
	teamName: string;
	teamAbbreviation: string;
	organization: unknown;
	organizationType: string;
}

export interface DraftHistoryResponse {
	draftHistory: DraftHistoryRow[];
}
