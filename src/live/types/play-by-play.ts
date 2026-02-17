export interface PlayByPlayResponse {
  game: {
    gameId: string;
    actions: PlayByPlayAction[];
  };
}

export interface PlayByPlayAction {
  actionNumber: number;
  clock: string;
  timeActual: string;
  period: number;
  periodType: string;
  teamId: number;
  teamTricode: string;
  actionType: string;
  subType: string;
  descriptor: string;
  qualifiers: string[];
  personId: number;
  x: number | null;
  y: number | null;
  possession: number;
  scoreHome: string;
  scoreAway: string;
  edited: string;
  orderNumber: number;
  xLegacy: number | null;
  yLegacy: number | null;
  isFieldGoal: number;
  side: string | null;
  playerName: string;
  playerNameI: string;
  personIdsFilter: number[];
  description: string;
  [key: string]: unknown;
}
