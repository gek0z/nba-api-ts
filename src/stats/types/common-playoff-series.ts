
export interface CommonPlayoffSeriesParams {
  leagueID?: string;
  season?: string;
  seriesID?: number;
}

export interface PlayoffSeriesRow {
  gameId: string;
  homeTeamId: number;
  visitorTeamId: number;
  seriesId: number;
  gameNum: unknown;
}

export interface CommonPlayoffSeriesResponse {
  playoffSeries: PlayoffSeriesRow[];
}
