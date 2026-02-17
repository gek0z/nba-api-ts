export interface TeamYearByYearStatsParams {
	teamID: number;
	leagueID?: string;
	perMode?: string;
	seasonType?: string;
}

export interface TeamStatsRow {
	teamId: number;
	teamCity: string;
	teamName: string;
	year: unknown;
	gp: number;
	wins: unknown;
	losses: unknown;
	winPct: number | null;
	confRank: number;
	divRank: number;
	poWins: unknown;
	poLosses: unknown;
	confCount: unknown;
	divCount: unknown;
	nbaFinalsAppearance: unknown;
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
	pf: number;
	stl: number;
	tov: number;
	blk: number;
	pts: number;
	ptsRank: number;
}

export interface TeamYearByYearStatsResponse {
	teamStats: TeamStatsRow[];
}
