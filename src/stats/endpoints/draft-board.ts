import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	DraftBoardParams,
	DraftBoardResponse,
} from "../types/draft-board.js";

const RESULT_SET_MAP: Record<string, string> = {
	DraftBoard: "draftBoard",
};

export async function draftBoard(
	client: FetchClient,
	params: DraftBoardParams,
): Promise<DraftBoardResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		Season: params.season,
		College: params.college,
		OverallPick: params.overallPick,
		RoundNum: params.roundNum,
		RoundPick: params.roundPick,
		TeamID: params.teamID,
		TopX: params.topX,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/draftboard",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as DraftBoardResponse;
}
