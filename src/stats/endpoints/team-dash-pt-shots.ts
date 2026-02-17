import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { TeamDashPtShotsParams, TeamDashPtShotsResponse } from '../types/team-dash-pt-shots.js';

const RESULT_SET_MAP: Record<string, string> = {
  'ClosestDefender10ftPlusShooting': 'closestDefender10ftPlusShooting',
  'ClosestDefenderShooting': 'closestDefenderShooting',
  'DribbleShooting': 'dribbleShooting',
  'GeneralShooting': 'generalShooting',
  'ShotClockShooting': 'shotClockShooting',
  'TouchTimeShooting': 'touchTimeShooting',
};

export async function teamDashPtShots(
  client: FetchClient,
  params: TeamDashPtShotsParams,
): Promise<TeamDashPtShotsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'TeamID': params.teamID,
    'LastNGames': params.lastNGames,
    'LeagueID': params.leagueID,
    'Month': params.month,
    'OpponentTeamID': params.opponentTeamID,
    'PerMode': params.perMode,
    'Period': params.period,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'GameSegment': params.gameSegment,
    'Location': params.location,
    'Outcome': params.outcome,
    'SeasonSegment': params.seasonSegment,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/teamdashptshots', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as TeamDashPtShotsResponse;
}
