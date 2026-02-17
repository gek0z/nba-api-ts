export interface LeagueGameLogParams {
	counter?: number;
	direction?: string;
	leagueID?: string;
	playerOrTeam?: string;
	season?: string;
	seasonType?: string;
	sorter?: string;
	dateFrom?: string;
	dateTo?: string;
}

export interface LeagueGameLogRow {
	seasonId: string;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	gameId: string;
	gameDate: string;
	matchup: string;
	wl: unknown;
	min: number;
	fgm: number;
	fga: number;
	fgPct: number | null;
	fg3m: number;
	fg3a: number;
	fg3Pct: number | null;
	ftm: number;
	fta: number;
	ftPct: number | null;
	oreb: number;
	dreb: number;
	reb: number;
	ast: number;
	stl: number;
	blk: number;
	tov: number;
	pf: number;
	pts: number;
	plusMinus: number;
	videoAvailable: unknown;
}

export interface LeagueGameLogResponse {
	leagueGameLog: LeagueGameLogRow[];
}
