import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { ShotChartLeagueWideParams, ShotChartLeagueWideResponse } from '../types/shot-chart-league-wide.js';

const RESULT_SET_MAP: Record<string, string> = {
  'League_Wide': 'league_Wide',
};

export async function shotChartLeagueWide(
  client: FetchClient,
  params: ShotChartLeagueWideParams,
): Promise<ShotChartLeagueWideResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'Season': params.season,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/shotchartleaguewide', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as ShotChartLeagueWideResponse;
}
