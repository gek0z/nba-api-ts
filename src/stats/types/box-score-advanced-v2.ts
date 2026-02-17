export interface BoxScoreAdvancedV2Params {
	gameID: number;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

export interface PlayerStatsRow {
	gameId: string;
	teamId: number;
	teamAbbreviation: string;
	teamCity: string;
	playerId: number;
	playerName: string;
	startPosition: string;
	comment: string;
	min: number;
	eOffRating: unknown;
	offRating: unknown;
	eDefRating: unknown;
	defRating: unknown;
	eNetRating: unknown;
	netRating: unknown;
	astPct: number | null;
	astTov: unknown;
	astRatio: unknown;
	orebPct: number | null;
	drebPct: number | null;
	rebPct: number | null;
	tmTovPct: number | null;
	efgPct: number | null;
	tsPct: number | null;
	usgPct: number | null;
	eUsgPct: number | null;
	ePace: unknown;
	pace: unknown;
	pacePer40: unknown;
	poss: unknown;
	pie: unknown;
}

export interface TeamStatsRow {
	gameId: string;
	teamId: number;
	teamName: string;
	teamAbbreviation: string;
	teamCity: string;
	min: number;
	eOffRating: unknown;
	offRating: unknown;
	eDefRating: unknown;
	defRating: unknown;
	eNetRating: unknown;
	netRating: unknown;
	astPct: number | null;
	astTov: unknown;
	astRatio: unknown;
	orebPct: number | null;
	drebPct: number | null;
	rebPct: number | null;
	eTmTovPct: number | null;
	tmTovPct: number | null;
	efgPct: number | null;
	tsPct: number | null;
	usgPct: number | null;
	eUsgPct: number | null;
	ePace: unknown;
	pace: unknown;
	pacePer40: unknown;
	poss: unknown;
	pie: unknown;
}

export interface BoxScoreAdvancedV2Response {
	playerStats: PlayerStatsRow[];
	teamStats: TeamStatsRow[];
}
