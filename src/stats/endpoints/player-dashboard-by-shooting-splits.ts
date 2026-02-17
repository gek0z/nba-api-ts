import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerDashboardByShootingSplitsParams, PlayerDashboardByShootingSplitsResponse } from '../types/player-dashboard-by-shooting-splits.js';

const RESULT_SET_MAP: Record<string, string> = {
  'AssistedBy': 'assistedBy',
  'AssitedShotPlayerDashboard': 'assitedShotPlayerDashboard',
  'OverallPlayerDashboard': 'overallPlayerDashboard',
  'Shot5FTPlayerDashboard': 'shot5FTPlayerDashboard',
  'Shot8FTPlayerDashboard': 'shot8FTPlayerDashboard',
  'ShotAreaPlayerDashboard': 'shotAreaPlayerDashboard',
  'ShotTypePlayerDashboard': 'shotTypePlayerDashboard',
  'ShotTypeSummaryPlayerDashboard': 'shotTypeSummaryPlayerDashboard',
};

export async function playerDashboardByShootingSplits(
  client: FetchClient,
  params: PlayerDashboardByShootingSplitsParams,
): Promise<PlayerDashboardByShootingSplitsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'PlayerID': params.playerID,
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

  const raw = await client.get<RawNBAStatsResponse>('/stats/playerdashboardbyshootingsplits', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerDashboardByShootingSplitsResponse;
}
