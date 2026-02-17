
export interface PlayerDashPtShotsParams {
  teamID: number;
  playerID: number;
  lastNGames?: number;
  leagueID?: string;
  month?: number;
  opponentTeamID?: number;
  perMode?: string;
  period?: number;
  season?: string;
  seasonType?: string;
  dateFrom?: string;
  dateTo?: string;
  gameSegment?: string;
  location?: string;
  outcome?: string;
  seasonSegment?: string;
  vsConference?: string;
  vsDivision?: string;
}

export interface ClosestDefender10ftPlusShootingRow {
  playerId: number;
  playerNameLastFirst: string;
  sortOrder: unknown;
  gp: number;
  g: unknown;
  closeDefDistRange: unknown;
  fgaFrequency: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  efgPct: number | null;
  fg2aFrequency: unknown;
  fg2m: unknown;
  fg2a: unknown;
  fg2Pct: number | null;
  fg3aFrequency: unknown;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
}

export interface ClosestDefenderShootingRow {
  playerId: number;
  playerNameLastFirst: string;
  sortOrder: unknown;
  gp: number;
  g: unknown;
  closeDefDistRange: unknown;
  fgaFrequency: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  efgPct: number | null;
  fg2aFrequency: unknown;
  fg2m: unknown;
  fg2a: unknown;
  fg2Pct: number | null;
  fg3aFrequency: unknown;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
}

export interface DribbleShootingRow {
  playerId: number;
  playerNameLastFirst: string;
  sortOrder: unknown;
  gp: number;
  g: unknown;
  dribbleRange: unknown;
  fgaFrequency: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  efgPct: number | null;
  fg2aFrequency: unknown;
  fg2m: unknown;
  fg2a: unknown;
  fg2Pct: number | null;
  fg3aFrequency: unknown;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
}

export interface GeneralShootingRow {
  playerId: number;
  playerNameLastFirst: string;
  sortOrder: unknown;
  gp: number;
  g: unknown;
  shotType: string;
  fgaFrequency: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  efgPct: number | null;
  fg2aFrequency: unknown;
  fg2m: unknown;
  fg2a: unknown;
  fg2Pct: number | null;
  fg3aFrequency: unknown;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
}

export interface OverallRow {
  playerId: number;
  playerNameLastFirst: string;
  sortOrder: unknown;
  gp: number;
  g: unknown;
  shotType: string;
  fgaFrequency: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  efgPct: number | null;
  fg2aFrequency: unknown;
  fg2m: unknown;
  fg2a: unknown;
  fg2Pct: number | null;
  fg3aFrequency: unknown;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
}

export interface ShotClockShootingRow {
  playerId: number;
  playerNameLastFirst: string;
  sortOrder: unknown;
  gp: number;
  g: unknown;
  shotClockRange: unknown;
  fgaFrequency: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  efgPct: number | null;
  fg2aFrequency: unknown;
  fg2m: unknown;
  fg2a: unknown;
  fg2Pct: number | null;
  fg3aFrequency: unknown;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
}

export interface TouchTimeShootingRow {
  playerId: number;
  playerNameLastFirst: string;
  sortOrder: unknown;
  gp: number;
  g: unknown;
  touchTimeRange: unknown;
  fgaFrequency: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  efgPct: number | null;
  fg2aFrequency: unknown;
  fg2m: unknown;
  fg2a: unknown;
  fg2Pct: number | null;
  fg3aFrequency: unknown;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
}

export interface PlayerDashPtShotsResponse {
  closestDefender10ftPlusShooting: ClosestDefender10ftPlusShootingRow[];
  closestDefenderShooting: ClosestDefenderShootingRow[];
  dribbleShooting: DribbleShootingRow[];
  generalShooting: GeneralShootingRow[];
  overall: OverallRow[];
  shotClockShooting: ShotClockShootingRow[];
  touchTimeShooting: TouchTimeShootingRow[];
}
