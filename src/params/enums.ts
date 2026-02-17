// ── String union types for NBA API parameters ──

export type PerModeSimple = 'Totals' | 'PerGame';
export type PerMode36 = PerModeSimple | 'Per36';
export type PerMode48 = PerModeSimple | 'Per48';
export type PerModeTime = PerMode36 | PerMode48 | 'MinutesPer' | 'Per40';
export type PerModeDetailed = PerModeTime | 'PerMinute' | 'PerPossession' | 'PerPlay' | 'Per100Possessions' | 'Per100Plays';

export type MeasureTypeBase = 'Base';
export type MeasureTypeSimple = MeasureTypeBase | 'Opponent';
export type MeasureTypePlayerGameLogs = MeasureTypeBase | 'Advanced' | 'Misc' | 'Scoring' | 'Usage';
export type MeasureTypeDetailed = MeasureTypeSimple | 'Advanced' | 'Misc' | 'Scoring' | 'Usage' | 'Four Factors';
export type MeasureTypeDetailedDefense = MeasureTypeDetailed | 'Defense';

export type SeasonType = 'Regular Season' | 'Pre Season' | 'PlayIn';
export type SeasonTypePlayoffs = SeasonType | 'Playoffs';
export type SeasonTypeAllStar = SeasonTypePlayoffs | 'All Star';

export type Conference = 'East' | 'West' | '';
export type Division = 'East' | 'West';
export type DivisionSimple = 'Atlantic' | 'Central' | 'Northwest' | 'Pacific' | 'Southeast' | 'Southwest';

export type LeagueID = '00' | '01' | '10' | '15' | '20';

export type Outcome = 'W' | 'L';
export type Location = 'Home' | 'Road';

export type GameSegment = 'First Half' | 'Overtime' | 'Second Half';

export type ClutchTime =
  | 'Last 5 Minutes'
  | 'Last 4 Minutes'
  | 'Last 3 Minutes'
  | 'Last 2 Minutes'
  | 'Last 1 Minute'
  | 'Last 30 Seconds'
  | 'Last 10 Seconds';

export type AheadBehind = 'Ahead or Behind' | 'Behind or Tied' | 'Ahead or Tied';

export type PlayerExperience = 'Rookie' | 'Sophomore' | 'Veteran';
export type PlayerPosition = 'Forward' | 'Center' | 'Guard';
export type PlayerPositionAbbreviation = 'F' | 'C' | 'G' | 'C-F' | 'F-C' | 'F-G' | 'G-F';
export type PlayerOrTeam = 'Player' | 'Team';
export type PlayerOrTeamAbbreviation = 'P' | 'T';
export type PlayerScope = 'All Players' | 'Rookies';

export type StarterBench = 'Starters' | 'Bench';

export type Direction = 'ASC' | 'DESC';

export type DistanceRange = '5ft Range' | '8ft Range' | 'By Zone';

export type GameScopeSimple = 'Last 10' | 'Yesterday';
export type GameScopeDetailed = GameScopeSimple | 'Season' | 'Finals';

export type Active = '0' | '1';
export type AllStar = '0' | '1';
export type Historical = '0' | '1';
export type YesNo = 'Y' | 'N';

export type Scope = 'RS' | 'S' | 'Rookies';
export type Section = 'group' | 'wildcard';

export type DefenseCategory = 'Overall' | '3 Pointers' | '2 Pointers' | 'Less Than 6Ft' | 'Less Than 10Ft' | 'Greater Than 15Ft';

export type ContextMeasureSimple =
  | 'PTS' | 'FGM' | 'FGA' | 'FG_PCT' | 'FG3M' | 'FG3A' | 'FG3_PCT'
  | 'PTS_FB' | 'PTS_OFF_TOV' | 'PTS_2ND_CHANCE'
  | 'PF' | 'EFG_PCT' | 'TS_PCT';

export type ContextMeasureDetailed = ContextMeasureSimple
  | 'FTM' | 'FTA' | 'OREB' | 'DREB' | 'AST' | 'FGM_AST' | 'FG3_AST'
  | 'STL' | 'BLK' | 'BLKA' | 'TOV'
  | 'POSS_END_FT' | 'PTS_PAINT' | 'REB'
  | 'TM_FGM' | 'TM_FGA' | 'TM_FG3M' | 'TM_FG3A' | 'TM_FTM' | 'TM_FTA'
  | 'TM_OREB' | 'TM_DREB' | 'TM_REB' | 'TM_TEAM_REB' | 'TM_AST'
  | 'TM_STL' | 'TM_BLK' | 'TM_BLKA' | 'TM_TOV' | 'TM_TEAM_TOV'
  | 'TM_PF' | 'TM_PFD' | 'TM_PTS' | 'TM_PTS_PAINT' | 'TM_PTS_FB'
  | 'TM_PTS_OFF_TOV' | 'TM_PTS_2ND_CHANCE' | 'TM_FGM_AST' | 'TM_FG3_AST' | 'TM_POSS_END_FT'
  | 'OPP_FTM' | 'OPP_FTA' | 'OPP_OREB' | 'OPP_DREB' | 'OPP_REB' | 'OPP_TEAM_REB'
  | 'OPP_AST' | 'OPP_STL' | 'OPP_BLK' | 'OPP_BLKA' | 'OPP_TOV' | 'OPP_TEAM_TOV'
  | 'OPP_PF' | 'OPP_PFD' | 'OPP_PTS' | 'OPP_PTS_PAINT' | 'OPP_PTS_FB'
  | 'OPP_PTS_OFF_TOV' | 'OPP_PTS_2ND_CHANCE' | 'OPP_FGM_AST' | 'OPP_FG3_AST' | 'OPP_POSS_END_FT';

export type PtMeasureType =
  | 'SpeedDistance' | 'Rebounding' | 'Possessions' | 'CatchShoot'
  | 'PullUpShot' | 'Defense' | 'Drives' | 'Passing'
  | 'ElbowTouch' | 'PostTouch' | 'PaintTouch' | 'Efficiency';

export type PlayType =
  | 'Transition' | 'Isolation' | 'PRBallHandler' | 'PRRollman'
  | 'Postup' | 'Spotup' | 'Handoff' | 'Cut'
  | 'OffScreen' | 'OffRebound' | 'Misc';

export type ShotClockRange =
  | '24-22' | '22-18 Very Early' | '18-15 Early'
  | '15-7 Average' | '7-4 Late' | '4-0 Very Late' | 'ShotClock Off';

export type Sorter =
  | 'FGM' | 'FGA' | 'FG_PCT' | 'FG3M' | 'FG3A' | 'FG3_PCT'
  | 'FTM' | 'FTA' | 'FT_PCT' | 'OREB' | 'DREB' | 'AST'
  | 'STL' | 'BLK' | 'TOV' | 'REB' | 'PTS' | 'DATE';

export type Stat = 'PTS' | 'REB' | 'AST' | 'FG_PCT' | 'FT_PCT' | 'FG3_PCT' | 'STL' | 'BLK';

export type StatCategory =
  | 'Points' | 'Rebounds' | 'Assists' | 'Defense' | 'Clutch'
  | 'Playmaking' | 'Efficiency' | 'Fast Break' | 'Scoring Breakdown';

export type StatCategoryAbbreviation =
  | 'PTS' | 'FGM' | 'FGA' | 'FG_PCT' | 'FG3M' | 'FG3A' | 'FG3_PCT'
  | 'FTM' | 'FTA' | 'OREB' | 'DREB' | 'AST' | 'STL' | 'BLK' | 'TOV' | 'REB';

export type StatType = 'Traditional' | 'Advanced' | 'Tracking';
export type TypeGrouping = 'offensive' | 'defensive';
