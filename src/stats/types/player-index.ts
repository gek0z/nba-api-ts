export interface PlayerIndexParams {
	active?: string;
	allStar?: string;
	college?: string;
	country?: string;
	draftPick?: string;
	draftYear?: number;
	height?: string;
	playerPosition?: string;
	historical?: string;
	leagueID?: string;
	season?: string;
	teamID?: number;
	weight?: string;
}

export interface PlayerIndexRow {
	personId: number;
	playerLastName: string;
	playerFirstName: string;
	playerSlug: string;
	teamId: number;
	teamSlug: string;
	isDefunct: unknown;
	teamCity: string;
	teamName: string;
	teamAbbreviation: string;
	jerseyNumber: unknown;
	position: string;
	height: unknown;
	weight: unknown;
	college: unknown;
	country: unknown;
	draftYear: unknown;
	draftRound: unknown;
	draftNumber: unknown;
	rosterStatus: string;
	pts: number;
	reb: number;
	ast: number;
	statsTimeframe: unknown;
	fromYear: unknown;
	toYear: unknown;
}

export interface PlayerIndexResponse {
	playerIndex: PlayerIndexRow[];
}
