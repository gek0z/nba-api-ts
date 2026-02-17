import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerFantasyProfileBarGraphParams, PlayerFantasyProfileBarGraphResponse } from '../types/player-fantasy-profile-bar-graph.js';

const RESULT_SET_MAP: Record<string, string> = {
  'LastFiveGamesAvg': 'lastFiveGamesAvg',
  'SeasonAvg': 'seasonAvg',
};

export async function playerFantasyProfileBarGraph(
  client: FetchClient,
  params: PlayerFantasyProfileBarGraphParams,
): Promise<PlayerFantasyProfileBarGraphResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'PlayerID': params.playerID,
    'Season': params.season,
    'LeagueID': params.leagueID,
    'SeasonType': params.seasonType,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playerfantasyprofilebargraph', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerFantasyProfileBarGraphResponse;
}
