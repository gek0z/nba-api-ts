import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { LeagueDashPlayerStatsParams, LeagueDashPlayerStatsResponse } from '../types/league-dash-player-stats.js';

const RESULT_SET_MAP: Record<string, string> = {
  'LeagueDashPlayerStats': 'leagueDashPlayerStats',
};

export async function leagueDashPlayerStats(
  client: FetchClient,
  params: LeagueDashPlayerStatsParams,
): Promise<LeagueDashPlayerStatsResponse> {
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
    'College': params.college,
    'Conference': params.conference,
    'Country': params.country,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'Division': params.division,
    'DraftPick': params.draftPick,
    'DraftYear': params.draftYear,
    'GameScope': params.gameScope,
    'GameSegment': params.gameSegment,
    'Height': params.height,
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
    'Weight': params.weight,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/leaguedashplayerstats', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as LeagueDashPlayerStatsResponse;
}
