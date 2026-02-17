import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { CommonTeamRosterParams, CommonTeamRosterResponse } from '../types/common-team-roster.js';

const RESULT_SET_MAP: Record<string, string> = {
  'Coaches': 'coaches',
  'CommonTeamRoster': 'commonTeamRoster',
};

export async function commonTeamRoster(
  client: FetchClient,
  params: CommonTeamRosterParams,
): Promise<CommonTeamRosterResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'TeamID': params.teamID,
    'Season': params.season,
    'LeagueID': params.leagueID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/commonteamroster', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as CommonTeamRosterResponse;
}
