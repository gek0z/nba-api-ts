import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { LeagueDashTeamStatsParams, LeagueDashTeamStatsResponse } from '../types/league-dash-team-stats.js';

const RESULT_SET_MAP: Record<string, string> = {
  'LeagueDashTeamStats': 'leagueDashTeamStats',
};

export async function leagueDashTeamStats(
  client: FetchClient,
  params: LeagueDashTeamStatsParams,
): Promise<LeagueDashTeamStatsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
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
    'Conference': params.conference,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'Division': params.division,
    'GameScope': params.gameScope,
    'GameSegment': params.gameSegment,
    'LeagueID': params.leagueID,
    'Location': params.location,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'PlayerExperience': params.playerExperience,
    'PlayerPosition': params.playerPosition,
    'SeasonSegment': params.seasonSegment,
    'ShotClockRange': params.shotClockRange,
    'StarterBench': params.starterBench,
    'TeamID': params.teamID,
    'TwoWay': params.twoWay,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/leaguedashteamstats', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as LeagueDashTeamStatsResponse;
}
