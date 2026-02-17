
export interface TeamDashPtShotsParams {
  teamID: number;
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
  teamId: number;
  teamName: string;
  sortOrder: unknown;
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
  teamId: number;
  teamName: string;
  sortOrder: unknown;
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
  teamId: number;
  teamName: string;
  sortOrder: unknown;
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
  teamId: number;
  teamName: string;
  sortOrder: unknown;
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
  teamId: number;
  teamName: string;
  sortOrder: unknown;
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
  teamId: number;
  teamName: string;
  sortOrder: unknown;
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

export interface TeamDashPtShotsResponse {
  closestDefender10ftPlusShooting: ClosestDefender10ftPlusShootingRow[];
  closestDefenderShooting: ClosestDefenderShootingRow[];
  dribbleShooting: DribbleShootingRow[];
  generalShooting: GeneralShootingRow[];
  shotClockShooting: ShotClockShootingRow[];
  touchTimeShooting: TouchTimeShootingRow[];
}
