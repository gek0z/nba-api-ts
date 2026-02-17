export interface DraftBoardParams {
	leagueID?: string;
	season?: string;
	college?: string;
	overallPick?: string;
	roundNum?: string;
	roundPick?: string;
	teamID?: number;
	topX?: string;
}

export interface DraftBoardRow {
	personId: number;
	playerName: string;
	season: string;
	roundNumber: unknown;
	roundPick: unknown;
	overallPick: unknown;
	teamId: number;
	teamCity: string;
	teamName: string;
	teamAbbreviation: string;
	organization: unknown;
	organizationType: string;
	height: unknown;
	weight: unknown;
	position: string;
	jerseyNumber: unknown;
	birthdate: string;
	age: number;
}

export interface DraftBoardResponse {
	draftBoard: DraftBoardRow[];
}
