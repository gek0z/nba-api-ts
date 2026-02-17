export interface PlayerCareerByCollegeParams {
	college: string;
	leagueID?: string;
	perMode?: string;
	seasonType?: string;
	season?: string;
}

export interface PlayerCareerByCollegeRow {
	playerId: number;
	playerName: string;
	college: unknown;
	gp: number;
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
}

export interface PlayerCareerByCollegeResponse {
	playerCareerByCollege: PlayerCareerByCollegeRow[];
}
