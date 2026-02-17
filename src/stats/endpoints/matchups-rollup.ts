import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { MatchupsRollupParams, MatchupsRollupResponse } from '../types/matchups-rollup.js';

const RESULT_SET_MAP: Record<string, string> = {
  'MatchupsRollup': 'matchupsRollup',
};

export async function matchupsRollup(
  client: FetchClient,
  params: MatchupsRollupParams,
): Promise<MatchupsRollupResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'PerMode': params.perMode,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'DefPlayerID': params.defPlayerID,
    'DefTeamID': params.defTeamID,
    'OffPlayerID': params.offPlayerID,
    'OffTeamID': params.offTeamID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/matchupsrollup', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as MatchupsRollupResponse;
}
