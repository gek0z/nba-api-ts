
export interface PlayerDashboardByShootingSplitsParams {
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
  pORound?: number;
  seasonSegment?: string;
  shotClockRange?: number;
  vsConference?: string;
  vsDivision?: string;
}

export interface AssistedByRow {
  groupSet: unknown;
  playerId: number;
  playerName: string;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  efgPct: number | null;
  blka: number;
  pctAst2pm: unknown;
  pctUast2pm: unknown;
  pctAst3pm: unknown;
  pctUast3pm: unknown;
  pctAstFgm: unknown;
  pctUastFgm: unknown;
  fgmRank: number;
  fgaRank: number;
  fgPctRank: number;
  fg3mRank: number;
  fg3aRank: number;
  fg3PctRank: number;
  efgPctRank: number;
  blkaRank: number;
  pctAst2pmRank: number;
  pctUast2pmRank: number;
  pctAst3pmRank: number;
  pctUast3pmRank: number;
  pctAstFgmRank: number;
  pctUastFgmRank: number;
  cfid: number;
  cfparams: unknown;
}

export interface AssitedShotPlayerDashboardRow {
  groupSet: unknown;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  efgPct: number | null;
  blka: number;
  pctAst2pm: unknown;
  pctUast2pm: unknown;
  pctAst3pm: unknown;
  pctUast3pm: unknown;
  pctAstFgm: unknown;
  pctUastFgm: unknown;
  fgmRank: number;
  fgaRank: number;
  fgPctRank: number;
  fg3mRank: number;
  fg3aRank: number;
  fg3PctRank: number;
  efgPctRank: number;
  blkaRank: number;
  pctAst2pmRank: number;
  pctUast2pmRank: number;
  pctAst3pmRank: number;
  pctUast3pmRank: number;
  pctAstFgmRank: number;
  pctUastFgmRank: number;
  cfid: number;
  cfparams: unknown;
}

export interface OverallPlayerDashboardRow {
  groupSet: unknown;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  efgPct: number | null;
  blka: number;
  pctAst2pm: unknown;
  pctUast2pm: unknown;
  pctAst3pm: unknown;
  pctUast3pm: unknown;
  pctAstFgm: unknown;
  pctUastFgm: unknown;
  fgmRank: number;
  fgaRank: number;
  fgPctRank: number;
  fg3mRank: number;
  fg3aRank: number;
  fg3PctRank: number;
  efgPctRank: number;
  blkaRank: number;
  pctAst2pmRank: number;
  pctUast2pmRank: number;
  pctAst3pmRank: number;
  pctUast3pmRank: number;
  pctAstFgmRank: number;
  pctUastFgmRank: number;
  cfid: number;
  cfparams: unknown;
}

export interface Shot5FTPlayerDashboardRow {
  groupSet: unknown;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  efgPct: number | null;
  blka: number;
  pctAst2pm: unknown;
  pctUast2pm: unknown;
  pctAst3pm: unknown;
  pctUast3pm: unknown;
  pctAstFgm: unknown;
  pctUastFgm: unknown;
  fgmRank: number;
  fgaRank: number;
  fgPctRank: number;
  fg3mRank: number;
  fg3aRank: number;
  fg3PctRank: number;
  efgPctRank: number;
  blkaRank: number;
  pctAst2pmRank: number;
  pctUast2pmRank: number;
  pctAst3pmRank: number;
  pctUast3pmRank: number;
  pctAstFgmRank: number;
  pctUastFgmRank: number;
  cfid: number;
  cfparams: unknown;
}

export interface Shot8FTPlayerDashboardRow {
  groupSet: unknown;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  efgPct: number | null;
  blka: number;
  pctAst2pm: unknown;
  pctUast2pm: unknown;
  pctAst3pm: unknown;
  pctUast3pm: unknown;
  pctAstFgm: unknown;
  pctUastFgm: unknown;
  fgmRank: number;
  fgaRank: number;
  fgPctRank: number;
  fg3mRank: number;
  fg3aRank: number;
  fg3PctRank: number;
  efgPctRank: number;
  blkaRank: number;
  pctAst2pmRank: number;
  pctUast2pmRank: number;
  pctAst3pmRank: number;
  pctUast3pmRank: number;
  pctAstFgmRank: number;
  pctUastFgmRank: number;
  cfid: number;
  cfparams: unknown;
}

export interface ShotAreaPlayerDashboardRow {
  groupSet: unknown;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  efgPct: number | null;
  blka: number;
  pctAst2pm: unknown;
  pctUast2pm: unknown;
  pctAst3pm: unknown;
  pctUast3pm: unknown;
  pctAstFgm: unknown;
  pctUastFgm: unknown;
  fgmRank: number;
  fgaRank: number;
  fgPctRank: number;
  fg3mRank: number;
  fg3aRank: number;
  fg3PctRank: number;
  efgPctRank: number;
  blkaRank: number;
  pctAst2pmRank: number;
  pctUast2pmRank: number;
  pctAst3pmRank: number;
  pctUast3pmRank: number;
  pctAstFgmRank: number;
  pctUastFgmRank: number;
  cfid: number;
  cfparams: unknown;
}

export interface ShotTypePlayerDashboardRow {
  groupSet: unknown;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  efgPct: number | null;
  blka: number;
  pctAst2pm: unknown;
  pctUast2pm: unknown;
  pctAst3pm: unknown;
  pctUast3pm: unknown;
  pctAstFgm: unknown;
  pctUastFgm: unknown;
  fgmRank: number;
  fgaRank: number;
  fgPctRank: number;
  fg3mRank: number;
  fg3aRank: number;
  fg3PctRank: number;
  efgPctRank: number;
  blkaRank: number;
  pctAst2pmRank: number;
  pctUast2pmRank: number;
  pctAst3pmRank: number;
  pctUast3pmRank: number;
  pctAstFgmRank: number;
  pctUastFgmRank: number;
  cfid: number;
  cfparams: unknown;
}

export interface ShotTypeSummaryPlayerDashboardRow {
  groupSet: unknown;
  groupValue: unknown;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  efgPct: number | null;
  blka: number;
  pctAst2pm: unknown;
  pctUast2pm: unknown;
  pctAst3pm: unknown;
  pctUast3pm: unknown;
  pctAstFgm: unknown;
  pctUastFgm: unknown;
  cfid: number;
  cfparams: unknown;
}

export interface PlayerDashboardByShootingSplitsResponse {
  assistedBy: AssistedByRow[];
  assitedShotPlayerDashboard: AssitedShotPlayerDashboardRow[];
  overallPlayerDashboard: OverallPlayerDashboardRow[];
  shot5FTPlayerDashboard: Shot5FTPlayerDashboardRow[];
  shot8FTPlayerDashboard: Shot8FTPlayerDashboardRow[];
  shotAreaPlayerDashboard: ShotAreaPlayerDashboardRow[];
  shotTypePlayerDashboard: ShotTypePlayerDashboardRow[];
  shotTypeSummaryPlayerDashboard: ShotTypeSummaryPlayerDashboardRow[];
}
