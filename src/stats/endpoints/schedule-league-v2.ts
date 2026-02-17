import type { FetchClient } from '../../http/fetch-client.js';
import { parseV3Response } from '../../response/parser.js';
import type { ScheduleLeagueV2Params, ScheduleLeagueV2Response } from '../types/schedule-league-v2.js';

export async function scheduleLeagueV2(
  client: FetchClient,
  params: ScheduleLeagueV2Params,
): Promise<ScheduleLeagueV2Response> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'Season': params.season,
  };

  const raw = await client.get<Record<string, unknown>>('/stats/scheduleleaguev2', apiParams);
  return parseV3Response<ScheduleLeagueV2Response>(raw);
}
