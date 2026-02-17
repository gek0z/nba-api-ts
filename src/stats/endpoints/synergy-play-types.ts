import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { SynergyPlayTypesParams, SynergyPlayTypesResponse } from '../types/synergy-play-types.js';

const RESULT_SET_MAP: Record<string, string> = {
  'SynergyPlayType': 'synergyPlayType',
};

export async function synergyPlayTypes(
  client: FetchClient,
  params: SynergyPlayTypesParams,
): Promise<SynergyPlayTypesResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'PerMode': params.perMode,
    'PlayerOrTeam': params.playerOrTeam,
    'SeasonType': params.seasonType,
    'SeasonYear': params.seasonYear,
    'PlayType': params.playType,
    'TypeGrouping': params.typeGrouping,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/synergyplaytypes', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as SynergyPlayTypesResponse;
}
