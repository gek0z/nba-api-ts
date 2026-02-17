export interface TeamVsPlayerParams {
	vsPlayerID: number;
	teamID: number;
	lastNGames?: number;
	measureType?: string;
	month?: number;
	opponentTeamID?: number;
	paceAdjust?: string;
	perMode?: string;
	period?: number;
	plusMinus?: string;
	rank?: string;
	season?: string;
	seasonType?: string;
	dateFrom?: string;
	dateTo?: string;
	gameSegment?: string;
	leagueID?: string;
	location?: string;
	outcome?: string;
	playerID?: number;
	seasonSegment?: string;
	vsConference?: string;
	vsDivision?: string;
}

export interface OnOffCourtRow {
	groupSet: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	vsPlayerId: number;
	vsPlayerName: string;
	courtStatus: string;
	gp: number;
	w: number;
	l: number;
	wPct: number | null;
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
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
	gpRank: number;
	wRank: number;
	lRank: number;
	wPctRank: number;
	minRank: number;
	fgmRank: number;
	fgaRank: number;
	fgPctRank: number;
	fg3mRank: number;
	fg3aRank: number;
	fg3PctRank: number;
	ftmRank: number;
	ftaRank: number;
	ftPctRank: number;
	orebRank: number;
	drebRank: number;
	rebRank: number;
	astRank: number;
	tovRank: number;
	stlRank: number;
	blkRank: number;
	blkaRank: number;
	pfRank: number;
	pfdRank: number;
	ptsRank: number;
	plusMinusRank: number;
	cfid: number;
	cfparams: unknown;
}

export interface OverallRow {
	groupSet: unknown;
	groupValue: unknown;
	teamId: number;
	teamAbbreviation: string;
	gp: number;
	w: number;
	l: number;
	wPct: number | null;
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
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
	gpRank: number;
	wRank: number;
	lRank: number;
	wPctRank: number;
	minRank: number;
	fgmRank: number;
	fgaRank: number;
	fgPctRank: number;
	fg3mRank: number;
	fg3aRank: number;
	fg3PctRank: number;
	ftmRank: number;
	ftaRank: number;
	ftPctRank: number;
	orebRank: number;
	drebRank: number;
	rebRank: number;
	astRank: number;
	tovRank: number;
	stlRank: number;
	blkRank: number;
	blkaRank: number;
	pfRank: number;
	pfdRank: number;
	ptsRank: number;
	plusMinusRank: number;
	cfid: number;
	cfparams: unknown;
}

export interface ShotAreaOffCourtRow {
	groupSet: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	vsPlayerId: number;
	vsPlayerName: string;
	courtStatus: string;
	groupValue: unknown;
	fgm: number;
	fga: number;
	fgPct: number | null;
	cfid: number;
	cfparams: unknown;
}

export interface ShotAreaOnCourtRow {
	groupSet: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	vsPlayerId: number;
	vsPlayerName: string;
	courtStatus: string;
	groupValue: unknown;
	fgm: number;
	fga: number;
	fgPct: number | null;
	cfid: number;
	cfparams: unknown;
}

export interface ShotAreaOverallRow {
	groupSet: unknown;
	groupValue: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	fgm: number;
	fga: number;
	fgPct: number | null;
	cfid: number;
	cfparams: unknown;
}

export interface ShotDistanceOffCourtRow {
	groupSet: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	vsPlayerId: number;
	vsPlayerName: string;
	courtStatus: string;
	groupValue: unknown;
	fgm: number;
	fga: number;
	fgPct: number | null;
	cfid: number;
	cfparams: unknown;
}

export interface ShotDistanceOnCourtRow {
	groupSet: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	vsPlayerId: number;
	vsPlayerName: string;
	courtStatus: string;
	groupValue: unknown;
	fgm: number;
	fga: number;
	fgPct: number | null;
	cfid: number;
	cfparams: unknown;
}

export interface ShotDistanceOverallRow {
	groupSet: unknown;
	groupValue: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	fgm: number;
	fga: number;
	fgPct: number | null;
	cfid: number;
	cfparams: unknown;
}

export interface vsPlayerOverallRow {
	groupSet: unknown;
	groupValue: unknown;
	playerId: number;
	gp: number;
	w: number;
	l: number;
	wPct: number | null;
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
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
	nbaFantasyPts: number;
	dd2: number;
	td3: number;
	gpRank: number;
	wRank: number;
	lRank: number;
	wPctRank: number;
	minRank: number;
	fgmRank: number;
	fgaRank: number;
	fgPctRank: number;
	fg3mRank: number;
	fg3aRank: number;
	fg3PctRank: number;
	ftmRank: number;
	ftaRank: number;
	ftPctRank: number;
	orebRank: number;
	drebRank: number;
	rebRank: number;
	astRank: number;
	tovRank: number;
	stlRank: number;
	blkRank: number;
	blkaRank: number;
	pfRank: number;
	pfdRank: number;
	ptsRank: number;
	plusMinusRank: number;
	nbaFantasyPtsRank: number;
	dd2Rank: number;
	td3Rank: number;
	cfid: number;
	cfparams: unknown;
}

export interface TeamVsPlayerResponse {
	onOffCourt: OnOffCourtRow[];
	overall: OverallRow[];
	shotAreaOffCourt: ShotAreaOffCourtRow[];
	shotAreaOnCourt: ShotAreaOnCourtRow[];
	shotAreaOverall: ShotAreaOverallRow[];
	shotDistanceOffCourt: ShotDistanceOffCourtRow[];
	shotDistanceOnCourt: ShotDistanceOnCourtRow[];
	shotDistanceOverall: ShotDistanceOverallRow[];
	vsPlayerOverall: vsPlayerOverallRow[];
}
