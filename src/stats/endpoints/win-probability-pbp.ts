import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { WinProbabilityPBPParams, WinProbabilityPBPResponse } from '../types/win-probability-pbp.js';

const RESULT_SET_MAP: Record<string, string> = {
  'GameInfo': 'gameInfo',
  'WinProbPBP': 'winProbPBP',
};

export async function winProbabilityPBP(
  client: FetchClient,
  params: WinProbabilityPBPParams,
): Promise<WinProbabilityPBPResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'GameID': params.gameID,
    'RunType': params.runType,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/winprobabilitypbp', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as WinProbabilityPBPResponse;
}
