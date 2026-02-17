import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	VideoStatusParams,
	VideoStatusResponse,
} from "../types/video-status.js";

const RESULT_SET_MAP: Record<string, string> = {
	VideoStatus: "videoStatus",
};

export async function videoStatus(
	client: FetchClient,
	params: VideoStatusParams,
): Promise<VideoStatusResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		GameDate: params.gameDate,
		LeagueID: params.leagueID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/videostatus",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as VideoStatusResponse;
}
