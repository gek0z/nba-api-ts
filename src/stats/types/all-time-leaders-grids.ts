export interface AllTimeLeadersGridsParams {
	leagueID?: string;
	perMode?: string;
	seasonType?: string;
	topX?: string;
}

export interface ASTLeadersRow {
	playerId: number;
	playerName: string;
	ast: number;
	astRank: number;
}

export interface BLKLeadersRow {
	playerId: number;
	playerName: string;
	blk: number;
	blkRank: number;
}

export interface DREBLeadersRow {
	playerId: number;
	playerName: string;
	dreb: number;
	drebRank: number;
}

export interface FG3ALeadersRow {
	playerId: number;
	playerName: string;
	fg3a: number;
	fg3aRank: number;
}

export interface FG3MLeadersRow {
	playerId: number;
	playerName: string;
	fg3m: number;
	fg3mRank: number;
}

export interface FG3_PCTLeadersRow {
	playerId: number;
	playerName: string;
	fg3Pct: number | null;
	fg3PctRank: number;
}

export interface FGALeadersRow {
	playerId: number;
	playerName: string;
	fga: number;
	fgaRank: number;
}

export interface FGMLeadersRow {
	playerId: number;
	playerName: string;
	fgm: number;
	fgmRank: number;
}

export interface FG_PCTLeadersRow {
	playerId: number;
	playerName: string;
	fgPct: number | null;
	fgPctRank: number;
}

export interface FTALeadersRow {
	playerId: number;
	playerName: string;
	fta: number;
	ftaRank: number;
}

export interface FTMLeadersRow {
	playerId: number;
	playerName: string;
	ftm: number;
	ftmRank: number;
}

export interface FT_PCTLeadersRow {
	playerId: number;
	playerName: string;
	ftPct: number | null;
	ftPctRank: number;
}

export interface GPLeadersRow {
	playerId: number;
	playerName: string;
	gp: number;
	gpRank: number;
}

export interface OREBLeadersRow {
	playerId: number;
	playerName: string;
	oreb: number;
	orebRank: number;
}

export interface PFLeadersRow {
	playerId: number;
	playerName: string;
	pf: number;
	pfRank: number;
}

export interface PTSLeadersRow {
	playerId: number;
	playerName: string;
	pts: number;
	ptsRank: number;
}

export interface REBLeadersRow {
	playerId: number;
	playerName: string;
	reb: number;
	rebRank: number;
}

export interface STLLeadersRow {
	playerId: number;
	playerName: string;
	stl: number;
	stlRank: number;
}

export interface TOVLeadersRow {
	playerId: number;
	playerName: string;
	tov: number;
	tovRank: number;
}

export interface AllTimeLeadersGridsResponse {
	aSTLeaders: ASTLeadersRow[];
	bLKLeaders: BLKLeadersRow[];
	dREBLeaders: DREBLeadersRow[];
	fG3ALeaders: FG3ALeadersRow[];
	fG3MLeaders: FG3MLeadersRow[];
	fG3_PCTLeaders: FG3_PCTLeadersRow[];
	fGALeaders: FGALeadersRow[];
	fGMLeaders: FGMLeadersRow[];
	fG_PCTLeaders: FG_PCTLeadersRow[];
	fTALeaders: FTALeadersRow[];
	fTMLeaders: FTMLeadersRow[];
	fT_PCTLeaders: FT_PCTLeadersRow[];
	gPLeaders: GPLeadersRow[];
	oREBLeaders: OREBLeadersRow[];
	pFLeaders: PFLeadersRow[];
	pTSLeaders: PTSLeadersRow[];
	rEBLeaders: REBLeadersRow[];
	sTLLeaders: STLLeadersRow[];
	tOVLeaders: TOVLeadersRow[];
}
