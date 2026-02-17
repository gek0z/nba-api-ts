import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { LeagueDashPtStatsParams, LeagueDashPtStatsResponse } from '../types/league-dash-pt-stats.js';

const RESULT_SET_MAP: Record<string, string> = {
  'LeagueDashPtStats': 'leagueDashPtStats',
};

export async function leagueDashPtStats(
  client: FetchClient,
  params: LeagueDashPtStatsParams,
): Promise<LeagueDashPtStatsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LastNGames': params.lastNGames,
    'Month': params.month,
    'OpponentTeamID': params.opponentTeamID,
    'PerMode': params.perMode,
    'PlayerOrTeam': params.playerOrTeam,
    'PtMeasureType': params.ptMeasureType,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'College': params.college,
    'Conference': params.conference,
    'Country': params.country,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'Division': params.division,
    'DraftPick': params.draftPick,
    'DraftYear': params.draftYear,
    'GameScope': params.gameScope,
    'Height': params.height,
    'LeagueID': params.leagueID,
    'Location': params.location,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'PlayerExperience': params.playerExperience,
    'PlayerPosition': params.playerPosition,
    'SeasonSegment': params.seasonSegment,
    'StarterBench': params.starterBench,
    'TeamID': params.teamID,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
    'Weight': params.weight,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/leaguedashptstats', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as LeagueDashPtStatsResponse;
}
