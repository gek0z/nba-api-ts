import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerCareerStatsParams, PlayerCareerStatsResponse } from '../types/player-career-stats.js';

const RESULT_SET_MAP: Record<string, string> = {
  'CareerTotalsAllStarSeason': 'careerTotalsAllStarSeason',
  'CareerTotalsCollegeSeason': 'careerTotalsCollegeSeason',
  'CareerTotalsPostSeason': 'careerTotalsPostSeason',
  'CareerTotalsRegularSeason': 'careerTotalsRegularSeason',
  'SeasonRankingsPostSeason': 'seasonRankingsPostSeason',
  'SeasonRankingsRegularSeason': 'seasonRankingsRegularSeason',
  'SeasonTotalsAllStarSeason': 'seasonTotalsAllStarSeason',
  'SeasonTotalsCollegeSeason': 'seasonTotalsCollegeSeason',
  'SeasonTotalsPostSeason': 'seasonTotalsPostSeason',
  'SeasonTotalsRegularSeason': 'seasonTotalsRegularSeason',
};

export async function playerCareerStats(
  client: FetchClient,
  params: PlayerCareerStatsParams,
): Promise<PlayerCareerStatsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'PlayerID': params.playerID,
    'PerMode': params.perMode ?? 'PerGame',
    'LeagueID': params.leagueID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playercareerstats', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerCareerStatsResponse;
}
