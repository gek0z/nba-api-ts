import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerAwardsParams, PlayerAwardsResponse } from '../types/player-awards.js';

const RESULT_SET_MAP: Record<string, string> = {
  'PlayerAwards': 'playerAwards',
};

export async function playerAwards(
  client: FetchClient,
  params: PlayerAwardsParams,
): Promise<PlayerAwardsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playerawards', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerAwardsResponse;
}
