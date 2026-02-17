import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerDashboardByYearOverYearParams, PlayerDashboardByYearOverYearResponse } from '../types/player-dashboard-by-year-over-year.js';

const RESULT_SET_MAP: Record<string, string> = {
  'ByYearPlayerDashboard': 'byYearPlayerDashboard',
  'OverallPlayerDashboard': 'overallPlayerDashboard',
};

export async function playerDashboardByYearOverYear(
  client: FetchClient,
  params: PlayerDashboardByYearOverYearParams,
): Promise<PlayerDashboardByYearOverYearResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'PlayerID': params.playerID,
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
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'GameSegment': params.gameSegment,
    'LeagueID': params.leagueID,
    'Location': params.location,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'SeasonSegment': params.seasonSegment,
    'ShotClockRange': params.shotClockRange,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playerdashboardbyyearoveryear', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerDashboardByYearOverYearResponse;
}
