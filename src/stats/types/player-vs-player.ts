
export interface PlayerVsPlayerParams {
  vsPlayerID: number;
  playerID: number;
  lastNGames?: number;
  measureType?: string;
  month?: number;
  opponentTeamID?: number;
  paceAdjust?: string;
  perMode?: string;
  period?: number;
  plusMinus?: string;
  rank?: string;
  season?: string;
  seasonType?: string;
  dateFrom?: string;
  dateTo?: string;
  gameSegment?: string;
  leagueID?: string;
  location?: string;
  outcome?: string;
  seasonSegment?: string;
  vsConference?: string;
  vsDivision?: string;
}

export interface OnOffCourtRow {
  groupSet: unknown;
  playerId: number;
  playerName: string;
  vsPlayerId: number;
  vsPlayerName: string;
  courtStatus: string;
  gp: number;
  w: number;
  l: number;
  wPct: number | null;
  min: number;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  ftm: number;
  fta: number;
  ftPct: number | null;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  tov: number;
  stl: number;
  blk: number;
  blka: number;
  pf: number;
  pfd: number;
  pts: number;
  plusMinus: number;
  nbaFantasyPts: number;
  cfid: number;
  cfparams: unknown;
}

export interface OverallRow {
  groupSet: unknown;
  groupValue: unknown;
  playerId: number;
  playerName: string;
  gp: number;
  w: number;
  l: number;
  wPct: number | null;
  min: number;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  ftm: number;
  fta: number;
  ftPct: number | null;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  tov: number;
  stl: number;
  blk: number;
  blka: number;
  pf: number;
  pfd: number;
  pts: number;
  plusMinus: number;
  nbaFantasyPts: number;
  cfid: number;
  cfparams: unknown;
}

export interface PlayerInfoRow {
  personId: number;
  firstName: string;
  lastName: string;
  displayFirstLast: unknown;
  displayLastCommaFirst: unknown;
  displayFiLast: unknown;
  birthdate: string;
  school: unknown;
  country: unknown;
  lastAffiliation: unknown;
}

export interface ShotAreaOffCourtRow {
  groupSet: unknown;
  playerId: number;
  playerName: string;
  vsPlayerId: number;
  vsPlayerName: string;
  courtStatus: string;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  cfid: number;
  cfparams: unknown;
}

export interface ShotAreaOnCourtRow {
  groupSet: unknown;
  playerId: number;
  playerName: string;
  vsPlayerId: number;
  vsPlayerName: string;
  courtStatus: string;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  cfid: number;
  cfparams: unknown;
}

export interface ShotAreaOverallRow {
  groupSet: unknown;
  groupValue: unknown;
  playerId: number;
  playerName: string;
  fgm: number;
  fga: number;
  fgPct: number | null;
  cfid: number;
  cfparams: unknown;
}

export interface ShotDistanceOffCourtRow {
  groupSet: unknown;
  playerId: number;
  playerName: string;
  vsPlayerId: number;
  vsPlayerName: string;
  courtStatus: string;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  cfid: number;
  cfparams: unknown;
}

export interface ShotDistanceOnCourtRow {
  groupSet: unknown;
  playerId: number;
  playerName: string;
  vsPlayerId: number;
  vsPlayerName: string;
  courtStatus: string;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  cfid: number;
  cfparams: unknown;
}

export interface ShotDistanceOverallRow {
  groupSet: unknown;
  groupValue: unknown;
  playerId: number;
  playerName: string;
  fgm: number;
  fga: number;
  fgPct: number | null;
  cfid: number;
  cfparams: unknown;
}

export interface VsPlayerInfoRow {
  personId: number;
  firstName: string;
  lastName: string;
  displayFirstLast: unknown;
  displayLastCommaFirst: unknown;
  displayFiLast: unknown;
  birthdate: string;
  school: unknown;
  country: unknown;
  lastAffiliation: unknown;
}

export interface PlayerVsPlayerResponse {
  onOffCourt: OnOffCourtRow[];
  overall: OverallRow[];
  playerInfo: PlayerInfoRow[];
  shotAreaOffCourt: ShotAreaOffCourtRow[];
  shotAreaOnCourt: ShotAreaOnCourtRow[];
  shotAreaOverall: ShotAreaOverallRow[];
  shotDistanceOffCourt: ShotDistanceOffCourtRow[];
  shotDistanceOnCourt: ShotDistanceOnCourtRow[];
  shotDistanceOverall: ShotDistanceOverallRow[];
  vsPlayerInfo: VsPlayerInfoRow[];
}
