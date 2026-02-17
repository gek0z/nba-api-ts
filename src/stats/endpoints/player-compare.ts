import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayerCompareParams, PlayerCompareResponse } from '../types/player-compare.js';

const RESULT_SET_MAP: Record<string, string> = {
  'Individual': 'individual',
  'OverallCompare': 'overallCompare',
};

export async function playerCompare(
  client: FetchClient,
  params: PlayerCompareParams,
): Promise<PlayerCompareResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'VsPlayerIDList': params.vsPlayerIDList,
    'PlayerIDList': params.playerIDList,
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
    'GameSegment': params.gameSegment,
    'LeagueID': params.leagueID,
    'Location': params.location,
    'Outcome': params.outcome,
    'SeasonSegment': params.seasonSegment,
    'ShotClockRange': params.shotClockRange,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playercompare', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayerCompareResponse;
}
