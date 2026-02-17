import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { LeagueDashPtTeamDefendParams, LeagueDashPtTeamDefendResponse } from '../types/league-dash-pt-team-defend.js';

const RESULT_SET_MAP: Record<string, string> = {
  'LeagueDashPtTeamDefend': 'leagueDashPtTeamDefend',
};

export async function leagueDashPtTeamDefend(
  client: FetchClient,
  params: LeagueDashPtTeamDefendParams,
): Promise<LeagueDashPtTeamDefendResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'DefenseCategory': params.defenseCategory,
    'LeagueID': params.leagueID,
    'PerMode': params.perMode,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'Conference': params.conference,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'Division': params.division,
    'GameSegment': params.gameSegment,
    'LastNGames': params.lastNGames,
    'Location': params.location,
    'Month': params.month,
    'OpponentTeamID': params.opponentTeamID,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'Period': params.period,
    'SeasonSegment': params.seasonSegment,
    'TeamID': params.teamID,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/leaguedashptteamdefend', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as LeagueDashPtTeamDefendResponse;
}
