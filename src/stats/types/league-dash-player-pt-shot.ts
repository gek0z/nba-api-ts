export interface LeagueDashPlayerPtShotParams {
	leagueID?: string;
	perMode?: string;
	season?: string;
	seasonType?: string;
	closeDefDistRange?: number;
	college?: string;
	conference?: string;
	country?: string;
	dateFrom?: string;
	dateTo?: string;
	division?: string;
	draftPick?: string;
	draftYear?: number;
	dribbleRange?: number;
	gameSegment?: string;
	generalRange?: number;
	height?: string;
	lastNGames?: number;
	location?: string;
	month?: number;
	opponentTeamID?: number;
	outcome?: string;
	pORound?: number;
	period?: number;
	playerExperience?: string;
	playerPosition?: string;
	seasonSegment?: string;
	shotClockRange?: number;
	shotDistRange?: number;
	starterBench?: string;
	teamID?: number;
	touchTimeRange?: number;
	vsConference?: string;
	vsDivision?: string;
	weight?: string;
}

export interface LeagueDashPTShotsRow {
	playerId: number;
	playerName: string;
	playerLastTeamId: number;
	playerLastTeamAbbreviation: string;
	age: number;
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

export interface LeagueDashPlayerPtShotResponse {
	leagueDashPTShots: LeagueDashPTShotsRow[];
}
