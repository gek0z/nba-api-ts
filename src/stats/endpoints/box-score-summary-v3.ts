import type { FetchClient } from '../../http/fetch-client.js';
import { parseV3Response } from '../../response/parser.js';
import type { BoxScoreSummaryV3Params, BoxScoreSummaryV3Response } from '../types/box-score-summary-v3.js';

export async function boxScoreSummaryV3(
  client: FetchClient,
  params: BoxScoreSummaryV3Params,
): Promise<BoxScoreSummaryV3Response> {
  const apiParams: Record<string, string | number | undefined> = {
  };

  const raw = await client.get<Record<string, unknown>>('/stats/boxscoresummaryv3', apiParams);
  return parseV3Response<BoxScoreSummaryV3Response>(raw);
}
