import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { AssistTrackerParams, AssistTrackerResponse } from '../types/assist-tracker.js';

const RESULT_SET_MAP: Record<string, string> = {
};

export async function assistTracker(
  client: FetchClient,
  params: AssistTrackerParams,
): Promise<AssistTrackerResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'College': params.college,
    'Conference': params.conference,
    'Country': params.country,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'Division': params.division,
    'DraftPick': params.draftPick,
    'DraftYear': params.draftYear,
    'GameScope': params.gameScope,
    'Height': params.height,
    'LastNGames': params.lastNGames,
    'LeagueID': params.leagueID,
    'Location': params.location,
    'Month': params.month,
    'OpponentTeamID': params.opponentTeamID,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'PerMode': params.perMode,
    'PlayerExperience': params.playerExperience,
    'PlayerPosition': params.playerPosition,
    'Season': params.season,
    'SeasonSegment': params.seasonSegment,
    'SeasonType': params.seasonType,
    'StarterBench': params.starterBench,
    'TeamID': params.teamID,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
    'Weight': params.weight,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/assisttracker', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as AssistTrackerResponse;
}
