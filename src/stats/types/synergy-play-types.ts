
export interface SynergyPlayTypesParams {
  leagueID?: string;
  perMode?: string;
  playerOrTeam?: string;
  seasonType?: string;
  seasonYear?: number;
  playType?: string;
  typeGrouping?: string;
}

export interface SynergyPlayTypeRow {
  seasonId: string;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  playType: string;
  typeGrouping: string;
  percentile: unknown;
  gp: number;
  possPct: number | null;
  ppp: unknown;
  fgPct: number | null;
  ftPossPct: number | null;
  tovPossPct: number | null;
  sfPossPct: number | null;
  plusonePossPct: number | null;
  scorePossPct: number | null;
  efgPct: number | null;
  poss: unknown;
  pts: number;
  fgm: number;
  fga: number;
  fgmx: unknown;
}

export interface SynergyPlayTypesResponse {
  synergyPlayType: SynergyPlayTypeRow[];
}
