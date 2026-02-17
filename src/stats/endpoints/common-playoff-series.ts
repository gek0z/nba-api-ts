import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	CommonPlayoffSeriesParams,
	CommonPlayoffSeriesResponse,
} from "../types/common-playoff-series.js";

const RESULT_SET_MAP: Record<string, string> = {
	PlayoffSeries: "playoffSeries",
};

export async function commonPlayoffSeries(
	client: FetchClient,
	params: CommonPlayoffSeriesParams,
): Promise<CommonPlayoffSeriesResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		Season: params.season,
		SeriesID: params.seriesID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/commonplayoffseries",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as CommonPlayoffSeriesResponse;
}
