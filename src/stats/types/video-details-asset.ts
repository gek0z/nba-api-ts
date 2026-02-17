
export interface VideoDetailsAssetParams {
  teamID: number;
  playerID: number;
  contextMeasure?: string;
  lastNGames?: number;
  month?: number;
  opponentTeamID?: number;
  period?: number;
  season?: string;
  seasonType?: string;
  aheadBehind?: string;
  clutchTime?: string;
  contextFilter?: string;
  dateFrom?: string;
  dateTo?: string;
  endPeriod?: number;
  endRange?: number;
  gameID?: number;
  gameSegment?: string;
  leagueID?: string;
  location?: string;
  outcome?: string;
  pointDiff?: number;
  position?: string;
  rangeType?: number;
  rookieYear?: number;
  seasonSegment?: string;
  startPeriod?: number;
  startRange?: number;
  vsConference?: string;
  vsDivision?: string;
}

export interface VideoDetailsAssetResponse {
}
