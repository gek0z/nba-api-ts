import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { LeagueLineupVizParams, LeagueLineupVizResponse } from '../types/league-lineup-viz.js';

const RESULT_SET_MAP: Record<string, string> = {
  'LeagueLineupViz': 'leagueLineupViz',
};

export async function leagueLineupViz(
  client: FetchClient,
  params: LeagueLineupVizParams,
): Promise<LeagueLineupVizResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'MinutesMin': params.minutesMin,
    'GroupQuantity': params.groupQuantity,
    'LastNGames': params.lastNGames,
    'MeasureType': params.measureType,
    'Month': params.month,
    'OpponentTeamID': params.opponentTeamID,
    'PaceAdjust': params.paceAdjust,
    'PerMode': params.perMode,
    'Period': params.period,
    'PlusMinus': params.plusMinus,
    'Rank': params.rank,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'Conference': params.conference,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'Division': params.division,
    'GameSegment': params.gameSegment,
    'LeagueID': params.leagueID,
    'Location': params.location,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'SeasonSegment': params.seasonSegment,
    'ShotClockRange': params.shotClockRange,
    'TeamID': params.teamID,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/leaguelineupviz', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as LeagueLineupVizResponse;
}
