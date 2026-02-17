import type { FetchClient } from '../../http/fetch-client.js';
import { parseV3Response } from '../../response/parser.js';
import type { BoxScoreMatchupsV3Params, BoxScoreMatchupsV3Response } from '../types/box-score-matchups-v3.js';

export async function boxScoreMatchupsV3(
  client: FetchClient,
  params: BoxScoreMatchupsV3Params,
): Promise<BoxScoreMatchupsV3Response> {
  const apiParams: Record<string, string | number | undefined> = {
  };

  const raw = await client.get<Record<string, unknown>>('/stats/boxscorematchupsv3', apiParams);
  return parseV3Response<BoxScoreMatchupsV3Response>(raw);
}
