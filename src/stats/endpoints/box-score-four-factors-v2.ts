import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { BoxScoreFourFactorsV2Params, BoxScoreFourFactorsV2Response } from '../types/box-score-four-factors-v2.js';

const RESULT_SET_MAP: Record<string, string> = {
  'sqlPlayersFourFactors': 'sqlPlayersFourFactors',
  'sqlTeamsFourFactors': 'sqlTeamsFourFactors',
};

export async function boxScoreFourFactorsV2(
  client: FetchClient,
  params: BoxScoreFourFactorsV2Params,
): Promise<BoxScoreFourFactorsV2Response> {
  const apiParams: Record<string, string | number | undefined> = {
    'GameID': params.gameID,
    'EndPeriod': params.endPeriod,
    'EndRange': params.endRange,
    'RangeType': params.rangeType,
    'StartPeriod': params.startPeriod,
    'StartRange': params.startRange,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/boxscorefourfactorsv2', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as BoxScoreFourFactorsV2Response;
}
