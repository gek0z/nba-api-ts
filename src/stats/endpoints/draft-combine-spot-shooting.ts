import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { DraftCombineSpotShootingParams, DraftCombineSpotShootingResponse } from '../types/draft-combine-spot-shooting.js';

const RESULT_SET_MAP: Record<string, string> = {
  'Results': 'results',
};

export async function draftCombineSpotShooting(
  client: FetchClient,
  params: DraftCombineSpotShootingParams,
): Promise<DraftCombineSpotShootingResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'SeasonYear': params.seasonYear,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/draftcombinespotshooting', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as DraftCombineSpotShootingResponse;
}
