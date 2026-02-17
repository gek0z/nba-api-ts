import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { TeamYearByYearStatsParams, TeamYearByYearStatsResponse } from '../types/team-year-by-year-stats.js';

const RESULT_SET_MAP: Record<string, string> = {
  'TeamStats': 'teamStats',
};

export async function teamYearByYearStats(
  client: FetchClient,
  params: TeamYearByYearStatsParams,
): Promise<TeamYearByYearStatsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'TeamID': params.teamID,
    'LeagueID': params.leagueID,
    'PerMode': params.perMode,
    'SeasonType': params.seasonType,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/teamyearbyyearstats', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as TeamYearByYearStatsResponse;
}
