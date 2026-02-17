
export interface BoxScoreScoringV3Params {
  gameID: number;
  endPeriod?: number;
  endRange?: number;
  rangeType?: number;
  startPeriod?: number;
  startRange?: number;
}

export interface PlayerStatsRow {
  gameid: number;
  teamid: number;
  teamcity: string;
  teamname: string;
  teamtricode: string;
  teamslug: string;
  personid: number;
  firstname: string;
  familyname: string;
  namei: string;
  playerslug: string;
  position: string;
  comment: string;
  jerseynum: unknown;
  minutes: unknown;
  percentagefieldgoalsattempted2pt: unknown;
  percentagefieldgoalsattempted3pt: unknown;
  percentagepoints2pt: unknown;
  percentagepointsmidrange2pt: unknown;
  percentagepoints3pt: unknown;
  percentagepointsfastbreak: unknown;
  percentagepointsfreethrow: unknown;
  percentagepointsoffturnovers: unknown;
  percentagepointspaint: unknown;
  percentageassisted2pt: unknown;
  percentageunassisted2pt: unknown;
  percentageassisted3pt: unknown;
  percentageunassisted3pt: unknown;
  percentageassistedfgm: unknown;
  percentageunassistedfgm: unknown;
}

export interface TeamStatsRow {
  gameid: number;
  teamid: number;
  teamcity: string;
  teamname: string;
  teamtricode: string;
  teamslug: string;
  minutes: unknown;
  percentagefieldgoalsattempted2pt: unknown;
  percentagefieldgoalsattempted3pt: unknown;
  percentagepoints2pt: unknown;
  percentagepointsmidrange2pt: unknown;
  percentagepoints3pt: unknown;
  percentagepointsfastbreak: unknown;
  percentagepointsfreethrow: unknown;
  percentagepointsoffturnovers: unknown;
  percentagepointspaint: unknown;
  percentageassisted2pt: unknown;
  percentageunassisted2pt: unknown;
  percentageassisted3pt: unknown;
  percentageunassisted3pt: unknown;
  percentageassistedfgm: unknown;
  percentageunassistedfgm: unknown;
}

export interface BoxScoreScoringV3Response {
  playerStats: PlayerStatsRow[];
  teamStats: TeamStatsRow[];
}
