export interface BoxScoreUsageV2Params {
	gameID: number;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

export interface sqlPlayersUsageRow {
	gameId: string;
	teamId: number;
	teamAbbreviation: string;
	teamCity: string;
	playerId: number;
	playerName: string;
	startPosition: string;
	comment: string;
	min: number;
	usgPct: number | null;
	pctFgm: unknown;
	pctFga: unknown;
	pctFg3m: unknown;
	pctFg3a: unknown;
	pctFtm: unknown;
	pctFta: unknown;
	pctOreb: unknown;
	pctDreb: unknown;
	pctReb: unknown;
	pctAst: unknown;
	pctTov: unknown;
	pctStl: unknown;
	pctBlk: unknown;
	pctBlka: unknown;
	pctPf: unknown;
	pctPfd: unknown;
	pctPts: unknown;
}

export interface sqlTeamsUsageRow {
	gameId: string;
	teamId: number;
	teamName: string;
	teamAbbreviation: string;
	teamCity: string;
	min: number;
	usgPct: number | null;
	pctFgm: unknown;
	pctFga: unknown;
	pctFg3m: unknown;
	pctFg3a: unknown;
	pctFtm: unknown;
	pctFta: unknown;
	pctOreb: unknown;
	pctDreb: unknown;
	pctReb: unknown;
	pctAst: unknown;
	pctTov: unknown;
	pctStl: unknown;
	pctBlk: unknown;
	pctBlka: unknown;
	pctPf: unknown;
	pctPfd: unknown;
	pctPts: unknown;
}

export interface BoxScoreUsageV2Response {
	sqlPlayersUsage: sqlPlayersUsageRow[];
	sqlTeamsUsage: sqlTeamsUsageRow[];
}
