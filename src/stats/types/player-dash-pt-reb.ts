export interface PlayerDashPtRebParams {
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

export interface NumContestedReboundingRow {
	playerId: number;
	playerNameLastFirst: string;
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
	playerId: number;
	playerNameLastFirst: string;
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
	playerId: number;
	playerNameLastFirst: string;
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
	playerId: number;
	playerNameLastFirst: string;
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
	playerId: number;
	playerNameLastFirst: string;
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

export interface PlayerDashPtRebResponse {
	numContestedRebounding: NumContestedReboundingRow[];
	overallRebounding: OverallReboundingRow[];
	rebDistanceRebounding: RebDistanceReboundingRow[];
	shotDistanceRebounding: ShotDistanceReboundingRow[];
	shotTypeRebounding: ShotTypeReboundingRow[];
}
