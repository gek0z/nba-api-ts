import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { ScoreboardV2Params, ScoreboardV2Response } from '../types/scoreboard-v2.js';

const RESULT_SET_MAP: Record<string, string> = {
  'Available': 'available',
  'EastConfStandingsByDay': 'eastConfStandingsByDay',
  'GameHeader': 'gameHeader',
  'LastMeeting': 'lastMeeting',
  'LineScore': 'lineScore',
  'SeriesStandings': 'seriesStandings',
  'TeamLeaders': 'teamLeaders',
  'TicketLinks': 'ticketLinks',
  'WestConfStandingsByDay': 'westConfStandingsByDay',
};

export async function scoreboardV2(
  client: FetchClient,
  params: ScoreboardV2Params,
): Promise<ScoreboardV2Response> {
  const apiParams: Record<string, string | number | undefined> = {
    'DayOffset': params.dayOffset,
    'GameDate': params.gameDate,
    'LeagueID': params.leagueID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/scoreboardv2', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as ScoreboardV2Response;
}
