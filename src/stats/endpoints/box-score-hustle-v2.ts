import type { FetchClient } from '../../http/fetch-client.js';
import { parseV3Response } from '../../response/parser.js';
import type { BoxScoreHustleV2Params, BoxScoreHustleV2Response } from '../types/box-score-hustle-v2.js';

export async function boxScoreHustleV2(
  client: FetchClient,
  params: BoxScoreHustleV2Params,
): Promise<BoxScoreHustleV2Response> {
  const apiParams: Record<string, string | number | undefined> = {
  };

  const raw = await client.get<Record<string, unknown>>('/stats/boxscorehustlev2', apiParams);
  return parseV3Response<BoxScoreHustleV2Response>(raw);
}
