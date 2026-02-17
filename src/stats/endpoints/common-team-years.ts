import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { CommonTeamYearsParams, CommonTeamYearsResponse } from '../types/common-team-years.js';

const RESULT_SET_MAP: Record<string, string> = {
  'TeamYears': 'teamYears',
};

export async function commonTeamYears(
  client: FetchClient,
  params: CommonTeamYearsParams,
): Promise<CommonTeamYearsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/commonteamyears', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as CommonTeamYearsResponse;
}
