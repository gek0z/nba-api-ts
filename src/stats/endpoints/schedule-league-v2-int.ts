import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { ScheduleLeagueV2IntParams, ScheduleLeagueV2IntResponse } from '../types/schedule-league-v2-int.js';

const RESULT_SET_MAP: Record<string, string> = {
  'SeasonGames': 'seasonGames',
  'SeasonWeeks': 'seasonWeeks',
  'BroadcasterList': 'broadcasterList',
};

export async function scheduleLeagueV2Int(
  client: FetchClient,
  params: ScheduleLeagueV2IntParams,
): Promise<ScheduleLeagueV2IntResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'Season': params.season,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/scheduleleaguev2int', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as ScheduleLeagueV2IntResponse;
}
