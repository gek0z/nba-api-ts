export interface LeadersTilesParams {
	gameScope?: string;
	leagueID?: string;
	playerOrTeam?: string;
	playerScope?: string;
	season?: string;
	seasonType?: string;
	stat?: string;
}

export interface AllTimeSeasonHighRow {
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	seasonYear: string;
	pts: number;
}

export interface LastSeasonHighRow {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	pts: number;
}

export interface LeadersTilesRow {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	pts: number;
}

export interface LowSeasonHighRow {
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	seasonYear: string;
	pts: number;
}

export interface LeadersTilesResponse {
	allTimeSeasonHigh: AllTimeSeasonHighRow[];
	lastSeasonHigh: LastSeasonHighRow[];
	leadersTiles: LeadersTilesRow[];
	lowSeasonHigh: LowSeasonHighRow[];
}
