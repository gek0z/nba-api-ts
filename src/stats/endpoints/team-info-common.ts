import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { TeamInfoCommonParams, TeamInfoCommonResponse } from '../types/team-info-common.js';

const RESULT_SET_MAP: Record<string, string> = {
  'AvailableSeasons': 'availableSeasons',
  'TeamInfoCommon': 'teamInfoCommon',
  'TeamSeasonRanks': 'teamSeasonRanks',
};

export async function teamInfoCommon(
  client: FetchClient,
  params: TeamInfoCommonParams,
): Promise<TeamInfoCommonResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'TeamID': params.teamID,
    'LeagueID': params.leagueID,
    'Season': params.season,
    'SeasonType': params.seasonType,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/teaminfocommon', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as TeamInfoCommonResponse;
}
