import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { LeagueStandingsV3Params, LeagueStandingsV3Response } from '../types/league-standings-v3.js';

const RESULT_SET_MAP: Record<string, string> = {
  'Standings': 'standings',
};

export async function leagueStandingsV3(
  client: FetchClient,
  params: LeagueStandingsV3Params,
): Promise<LeagueStandingsV3Response> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'SeasonYear': params.seasonYear,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/leaguestandingsv3', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as LeagueStandingsV3Response;
}
