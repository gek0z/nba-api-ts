
export interface FranchiseLeadersParams {
  teamID: number;
  leagueID?: string;
}

export interface FranchiseLeadersRow {
  teamId: number;
  pts: number;
  ptsPersonId: number;
  ptsPlayer: unknown;
  ast: number;
  astPersonId: number;
  astPlayer: unknown;
  reb: number;
  rebPersonId: number;
  rebPlayer: unknown;
  blk: number;
  blkPersonId: number;
  blkPlayer: unknown;
  stl: number;
  stlPersonId: number;
  stlPlayer: unknown;
}

export interface FranchiseLeadersResponse {
  franchiseLeaders: FranchiseLeadersRow[];
}
