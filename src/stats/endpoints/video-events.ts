import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { VideoEventsParams, VideoEventsResponse } from '../types/video-events.js';

const RESULT_SET_MAP: Record<string, string> = {
};

export async function videoEvents(
  client: FetchClient,
  params: VideoEventsParams,
): Promise<VideoEventsResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'GameID': params.gameID,
    'GameEventID': params.gameEventID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/videoevents', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as VideoEventsResponse;
}
