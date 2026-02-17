import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { DraftHistoryParams, DraftHistoryResponse } from '../types/draft-history.js';

const RESULT_SET_MAP: Record<string, string> = {
  'DraftHistory': 'draftHistory',
};

export async function draftHistory(
  client: FetchClient,
  params: DraftHistoryParams,
): Promise<DraftHistoryResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'College': params.college,
    'OverallPick': params.overallPick,
    'RoundNum': params.roundNum,
    'RoundPick': params.roundPick,
    'Season': params.season,
    'TeamID': params.teamID,
    'TopX': params.topX,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/drafthistory', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as DraftHistoryResponse;
}
