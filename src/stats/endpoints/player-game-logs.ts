import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerGameLogsParams, PlayerGameLogsResponse } from '../types/player-game-logs.js';

const RESULT_SET_MAP: Record<string, string> = {
  'PlayerGameLogs': 'playerGameLogs',
};

export async function playerGameLogs(
  client: FetchClient,
  params: PlayerGameLogsParams,
): Promise<PlayerGameLogsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'GameSegment': params.gameSegment,
    'LastNGames': params.lastNGames,
    'LeagueID': params.leagueID,
    'Location': params.location,
    'MeasureType': params.measureType,
    'Month': params.month,
    'OpponentTeamID': params.opponentTeamID,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'PerMode': params.perMode,
    'Period': params.period,
    'PlayerID': params.playerID,
    'Season': params.season,
    'SeasonSegment': params.seasonSegment,
    'SeasonType': params.seasonType,
    'ShotClockRange': params.shotClockRange,
    'TeamID': params.teamID,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playergamelogs', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerGameLogsResponse;
}
