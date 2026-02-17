import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerGameLogParams, PlayerGameLogResponse } from '../types/player-game-log.js';

const RESULT_SET_MAP: Record<string, string> = {
  'PlayerGameLog': 'playerGameLog',
};

export async function playerGameLog(
  client: FetchClient,
  params: PlayerGameLogParams,
): Promise<PlayerGameLogResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'PlayerID': params.playerID,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'LeagueID': params.leagueID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playergamelog', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerGameLogResponse;
}
