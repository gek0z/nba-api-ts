import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { HomePageV2Params, HomePageV2Response } from '../types/home-page-v2.js';

const RESULT_SET_MAP: Record<string, string> = {
  'HomePageStat1': 'homePageStat1',
  'HomePageStat2': 'homePageStat2',
  'HomePageStat3': 'homePageStat3',
  'HomePageStat4': 'homePageStat4',
  'HomePageStat5': 'homePageStat5',
  'HomePageStat6': 'homePageStat6',
  'HomePageStat7': 'homePageStat7',
  'HomePageStat8': 'homePageStat8',
};

export async function homePageV2(
  client: FetchClient,
  params: HomePageV2Params,
): Promise<HomePageV2Response> {
  const apiParams: Record<string, string | number | undefined> = {
    'GameScope': params.gameScope,
    'LeagueID': params.leagueID,
    'PlayerOrTeam': params.playerOrTeam,
    'PlayerScope': params.playerScope,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'StatType': params.statType,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/homepagev2', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as HomePageV2Response;
}
