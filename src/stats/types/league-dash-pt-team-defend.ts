export interface LeagueDashPtTeamDefendParams {
	defenseCategory?: string;
	leagueID?: string;
	perMode?: string;
	season?: string;
	seasonType?: string;
	conference?: string;
	dateFrom?: string;
	dateTo?: string;
	division?: string;
	gameSegment?: string;
	lastNGames?: number;
	location?: string;
	month?: number;
	opponentTeamID?: number;
	outcome?: string;
	pORound?: number;
	period?: number;
	seasonSegment?: string;
	teamID?: number;
	vsConference?: string;
	vsDivision?: string;
}

export interface LeagueDashPtTeamDefendRow {
	teamId: number;
	teamName: string;
	teamAbbreviation: string;
	gp: number;
	g: unknown;
	freq: unknown;
	dFgm: unknown;
	dFga: unknown;
	dFgPct: number | null;
	normalFgPct: number | null;
	pctPlusminus: unknown;
}

export interface LeagueDashPtTeamDefendResponse {
	leagueDashPtTeamDefend: LeagueDashPtTeamDefendRow[];
}
