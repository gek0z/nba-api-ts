
export interface PlayerAwardsParams {
}

export interface PlayerAwardsRow {
  personId: number;
  firstName: string;
  lastName: string;
  team: unknown;
  description: string;
  allNbaTeamNumber: unknown;
  season: string;
  month: unknown;
  week: unknown;
  conference: unknown;
  type: string;
  subtype1: string;
  subtype2: string;
  subtype3: string;
}

export interface PlayerAwardsResponse {
  playerAwards: PlayerAwardsRow[];
}
