export interface TeamDashPtRebParams {
	teamID: number;
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

export interface NumContestedReboundingRow {
	teamId: number;
	teamName: string;
	sortOrder: unknown;
	g: unknown;
	rebNumContestingRange: unknown;
	rebFrequency: unknown;
	oreb: number;
	dreb: number;
	reb: number;
	cOreb: unknown;
	cDreb: unknown;
	cReb: unknown;
	cRebPct: number | null;
	ucOreb: unknown;
	ucDreb: unknown;
	ucReb: unknown;
	ucRebPct: number | null;
}

export interface OverallReboundingRow {
	teamId: number;
	teamName: string;
	g: unknown;
	overall: unknown;
	rebFrequency: unknown;
	oreb: number;
	dreb: number;
	reb: number;
	cOreb: unknown;
	cDreb: unknown;
	cReb: unknown;
	cRebPct: number | null;
	ucOreb: unknown;
	ucDreb: unknown;
	ucReb: unknown;
	ucRebPct: number | null;
}

export interface RebDistanceReboundingRow {
	teamId: number;
	teamName: string;
	sortOrder: unknown;
	g: unknown;
	rebDistRange: unknown;
	rebFrequency: unknown;
	oreb: number;
	dreb: number;
	reb: number;
	cOreb: unknown;
	cDreb: unknown;
	cReb: unknown;
	cRebPct: number | null;
	ucOreb: unknown;
	ucDreb: unknown;
	ucReb: unknown;
	ucRebPct: number | null;
}

export interface ShotDistanceReboundingRow {
	teamId: number;
	teamName: string;
	sortOrder: unknown;
	g: unknown;
	shotDistRange: unknown;
	rebFrequency: unknown;
	oreb: number;
	dreb: number;
	reb: number;
	cOreb: unknown;
	cDreb: unknown;
	cReb: unknown;
	cRebPct: number | null;
	ucOreb: unknown;
	ucDreb: unknown;
	ucReb: unknown;
	ucRebPct: number | null;
}

export interface ShotTypeReboundingRow {
	teamId: number;
	teamName: string;
	sortOrder: unknown;
	g: unknown;
	shotTypeRange: string;
	rebFrequency: unknown;
	oreb: number;
	dreb: number;
	reb: number;
	cOreb: unknown;
	cDreb: unknown;
	cReb: unknown;
	cRebPct: number | null;
	ucOreb: unknown;
	ucDreb: unknown;
	ucReb: unknown;
	ucRebPct: number | null;
}

export interface TeamDashPtRebResponse {
	numContestedRebounding: NumContestedReboundingRow[];
	overallRebounding: OverallReboundingRow[];
	rebDistanceRebounding: RebDistanceReboundingRow[];
	shotDistanceRebounding: ShotDistanceReboundingRow[];
	shotTypeRebounding: ShotTypeReboundingRow[];
}
