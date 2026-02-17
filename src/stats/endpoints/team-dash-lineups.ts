import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { TeamDashLineupsParams, TeamDashLineupsResponse } from '../types/team-dash-lineups.js';

const RESULT_SET_MAP: Record<string, string> = {
  'Lineups': 'lineups',
  'Overall': 'overall',
};

export async function teamDashLineups(
  client: FetchClient,
  params: TeamDashLineupsParams,
): Promise<TeamDashLineupsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'TeamID': params.teamID,
    'GroupQuantity': params.groupQuantity,
    'LastNGames': params.lastNGames,
    'MeasureType': params.measureType,
    'Month': params.month,
    'OpponentTeamID': params.opponentTeamID,
    'PaceAdjust': params.paceAdjust,
    'PerMode': params.perMode,
    'Period': params.period,
    'PlusMinus': params.plusMinus,
    'Rank': params.rank,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'GameID': params.gameID,
    'GameSegment': params.gameSegment,
    'LeagueID': params.leagueID,
    'Location': params.location,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'SeasonSegment': params.seasonSegment,
    'ShotClockRange': params.shotClockRange,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/teamdashlineups', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as TeamDashLineupsResponse;
}
