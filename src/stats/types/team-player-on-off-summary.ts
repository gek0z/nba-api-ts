export interface TeamPlayerOnOffSummaryParams {
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
	seasonSegment?: string;
	vsConference?: string;
	vsDivision?: string;
}

export interface OverallTeamPlayerOnOffSummaryRow {
	groupSet: unknown;
	groupValue: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
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
}

export interface PlayersOffCourtTeamPlayerOnOffSummaryRow {
	groupSet: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	vsPlayerId: number;
	vsPlayerName: string;
	courtStatus: string;
	gp: number;
	min: number;
	plusMinus: number;
	offRating: unknown;
	defRating: unknown;
	netRating: unknown;
}

export interface PlayersOnCourtTeamPlayerOnOffSummaryRow {
	groupSet: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	vsPlayerId: number;
	vsPlayerName: string;
	courtStatus: string;
	gp: number;
	min: number;
	plusMinus: number;
	offRating: unknown;
	defRating: unknown;
	netRating: unknown;
}

export interface TeamPlayerOnOffSummaryResponse {
	overallTeamPlayerOnOffSummary: OverallTeamPlayerOnOffSummaryRow[];
	playersOffCourtTeamPlayerOnOffSummary: PlayersOffCourtTeamPlayerOnOffSummaryRow[];
	playersOnCourtTeamPlayerOnOffSummary: PlayersOnCourtTeamPlayerOnOffSummaryRow[];
}
