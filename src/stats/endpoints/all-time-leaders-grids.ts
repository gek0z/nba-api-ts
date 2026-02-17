import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { AllTimeLeadersGridsParams, AllTimeLeadersGridsResponse } from '../types/all-time-leaders-grids.js';

const RESULT_SET_MAP: Record<string, string> = {
  'ASTLeaders': 'aSTLeaders',
  'BLKLeaders': 'bLKLeaders',
  'DREBLeaders': 'dREBLeaders',
  'FG3ALeaders': 'fG3ALeaders',
  'FG3MLeaders': 'fG3MLeaders',
  'FG3_PCTLeaders': 'fG3_PCTLeaders',
  'FGALeaders': 'fGALeaders',
  'FGMLeaders': 'fGMLeaders',
  'FG_PCTLeaders': 'fG_PCTLeaders',
  'FTALeaders': 'fTALeaders',
  'FTMLeaders': 'fTMLeaders',
  'FT_PCTLeaders': 'fT_PCTLeaders',
  'GPLeaders': 'gPLeaders',
  'OREBLeaders': 'oREBLeaders',
  'PFLeaders': 'pFLeaders',
  'PTSLeaders': 'pTSLeaders',
  'REBLeaders': 'rEBLeaders',
  'STLLeaders': 'sTLLeaders',
  'TOVLeaders': 'tOVLeaders',
};

export async function allTimeLeadersGrids(
  client: FetchClient,
  params: AllTimeLeadersGridsParams,
): Promise<AllTimeLeadersGridsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'PerMode': params.perMode,
    'SeasonType': params.seasonType,
    'TopX': params.topX,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/alltimeleadersgrids', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as AllTimeLeadersGridsResponse;
}
