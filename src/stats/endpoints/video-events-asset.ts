import type { FetchClient } from '../../http/fetch-client.js';
import type { RawNBAStatsResponse } from '../../response/types.js';
import { parseStatsResponse } from '../../response/parser.js';
import type { VideoEventsAssetParams, VideoEventsAssetResponse } from '../types/video-events-asset.js';

const RESULT_SET_MAP: Record<string, string> = {
};

export async function videoEventsAsset(
  client: FetchClient,
  params: VideoEventsAssetParams,
): Promise<VideoEventsAssetResponse> {
  const apiParams: Record<string, string | number | undefined> = {
    'GameID': params.gameID,
    'GameEventID': params.gameEventID,
  };

  const raw = await client.get<RawNBAStatsResponse>('/stats/videoeventsasset', apiParams);
  return parseStatsResponse(raw, RESULT_SET_MAP) as unknown as VideoEventsAssetResponse;
}
