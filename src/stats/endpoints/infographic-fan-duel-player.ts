import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { InfographicFanDuelPlayerParams, InfographicFanDuelPlayerResponse } from '../types/infographic-fan-duel-player.js';

const RESULT_SET_MAP: Record<string, string> = {
  'FanDuelPlayer': 'fanDuelPlayer',
};

export async function infographicFanDuelPlayer(
  client: FetchClient,
  params: InfographicFanDuelPlayerParams,
): Promise<InfographicFanDuelPlayerResponse> {
  const apiParams: Record<string, string | number | undefined> = {
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/infographicfanduelplayer', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as InfographicFanDuelPlayerResponse;
}
