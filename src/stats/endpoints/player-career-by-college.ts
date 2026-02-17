import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerCareerByCollegeParams, PlayerCareerByCollegeResponse } from '../types/player-career-by-college.js';

const RESULT_SET_MAP: Record<string, string> = {
  'PlayerCareerByCollege': 'playerCareerByCollege',
};

export async function playerCareerByCollege(
  client: FetchClient,
  params: PlayerCareerByCollegeParams,
): Promise<PlayerCareerByCollegeResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'College': params.college,
    'LeagueID': params.leagueID,
    'PerMode': params.perMode,
    'SeasonType': params.seasonType,
    'Season': params.season,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playercareerbycollege', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerCareerByCollegeResponse;
}
