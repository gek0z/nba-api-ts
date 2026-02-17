import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { CumeStatsTeamGamesParams, CumeStatsTeamGamesResponse } from '../types/cume-stats-team-games.js';

const RESULT_SET_MAP: Record<string, string> = {
};

export async function cumeStatsTeamGames(
  client: FetchClient,
  params: CumeStatsTeamGamesParams,
): Promise<CumeStatsTeamGamesResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'TeamID': params.teamID,
    'LeagueID': params.leagueID,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'Location': params.location,
    'Outcome': params.outcome,
    'SeasonID': params.seasonID,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
    'VsTeamID': params.vsTeamID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/cumestatsteamgames', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as CumeStatsTeamGamesResponse;
}
