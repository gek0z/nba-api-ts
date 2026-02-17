import type { FetchClient } from '../../http/fetch-client.js';
import { parseV3Response } from '../../response/parser.js';
import type { BoxScoreScoringV3Params, BoxScoreScoringV3Response } from '../types/box-score-scoring-v3.js';

export async function boxScoreScoringV3(
  client: FetchClient,
  params: BoxScoreScoringV3Params,
): Promise<BoxScoreScoringV3Response> {
  const apiParams: Record<string, string | number | undefined> = {
    'GameID': params.gameID,
    'EndPeriod': params.endPeriod,
    'EndRange': params.endRange,
    'RangeType': params.rangeType,
    'StartPeriod': params.startPeriod,
    'StartRange': params.startRange,
  };

  const raw = await client.get<Record<string, unknown>>('/stats/boxscorescoringv3', apiParams);
  return parseV3Response<BoxScoreScoringV3Response>(raw);
}
