import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerDashPtShotDefendParams, PlayerDashPtShotDefendResponse } from '../types/player-dash-pt-shot-defend.js';

const RESULT_SET_MAP: Record<string, string> = {
  'DefendingShots': 'defendingShots',
};

export async function playerDashPtShotDefend(
  client: FetchClient,
  params: PlayerDashPtShotDefendParams,
): Promise<PlayerDashPtShotDefendResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'TeamID': params.teamID,
    'PlayerID': params.playerID,
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

  const raw = await client.get<RawNBAStatsResponse>('/stats/playerdashptshotdefend', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerDashPtShotDefendResponse;
}
