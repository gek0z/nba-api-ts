import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerDashboardByLastNGamesParams, PlayerDashboardByLastNGamesResponse } from '../types/player-dashboard-by-last-n-games.js';

const RESULT_SET_MAP: Record<string, string> = {
  'GameNumberPlayerDashboard': 'gameNumberPlayerDashboard',
  'Last10PlayerDashboard': 'last10PlayerDashboard',
  'Last15PlayerDashboard': 'last15PlayerDashboard',
  'Last20PlayerDashboard': 'last20PlayerDashboard',
  'Last5PlayerDashboard': 'last5PlayerDashboard',
  'OverallPlayerDashboard': 'overallPlayerDashboard',
};

export async function playerDashboardByLastNGames(
  client: FetchClient,
  params: PlayerDashboardByLastNGamesParams,
): Promise<PlayerDashboardByLastNGamesResponse> {
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

  const raw = await client.get<RawNBAStatsResponse>('/stats/playerdashboardbylastngames', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerDashboardByLastNGamesResponse;
}
