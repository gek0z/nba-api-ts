import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { HustleStatsBoxScoreParams, HustleStatsBoxScoreResponse } from '../types/hustle-stats-box-score.js';

const RESULT_SET_MAP: Record<string, string> = {
  'HustleStatsAvailable': 'hustleStatsAvailable',
  'PlayerStats': 'playerStats',
  'TeamStats': 'teamStats',
};

export async function hustleStatsBoxScore(
  client: FetchClient,
  params: HustleStatsBoxScoreParams,
): Promise<HustleStatsBoxScoreResponse> {
  const apiParams: Record<string, string | number | undefined> = {
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/hustlestatsboxscore', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as HustleStatsBoxScoreResponse;
}
