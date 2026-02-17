export interface CumeStatsPlayerParams {
	playerID: number;
	gameIDs: string;
	leagueID?: string;
	season?: string;
	seasonType?: string;
}

export interface GameByGameStatsRow {
	dateEst: string;
	visitorTeam: unknown;
	homeTeam: unknown;
	gp: number;
	gs: number;
	actualMinutes: unknown;
	actualSeconds: unknown;
	fg: unknown;
	fga: number;
	fgPct: number | null;
	fg3: unknown;
	fg3a: number;
	fg3Pct: number | null;
	ft: unknown;
	fta: number;
	ftPct: number | null;
	offReb: unknown;
	defReb: unknown;
	totReb: unknown;
	avgTotReb: unknown;
	ast: number;
	pf: number;
	dq: unknown;
	stl: number;
	turnovers: unknown;
	blk: number;
	pts: number;
	avgPts: unknown;
}

export interface TotalPlayerStatsRow {
	displayFiLast: unknown;
	personId: number;
	jerseyNum: unknown;
	gp: number;
	gs: number;
	actualMinutes: unknown;
	actualSeconds: unknown;
	fg: unknown;
	fga: number;
	fgPct: number | null;
	fg3: unknown;
	fg3a: number;
	fg3Pct: number | null;
	ft: unknown;
	fta: number;
	ftPct: number | null;
	offReb: unknown;
	defReb: unknown;
	totReb: unknown;
	ast: number;
	pf: number;
	dq: unknown;
	stl: number;
	turnovers: unknown;
	blk: number;
	pts: number;
	maxActualMinutes: unknown;
	maxActualSeconds: unknown;
	maxReb: unknown;
	maxAst: unknown;
	maxStl: unknown;
	maxTurnovers: unknown;
	maxBlk: unknown;
	maxPts: unknown;
	avgActualMinutes: unknown;
	avgActualSeconds: unknown;
	avgTotReb: unknown;
	avgAst: unknown;
	avgStl: unknown;
	avgTurnovers: unknown;
	avgBlk: unknown;
	avgPts: unknown;
	perMinTotReb: unknown;
	perMinAst: unknown;
	perMinStl: unknown;
	perMinTurnovers: unknown;
	perMinBlk: unknown;
	perMinPts: unknown;
}

export interface CumeStatsPlayerResponse {
	gameByGameStats: GameByGameStatsRow[];
	totalPlayerStats: TotalPlayerStatsRow[];
}
