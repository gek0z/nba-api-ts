import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { LeagueGameLogParams, LeagueGameLogResponse } from '../types/league-game-log.js';

const RESULT_SET_MAP: Record<string, string> = {
  'LeagueGameLog': 'leagueGameLog',
};

export async function leagueGameLog(
  client: FetchClient,
  params: LeagueGameLogParams,
): Promise<LeagueGameLogResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'Counter': params.counter,
    'Direction': params.direction,
    'LeagueID': params.leagueID,
    'PlayerOrTeam': params.playerOrTeam,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'Sorter': params.sorter,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/leaguegamelog', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as LeagueGameLogResponse;
}
