import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { TeamHistoricalLeadersParams, TeamHistoricalLeadersResponse } from '../types/team-historical-leaders.js';

const RESULT_SET_MAP: Record<string, string> = {
  'CareerLeadersByTeam': 'careerLeadersByTeam',
};

export async function teamHistoricalLeaders(
  client: FetchClient,
  params: TeamHistoricalLeadersParams,
): Promise<TeamHistoricalLeadersResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'TeamID': params.teamID,
    'LeagueID': params.leagueID,
    'SeasonID': params.seasonID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/teamhistoricalleaders', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as TeamHistoricalLeadersResponse;
}
