export interface PlayerProfileV2Params {
	playerID: number;
	perMode?: string;
	leagueID?: string;
}

export interface CareerHighsRow {
	playerId: number;
	gameId: string;
	gameDate: string;
	vsTeamId: number;
	vsTeamCity: string;
	vsTeamName: string;
	vsTeamAbbreviation: string;
	stat: unknown;
	statValue: unknown;
	statOrder: unknown;
	dateEst: string;
}

export interface CareerTotalsAllStarSeasonRow {
	playerId: number;
	leagueId: string;
	teamId: number;
	gp: number;
	gs: number;
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

export interface CareerTotalsCollegeSeasonRow {
	playerId: number;
	leagueId: string;
	organizationId: number;
	gp: number;
	gs: number;
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

export interface CareerTotalsPostSeasonRow {
	playerId: number;
	leagueId: string;
	teamId: number;
	gp: number;
	gs: number;
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

export interface CareerTotalsPreseasonRow {
	playerId: number;
	leagueId: string;
	teamId: number;
	gp: number;
	gs: number;
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

export interface CareerTotalsRegularSeasonRow {
	playerId: number;
	leagueId: string;
	teamId: number;
	gp: number;
	gs: number;
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

export interface NextGameRow {
	gameId: string;
	gameDate: string;
	gameTime: unknown;
	location: unknown;
	playerTeamId: number;
	playerTeamCity: string;
	playerTeamNickname: string;
	playerTeamAbbreviation: string;
	vsTeamId: number;
	vsTeamCity: string;
	vsTeamNickname: string;
	vsTeamAbbreviation: string;
}

export interface SeasonHighsRow {
	playerId: number;
	gameDate: string;
	vsTeamId: number;
	vsTeamCity: string;
	vsTeamName: string;
	vsTeamAbbreviation: string;
	stat: unknown;
	statsValue: unknown;
	statOrder: unknown;
	dateEst: string;
}

export interface SeasonRankingsPostSeasonRow {
	playerId: number;
	seasonId: string;
	leagueId: string;
	teamId: number;
	teamAbbreviation: string;
	playerAge: number;
	gp: number;
	gs: number;
	rankMin: number;
	rankFgm: number;
	rankFga: number;
	rankFgPct: number | null;
	rankFg3m: number;
	rankFg3a: number;
	rankFg3Pct: number | null;
	rankFtm: number;
	rankFta: number;
	rankFtPct: number | null;
	rankOreb: number;
	rankDreb: number;
	rankReb: number;
	rankAst: number;
	rankStl: number;
	rankBlk: number;
	rankTov: number;
	rankPts: number;
	rankEff: number;
}

export interface SeasonRankingsRegularSeasonRow {
	playerId: number;
	seasonId: string;
	leagueId: string;
	teamId: number;
	teamAbbreviation: string;
	playerAge: number;
	gp: number;
	gs: number;
	rankMin: number;
	rankFgm: number;
	rankFga: number;
	rankFgPct: number | null;
	rankFg3m: number;
	rankFg3a: number;
	rankFg3Pct: number | null;
	rankFtm: number;
	rankFta: number;
	rankFtPct: number | null;
	rankOreb: number;
	rankDreb: number;
	rankReb: number;
	rankAst: number;
	rankStl: number;
	rankBlk: number;
	rankTov: number;
	rankPts: number;
	rankEff: number;
}

export interface SeasonTotalsAllStarSeasonRow {
	playerId: number;
	seasonId: string;
	leagueId: string;
	teamId: number;
	teamAbbreviation: string;
	playerAge: number;
	gp: number;
	gs: number;
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

export interface SeasonTotalsCollegeSeasonRow {
	playerId: number;
	seasonId: string;
	leagueId: string;
	organizationId: number;
	schoolName: string;
	playerAge: number;
	gp: number;
	gs: number;
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

export interface SeasonTotalsPostSeasonRow {
	playerId: number;
	seasonId: string;
	leagueId: string;
	teamId: number;
	teamAbbreviation: string;
	playerAge: number;
	gp: number;
	gs: number;
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

export interface SeasonTotalsPreseasonRow {
	playerId: number;
	seasonId: string;
	leagueId: string;
	teamId: number;
	teamAbbreviation: string;
	playerAge: number;
	gp: number;
	gs: number;
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

export interface SeasonTotalsRegularSeasonRow {
	playerId: number;
	seasonId: string;
	leagueId: string;
	teamId: number;
	teamAbbreviation: string;
	playerAge: number;
	gp: number;
	gs: number;
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

export interface PlayerProfileV2Response {
	careerHighs: CareerHighsRow[];
	careerTotalsAllStarSeason: CareerTotalsAllStarSeasonRow[];
	careerTotalsCollegeSeason: CareerTotalsCollegeSeasonRow[];
	careerTotalsPostSeason: CareerTotalsPostSeasonRow[];
	careerTotalsPreseason: CareerTotalsPreseasonRow[];
	careerTotalsRegularSeason: CareerTotalsRegularSeasonRow[];
	nextGame: NextGameRow[];
	seasonHighs: SeasonHighsRow[];
	seasonRankingsPostSeason: SeasonRankingsPostSeasonRow[];
	seasonRankingsRegularSeason: SeasonRankingsRegularSeasonRow[];
	seasonTotalsAllStarSeason: SeasonTotalsAllStarSeasonRow[];
	seasonTotalsCollegeSeason: SeasonTotalsCollegeSeasonRow[];
	seasonTotalsPostSeason: SeasonTotalsPostSeasonRow[];
	seasonTotalsPreseason: SeasonTotalsPreseasonRow[];
	seasonTotalsRegularSeason: SeasonTotalsRegularSeasonRow[];
}
