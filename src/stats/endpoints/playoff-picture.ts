import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { PlayoffPictureParams, PlayoffPictureResponse } from '../types/playoff-picture.js';

const RESULT_SET_MAP: Record<string, string> = {
  'EastConfPlayoffPicture': 'eastConfPlayoffPicture',
  'EastConfRemainingGames': 'eastConfRemainingGames',
  'EastConfStandings': 'eastConfStandings',
  'WestConfPlayoffPicture': 'westConfPlayoffPicture',
  'WestConfRemainingGames': 'westConfRemainingGames',
  'WestConfStandings': 'westConfStandings',
};

export async function playoffPicture(
  client: FetchClient,
  params: PlayoffPictureParams,
): Promise<PlayoffPictureResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'LeagueID': params.leagueID,
    'SeasonID': params.seasonID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/playoffpicture', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as PlayoffPictureResponse;
}
