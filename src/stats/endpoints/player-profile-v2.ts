import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerProfileV2Params, PlayerProfileV2Response } from '../types/player-profile-v2.js';

const RESULT_SET_MAP: Record<string, string> = {
  'CareerHighs': 'careerHighs',
  'CareerTotalsAllStarSeason': 'careerTotalsAllStarSeason',
  'CareerTotalsCollegeSeason': 'careerTotalsCollegeSeason',
  'CareerTotalsPostSeason': 'careerTotalsPostSeason',
  'CareerTotalsPreseason': 'careerTotalsPreseason',
  'CareerTotalsRegularSeason': 'careerTotalsRegularSeason',
  'NextGame': 'nextGame',
  'SeasonHighs': 'seasonHighs',
  'SeasonRankingsPostSeason': 'seasonRankingsPostSeason',
  'SeasonRankingsRegularSeason': 'seasonRankingsRegularSeason',
  'SeasonTotalsAllStarSeason': 'seasonTotalsAllStarSeason',
  'SeasonTotalsCollegeSeason': 'seasonTotalsCollegeSeason',
  'SeasonTotalsPostSeason': 'seasonTotalsPostSeason',
  'SeasonTotalsPreseason': 'seasonTotalsPreseason',
  'SeasonTotalsRegularSeason': 'seasonTotalsRegularSeason',
};

export async function playerProfileV2(
  client: FetchClient,
  params: PlayerProfileV2Params,
): Promise<PlayerProfileV2Response> {
  const apiParams: Record<string, string | number | undefined> = {
    'PlayerID': params.playerID,
    'PerMode': params.perMode,
    'LeagueID': params.leagueID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playerprofilev2', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerProfileV2Response;
}
