
export interface PlayerNextNGamesParams {
  playerID: number;
  numberOfGames?: number;
  season?: string;
  seasonType?: string;
  leagueID?: string;
}

export interface NextNGamesRow {
  gameId: string;
  gameDate: string;
  homeTeamId: number;
  visitorTeamId: number;
  homeTeamName: string;
  visitorTeamName: string;
  homeTeamAbbreviation: string;
  visitorTeamAbbreviation: string;
  homeTeamNickname: string;
  visitorTeamNickname: string;
  gameTime: unknown;
  homeWl: unknown;
  visitorWl: unknown;
}

export interface PlayerNextNGamesResponse {
  nextNGames: NextNGamesRow[];
}
