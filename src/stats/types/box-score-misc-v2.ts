
export interface BoxScoreMiscV2Params {
  gameID: number;
  endPeriod?: number;
  endRange?: number;
  rangeType?: number;
  startPeriod?: number;
  startRange?: number;
}

export interface sqlPlayersMiscRow {
  gameId: string;
  teamId: number;
  teamAbbreviation: string;
  teamCity: string;
  playerId: number;
  playerName: string;
  startPosition: string;
  comment: string;
  min: number;
  ptsOffTov: unknown;
  pts2ndChance: unknown;
  ptsFb: unknown;
  ptsPaint: unknown;
  oppPtsOffTov: unknown;
  oppPts2ndChance: unknown;
  oppPtsFb: unknown;
  oppPtsPaint: unknown;
  blk: number;
  blka: number;
  pf: number;
  pfd: number;
}

export interface sqlTeamsMiscRow {
  gameId: string;
  teamId: number;
  teamName: string;
  teamAbbreviation: string;
  teamCity: string;
  min: number;
  ptsOffTov: unknown;
  pts2ndChance: unknown;
  ptsFb: unknown;
  ptsPaint: unknown;
  oppPtsOffTov: unknown;
  oppPts2ndChance: unknown;
  oppPtsFb: unknown;
  oppPtsPaint: unknown;
  blk: number;
  blka: number;
  pf: number;
  pfd: number;
}

export interface BoxScoreMiscV2Response {
  sqlPlayersMisc: sqlPlayersMiscRow[];
  sqlTeamsMisc: sqlTeamsMiscRow[];
}
