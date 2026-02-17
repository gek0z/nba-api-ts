import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { BoxScoreTraditionalV2Params, BoxScoreTraditionalV2Response } from '../types/box-score-traditional-v2.js';

const RESULT_SET_MAP: Record<string, string> = {
  'PlayerStats': 'playerStats',
  'TeamStarterBenchStats': 'teamStarterBenchStats',
  'TeamStats': 'teamStats',
};

export async function boxScoreTraditionalV2(
  client: FetchClient,
  params: BoxScoreTraditionalV2Params,
): Promise<BoxScoreTraditionalV2Response> {
  const apiParams: Record<string, string | number | undefined> = {
    'GameID': params.gameID,
    'EndPeriod': params.endPeriod,
    'EndRange': params.endRange,
    'RangeType': params.rangeType,
    'StartPeriod': params.startPeriod,
    'StartRange': params.startRange,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/boxscoretraditionalv2', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as BoxScoreTraditionalV2Response;
}
