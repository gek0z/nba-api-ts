
export interface PlayerEstimatedMetricsParams {
  leagueID?: string;
  season?: string;
  seasonType?: string;
}

export interface PlayerEstimatedMetricsRow {
  playerId: number;
  playerName: string;
  gp: number;
  w: number;
  l: number;
  wPct: number | null;
  min: number;
  eOffRating: unknown;
  eDefRating: unknown;
  eNetRating: unknown;
  eAstRatio: unknown;
  eOrebPct: number | null;
  eDrebPct: number | null;
  eRebPct: number | null;
  eTovPct: number | null;
  eUsgPct: number | null;
  ePace: unknown;
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
  eTovPctRank: number;
  eUsgPctRank: number;
  ePaceRank: number;
}

export interface PlayerEstimatedMetricsResponse {
  playerEstimatedMetrics: PlayerEstimatedMetricsRow[];
}
