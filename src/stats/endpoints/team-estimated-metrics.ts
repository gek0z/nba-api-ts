import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { TeamEstimatedMetricsParams, TeamEstimatedMetricsResponse } from '../types/team-estimated-metrics.js';

const RESULT_SET_MAP: Record<string, string> = {
  'TeamEstimatedMetrics': 'teamEstimatedMetrics',
};

export async function teamEstimatedMetrics(
  client: FetchClient,
  params: TeamEstimatedMetricsParams,
): Promise<TeamEstimatedMetricsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'Season': params.season,
    'SeasonType': params.seasonType,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/teamestimatedmetrics', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as TeamEstimatedMetricsResponse;
}
