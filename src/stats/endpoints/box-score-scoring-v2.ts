import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { BoxScoreScoringV2Params, BoxScoreScoringV2Response } from '../types/box-score-scoring-v2.js';

const RESULT_SET_MAP: Record<string, string> = {
  'sqlPlayersScoring': 'sqlPlayersScoring',
  'sqlTeamsScoring': 'sqlTeamsScoring',
};

export async function boxScoreScoringV2(
  client: FetchClient,
  params: BoxScoreScoringV2Params,
): Promise<BoxScoreScoringV2Response> {
  const apiParams: Record<string, string | number | undefined> = {
    'GameID': params.gameID,
    'EndPeriod': params.endPeriod,
    'EndRange': params.endRange,
    'RangeType': params.rangeType,
    'StartPeriod': params.startPeriod,
    'StartRange': params.startRange,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/boxscorescoringv2', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as BoxScoreScoringV2Response;
}
