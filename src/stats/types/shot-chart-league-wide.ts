
export interface ShotChartLeagueWideParams {
  leagueID?: string;
  season?: string;
}

export interface League_WideRow {
  gridType: string;
  shotZoneBasic: unknown;
  shotZoneArea: unknown;
  shotZoneRange: unknown;
  fga: number;
  fgm: number;
  fgPct: number | null;
}

export interface ShotChartLeagueWideResponse {
  league_Wide: League_WideRow[];
}
