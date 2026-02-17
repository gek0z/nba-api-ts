import type { FetchClient } from '../../http/fetch-client.js';
import type { ISTStandingsParams, ISTStandingsResponse } from '../types/ist-standings.js';

export async function iSTStandings(
  client: FetchClient,
  params: ISTStandingsParams,
): Promise<ISTStandingsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'Season': params.season,
    'Section': params.section,
  };

  return client.get<ISTStandingsResponse>('/stats/iststandings', apiParams);
}
