import type { FetchClient } from '../../http/fetch-client.js';
import { parseV3Response } from '../../response/parser.js';
import type { BoxScoreDefensiveV2Params, BoxScoreDefensiveV2Response } from '../types/box-score-defensive-v2.js';

export async function boxScoreDefensiveV2(
  client: FetchClient,
  params: BoxScoreDefensiveV2Params,
): Promise<BoxScoreDefensiveV2Response> {
  const apiParams: Record<string, string | number | undefined> = {
  };

  const raw = await client.get<Record<string, unknown>>('/stats/boxscoredefensivev2', apiParams);
  return parseV3Response<BoxScoreDefensiveV2Response>(raw);
}
