
export interface TeamInfoCommonParams {
  teamID: number;
  leagueID?: string;
  season?: string;
  seasonType?: string;
}

export interface AvailableSeasonsRow {
  seasonId: string;
}

export interface TeamInfoCommonRow {
  teamId: number;
  seasonYear: string;
  teamCity: string;
  teamName: string;
  teamAbbreviation: string;
  teamConference: unknown;
  teamDivision: unknown;
  teamCode: string;
  w: number;
  l: number;
  pct: unknown;
  confRank: number;
  divRank: number;
  minYear: unknown;
  maxYear: unknown;
}

export interface TeamSeasonRanksRow {
  leagueId: string;
  seasonId: string;
  teamId: number;
  ptsRank: number;
  ptsPg: unknown;
  rebRank: number;
  rebPg: unknown;
  astRank: number;
  astPg: unknown;
  oppPtsRank: number;
  oppPtsPg: unknown;
}

export interface TeamInfoCommonResponse {
  availableSeasons: AvailableSeasonsRow[];
  teamInfoCommon: TeamInfoCommonRow[];
  teamSeasonRanks: TeamSeasonRanksRow[];
}
