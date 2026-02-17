export interface LeagueDashPlayerBioStatsParams {
	leagueID?: string;
	perMode?: string;
	season?: string;
	seasonType?: string;
	college?: string;
	conference?: string;
	country?: string;
	dateFrom?: string;
	dateTo?: string;
	division?: string;
	draftPick?: string;
	draftYear?: number;
	gameScope?: string;
	gameSegment?: string;
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
	starterBench?: string;
	teamID?: number;
	vsConference?: string;
	vsDivision?: string;
	weight?: string;
}

export interface LeagueDashPlayerBioStatsRow {
	playerId: number;
	playerName: string;
	teamId: number;
	teamAbbreviation: string;
	age: number;
	playerHeight: unknown;
	playerHeightInches: unknown;
	playerWeight: unknown;
	college: unknown;
	country: unknown;
	draftYear: unknown;
	draftRound: unknown;
	draftNumber: unknown;
	gp: number;
	pts: number;
	reb: number;
	ast: number;
	netRating: unknown;
	orebPct: number | null;
	drebPct: number | null;
	usgPct: number | null;
	tsPct: number | null;
	astPct: number | null;
}

export interface LeagueDashPlayerBioStatsResponse {
	leagueDashPlayerBioStats: LeagueDashPlayerBioStatsRow[];
}
