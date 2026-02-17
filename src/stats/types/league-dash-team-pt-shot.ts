export interface LeagueDashTeamPtShotParams {
	leagueID?: string;
	perMode?: string;
	season?: string;
	seasonType?: string;
	closeDefDistRange?: number;
	conference?: string;
	dateFrom?: string;
	dateTo?: string;
	division?: string;
	dribbleRange?: number;
	gameSegment?: string;
	generalRange?: number;
	lastNGames?: number;
	location?: string;
	month?: number;
	opponentTeamID?: number;
	outcome?: string;
	pORound?: number;
	period?: number;
	seasonSegment?: string;
	shotClockRange?: number;
	shotDistRange?: number;
	teamID?: number;
	touchTimeRange?: number;
	vsConference?: string;
	vsDivision?: string;
}

export interface LeagueDashPTShotsRow {
	teamId: number;
	teamName: string;
	teamAbbreviation: string;
	gp: number;
	g: unknown;
	fgaFrequency: unknown;
	fgm: number;
	fga: number;
	fgPct: number | null;
	efgPct: number | null;
	fg2aFrequency: unknown;
	fg2m: unknown;
	fg2a: unknown;
	fg2Pct: number | null;
	fg3aFrequency: unknown;
	fg3m: number;
	fg3a: number;
	fg3Pct: number | null;
}

export interface LeagueDashTeamPtShotResponse {
	leagueDashPTShots: LeagueDashPTShotsRow[];
}
