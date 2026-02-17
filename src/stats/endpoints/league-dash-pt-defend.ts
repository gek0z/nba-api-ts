import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { LeagueDashPtDefendParams, LeagueDashPtDefendResponse } from '../types/league-dash-pt-defend.js';

const RESULT_SET_MAP: Record<string, string> = {
  'LeagueDashPTDefend': 'leagueDashPTDefend',
};

export async function leagueDashPtDefend(
  client: FetchClient,
  params: LeagueDashPtDefendParams,
): Promise<LeagueDashPtDefendResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'DefenseCategory': params.defenseCategory,
    'LeagueID': params.leagueID,
    'PerMode': params.perMode,
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
    'GameSegment': params.gameSegment,
    'Height': params.height,
    'LastNGames': params.lastNGames,
    'Location': params.location,
    'Month': params.month,
    'OpponentTeamID': params.opponentTeamID,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'Period': params.period,
    'PlayerExperience': params.playerExperience,
    'PlayerID': params.playerID,
    'PlayerPosition': params.playerPosition,
    'SeasonSegment': params.seasonSegment,
    'StarterBench': params.starterBench,
    'TeamID': params.teamID,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
    'Weight': params.weight,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/leaguedashptdefend', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as LeagueDashPtDefendResponse;
}
