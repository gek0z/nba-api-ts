export interface PlayerDashPtShotDefendParams {
	teamID: number;
	playerID: number;
	lastNGames?: number;
	leagueID?: string;
	month?: number;
	opponentTeamID?: number;
	perMode?: string;
	period?: number;
	season?: string;
	seasonType?: string;
	dateFrom?: string;
	dateTo?: string;
	gameSegment?: string;
	location?: string;
	outcome?: string;
	seasonSegment?: string;
	vsConference?: string;
	vsDivision?: string;
}

export interface DefendingShotsRow {
	closeDefPersonId: number;
	gp: number;
	g: unknown;
	defenseCategory: unknown;
	freq: unknown;
	dFgm: unknown;
	dFga: unknown;
	dFgPct: number | null;
	normalFgPct: number | null;
	pctPlusminus: unknown;
}

export interface PlayerDashPtShotDefendResponse {
	defendingShots: DefendingShotsRow[];
}
