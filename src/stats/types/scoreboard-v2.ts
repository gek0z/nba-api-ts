
export interface ScoreboardV2Params {
  dayOffset?: string;
  gameDate?: string;
  leagueID?: string;
}

export interface AvailableRow {
  gameId: string;
  ptAvailable: unknown;
}

export interface EastConfStandingsByDayRow {
  teamId: number;
  leagueId: string;
  seasonId: string;
  standingsdate: string;
  conference: unknown;
  team: unknown;
  g: unknown;
  w: number;
  l: number;
  wPct: number | null;
  homeRecord: unknown;
  roadRecord: unknown;
  returntoplay: unknown;
}

export interface GameHeaderRow {
  gameDateEst: string;
  gameSequence: unknown;
  gameId: string;
  gameStatusId: number;
  gameStatusText: string;
  gamecode: string;
  homeTeamId: number;
  visitorTeamId: number;
  season: string;
  livePeriod: unknown;
  livePcTime: unknown;
  natlTvBroadcasterAbbreviation: string;
  homeTvBroadcasterAbbreviation: string;
  awayTvBroadcasterAbbreviation: string;
  livePeriodTimeBcast: unknown;
  arenaName: string;
  whStatus: string;
}

export interface LastMeetingRow {
  gameId: string;
  lastGameId: number;
  lastGameDateEst: string;
  lastGameHomeTeamId: number;
  lastGameHomeTeamCity: string;
  lastGameHomeTeamName: string;
  lastGameHomeTeamAbbreviation: string;
  lastGameHomeTeamPoints: unknown;
  lastGameVisitorTeamId: number;
  lastGameVisitorTeamCity: string;
  lastGameVisitorTeamName: string;
  lastGameVisitorTeamCity1: string;
  lastGameVisitorTeamPoints: unknown;
}

export interface LineScoreRow {
  gameDateEst: string;
  gameSequence: unknown;
  gameId: string;
  teamId: number;
  teamAbbreviation: string;
  teamCityName: string;
  teamName: string;
  teamWinsLosses: unknown;
  ptsQtr1: unknown;
  ptsQtr2: unknown;
  ptsQtr3: unknown;
  ptsQtr4: unknown;
  ptsOt1: unknown;
  ptsOt2: unknown;
  ptsOt3: unknown;
  ptsOt4: unknown;
  ptsOt5: unknown;
  ptsOt6: unknown;
  ptsOt7: unknown;
  ptsOt8: unknown;
  ptsOt9: unknown;
  ptsOt10: unknown;
  pts: number;
  fgPct: number | null;
  ftPct: number | null;
  fg3Pct: number | null;
  ast: number;
  reb: number;
  tov: number;
}

export interface SeriesStandingsRow {
  gameId: string;
  homeTeamId: number;
  visitorTeamId: number;
  gameDateEst: string;
  homeTeamWins: unknown;
  homeTeamLosses: unknown;
  seriesLeader: unknown;
}

export interface TeamLeadersRow {
  gameId: string;
  teamId: number;
  teamCity: string;
  teamNickname: string;
  teamAbbreviation: string;
  ptsPlayerId: number;
  ptsPlayerName: string;
  pts: number;
  rebPlayerId: number;
  rebPlayerName: string;
  reb: number;
  astPlayerId: number;
  astPlayerName: string;
  ast: number;
}

export interface TicketLinksRow {
  gameId: string;
  leagTix: unknown;
}

export interface WestConfStandingsByDayRow {
  teamId: number;
  leagueId: string;
  seasonId: string;
  standingsdate: string;
  conference: unknown;
  team: unknown;
  g: unknown;
  w: number;
  l: number;
  wPct: number | null;
  homeRecord: unknown;
  roadRecord: unknown;
}

export interface ScoreboardV2Response {
  available: AvailableRow[];
  eastConfStandingsByDay: EastConfStandingsByDayRow[];
  gameHeader: GameHeaderRow[];
  lastMeeting: LastMeetingRow[];
  lineScore: LineScoreRow[];
  seriesStandings: SeriesStandingsRow[];
  teamLeaders: TeamLeadersRow[];
  ticketLinks: TicketLinksRow[];
  westConfStandingsByDay: WestConfStandingsByDayRow[];
}
