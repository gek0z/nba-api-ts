
export interface VideoStatusParams {
  gameDate?: string;
  leagueID?: string;
}

export interface VideoStatusRow {
  gameId: string;
  gameDate: string;
  visitorTeamId: number;
  visitorTeamCity: string;
  visitorTeamName: string;
  visitorTeamAbbreviation: string;
  homeTeamId: number;
  homeTeamCity: string;
  homeTeamName: string;
  homeTeamAbbreviation: string;
  gameStatus: string;
  gameStatusText: string;
  isAvailable: unknown;
  ptXyzAvailable: unknown;
}

export interface VideoStatusResponse {
  videoStatus: VideoStatusRow[];
}
