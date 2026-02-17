import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { FranchiseHistoryParams, FranchiseHistoryResponse } from '../types/franchise-history.js';

const RESULT_SET_MAP: Record<string, string> = {
  'DefunctTeams': 'defunctTeams',
  'FranchiseHistory': 'franchiseHistory',
};

export async function franchiseHistory(
  client: FetchClient,
  params: FranchiseHistoryParams,
): Promise<FranchiseHistoryResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/franchisehistory', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as FranchiseHistoryResponse;
}
