import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { DefenseHubParams, DefenseHubResponse } from '../types/defense-hub.js';

const RESULT_SET_MAP: Record<string, string> = {
  'DefenseHubStat1': 'defenseHubStat1',
  'DefenseHubStat2': 'defenseHubStat2',
  'DefenseHubStat3': 'defenseHubStat3',
  'DefenseHubStat4': 'defenseHubStat4',
  'DefenseHubStat5': 'defenseHubStat5',
  'DefenseHubStat6': 'defenseHubStat6',
  'DefenseHubStat7': 'defenseHubStat7',
  'DefenseHubStat8': 'defenseHubStat8',
  'DefenseHubStat9': 'defenseHubStat9',
};

export async function defenseHub(
  client: FetchClient,
  params: DefenseHubParams,
): Promise<DefenseHubResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'GameScope': params.gameScope,
    'LeagueID': params.leagueID,
    'PlayerOrTeam': params.playerOrTeam,
    'PlayerScope': params.playerScope,
    'Season': params.season,
    'SeasonType': params.seasonType,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/defensehub', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as DefenseHubResponse;
}
