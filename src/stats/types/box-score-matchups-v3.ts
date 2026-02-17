
export interface BoxScoreMatchupsV3Params {
}

export interface PlayerStatsRow {
  gameid: number;
  teamid: number;
  teamcity: string;
  teamname: string;
  teamtricode: string;
  teamslug: string;
  personidoff: unknown;
  firstnameoff: string;
  familynameoff: string;
  nameioff: string;
  playerslugoff: string;
  jerseynumoff: unknown;
  personiddef: unknown;
  firstnamedef: string;
  familynamedef: string;
  nameidef: string;
  playerslugdef: string;
  positiondef: string;
  commentdef: string;
  jerseynumdef: unknown;
  matchupminutes: string;
  matchupminutessort: string;
  partialpossessions: unknown;
  percentagedefendertotaltime: unknown;
  percentageoffensivetotaltime: unknown;
  percentagetotaltimebothon: unknown;
  switcheson: unknown;
  playerpoints: unknown;
  teampoints: unknown;
  matchupassists: string;
  matchuppotentialassists: string;
  matchupturnovers: string;
  matchupblocks: string;
  matchupfieldgoalsmade: string;
  matchupfieldgoalsattempted: string;
  matchupfieldgoalspercentage: string;
  matchupthreepointersmade: string;
  matchupthreepointersattempted: string;
  matchupthreepointerspercentage: string;
  helpblocks: unknown;
  helpfieldgoalsmade: unknown;
  helpfieldgoalsattempted: unknown;
  helpfieldgoalspercentage: unknown;
  matchupfreethrowsmade: string;
  matchupfreethrowsattempted: string;
  shootingfouls: unknown;
}

export interface BoxScoreMatchupsV3Response {
  playerStats: PlayerStatsRow[];
}
