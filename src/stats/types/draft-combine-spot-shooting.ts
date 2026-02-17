
export interface DraftCombineSpotShootingParams {
  leagueID?: string;
  seasonYear?: number;
}

export interface ResultsRow {
  tempPlayerId: number;
  playerId: number;
  firstName: string;
  lastName: string;
  playerName: string;
  position: string;
  fifteenCornerLeftMade: unknown;
  fifteenCornerLeftAttempt: unknown;
  fifteenCornerLeftPct: number | null;
  fifteenBreakLeftMade: unknown;
  fifteenBreakLeftAttempt: unknown;
  fifteenBreakLeftPct: number | null;
  fifteenTopKeyMade: unknown;
  fifteenTopKeyAttempt: unknown;
  fifteenTopKeyPct: number | null;
  fifteenBreakRightMade: unknown;
  fifteenBreakRightAttempt: unknown;
  fifteenBreakRightPct: number | null;
  fifteenCornerRightMade: unknown;
  fifteenCornerRightAttempt: unknown;
  fifteenCornerRightPct: number | null;
  collegeCornerLeftMade: unknown;
  collegeCornerLeftAttempt: unknown;
  collegeCornerLeftPct: number | null;
  collegeBreakLeftMade: unknown;
  collegeBreakLeftAttempt: unknown;
  collegeBreakLeftPct: number | null;
  collegeTopKeyMade: unknown;
  collegeTopKeyAttempt: unknown;
  collegeTopKeyPct: number | null;
  collegeBreakRightMade: unknown;
  collegeBreakRightAttempt: unknown;
  collegeBreakRightPct: number | null;
  collegeCornerRightMade: unknown;
  collegeCornerRightAttempt: unknown;
  collegeCornerRightPct: number | null;
  nbaCornerLeftMade: unknown;
  nbaCornerLeftAttempt: unknown;
  nbaCornerLeftPct: number | null;
  nbaBreakLeftMade: unknown;
  nbaBreakLeftAttempt: unknown;
  nbaBreakLeftPct: number | null;
  nbaTopKeyMade: unknown;
  nbaTopKeyAttempt: unknown;
  nbaTopKeyPct: number | null;
  nbaBreakRightMade: unknown;
  nbaBreakRightAttempt: unknown;
  nbaBreakRightPct: number | null;
  nbaCornerRightMade: unknown;
  nbaCornerRightAttempt: unknown;
  nbaCornerRightPct: number | null;
}

export interface DraftCombineSpotShootingResponse {
  results: ResultsRow[];
}
