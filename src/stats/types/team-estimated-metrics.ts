export interface TeamEstimatedMetricsParams {
	leagueID?: string;
	season?: string;
	seasonType?: string;
}

export interface TeamEstimatedMetricsRow {
	teamName: string;
	teamId: number;
	gp: number;
	w: number;
	l: number;
	wPct: number | null;
	min: number;
	eOffRating: unknown;
	eDefRating: unknown;
	eNetRating: unknown;
	ePace: unknown;
	eAstRatio: unknown;
	eOrebPct: number | null;
	eDrebPct: number | null;
	eRebPct: number | null;
	eTmTovPct: number | null;
	gpRank: number;
	wRank: number;
	lRank: number;
	wPctRank: number;
	minRank: number;
	eOffRatingRank: number;
	eDefRatingRank: number;
	eNetRatingRank: number;
	eAstRatioRank: number;
	eOrebPctRank: number;
	eDrebPctRank: number;
	eRebPctRank: number;
	eTmTovPctRank: number;
	ePaceRank: number;
}

export interface TeamEstimatedMetricsResponse {
	teamEstimatedMetrics: TeamEstimatedMetricsRow[];
}
