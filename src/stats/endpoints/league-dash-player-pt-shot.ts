import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { LeagueDashPlayerPtShotParams, LeagueDashPlayerPtShotResponse } from '../types/league-dash-player-pt-shot.js';

const RESULT_SET_MAP: Record<string, string> = {
  'LeagueDashPTShots': 'leagueDashPTShots',
};

export async function leagueDashPlayerPtShot(
  client: FetchClient,
  params: LeagueDashPlayerPtShotParams,
): Promise<LeagueDashPlayerPtShotResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'PerMode': params.perMode,
    'Season': params.season,
    'SeasonType': params.seasonType,
    'CloseDefDistRange': params.closeDefDistRange,
    'College': params.college,
    'Conference': params.conference,
    'Country': params.country,
    'DateFrom': params.dateFrom,
    'DateTo': params.dateTo,
    'Division': params.division,
    'DraftPick': params.draftPick,
    'DraftYear': params.draftYear,
    'DribbleRange': params.dribbleRange,
    'GameSegment': params.gameSegment,
    'GeneralRange': params.generalRange,
    'Height': params.height,
    'LastNGames': params.lastNGames,
    'Location': params.location,
    'Month': params.month,
    'OpponentTeamID': params.opponentTeamID,
    'Outcome': params.outcome,
    'PORound': params.pORound,
    'Period': params.period,
    'PlayerExperience': params.playerExperience,
    'PlayerPosition': params.playerPosition,
    'SeasonSegment': params.seasonSegment,
    'ShotClockRange': params.shotClockRange,
    'ShotDistRange': params.shotDistRange,
    'StarterBench': params.starterBench,
    'TeamID': params.teamID,
    'TouchTimeRange': params.touchTimeRange,
    'VsConference': params.vsConference,
    'VsDivision': params.vsDivision,
    'Weight': params.weight,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/leaguedashplayerptshot', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as LeagueDashPlayerPtShotResponse;
}
