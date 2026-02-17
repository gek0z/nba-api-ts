import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	PlayerEstimatedMetricsParams,
	PlayerEstimatedMetricsResponse,
} from "../types/player-estimated-metrics.js";

const RESULT_SET_MAP: Record<string, string> = {
	PlayerEstimatedMetrics: "playerEstimatedMetrics",
};

export async function playerEstimatedMetrics(
	client: FetchClient,
	params: PlayerEstimatedMetricsParams,
): Promise<PlayerEstimatedMetricsResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		Season: params.season,
		SeasonType: params.seasonType,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/playerestimatedmetrics",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as PlayerEstimatedMetricsResponse;
}
