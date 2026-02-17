
export interface BoxScoreFourFactorsV2Params {
  gameID: number;
  endPeriod?: number;
  endRange?: number;
  rangeType?: number;
  startPeriod?: number;
  startRange?: number;
}

export interface sqlPlayersFourFactorsRow {
  gameId: string;
  teamId: number;
  teamAbbreviation: string;
  teamCity: string;
  playerId: number;
  playerName: string;
  startPosition: string;
  comment: string;
  min: number;
  efgPct: number | null;
  ftaRate: unknown;
  tmTovPct: number | null;
  orebPct: number | null;
  oppEfgPct: number | null;
  oppFtaRate: unknown;
  oppTovPct: number | null;
  oppOrebPct: number | null;
}

export interface sqlTeamsFourFactorsRow {
  gameId: string;
  teamId: number;
  teamName: string;
  teamAbbreviation: string;
  teamCity: string;
  min: number;
  efgPct: number | null;
  ftaRate: unknown;
  tmTovPct: number | null;
  orebPct: number | null;
  oppEfgPct: number | null;
  oppFtaRate: unknown;
  oppTovPct: number | null;
  oppOrebPct: number | null;
}

export interface BoxScoreFourFactorsV2Response {
  sqlPlayersFourFactors: sqlPlayersFourFactorsRow[];
  sqlTeamsFourFactors: sqlTeamsFourFactorsRow[];
}
