
export interface FantasyWidgetParams {
  activePlayers?: string;
  lastNGames?: number;
  leagueID?: string;
  season?: string;
  seasonType?: string;
  todaysOpponent?: number;
  todaysPlayers?: string;
  dateFrom?: string;
  dateTo?: string;
  location?: string;
  month?: number;
  opponentTeamID?: number;
  pORound?: number;
  playerID?: number;
  position?: string;
  seasonSegment?: string;
  teamID?: number;
  vsConference?: string;
  vsDivision?: string;
}

export interface FantasyWidgetResultRow {
  playerId: number;
  playerName: string;
  playerPosition: string;
  teamId: number;
  teamAbbreviation: string;
  gp: number;
  min: number;
  fanDuelPts: unknown;
  nbaFantasyPts: number;
  pts: number;
  reb: number;
  ast: number;
  blk: number;
  stl: number;
  tov: number;
  fg3m: number;
  fga: number;
  fgPct: number | null;
  fta: number;
  ftPct: number | null;
}

export interface FantasyWidgetResponse {
  fantasyWidgetResult: FantasyWidgetResultRow[];
}
