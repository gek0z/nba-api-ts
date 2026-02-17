import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	LeagueDashOppPtShotParams,
	LeagueDashOppPtShotResponse,
} from "../types/league-dash-opp-pt-shot.js";

const RESULT_SET_MAP: Record<string, string> = {
	LeagueDashPTShots: "leagueDashPTShots",
};

export async function leagueDashOppPtShot(
	client: FetchClient,
	params: LeagueDashOppPtShotParams,
): Promise<LeagueDashOppPtShotResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		PerMode: params.perMode,
		Season: params.season,
		SeasonType: params.seasonType,
		CloseDefDistRange: params.closeDefDistRange,
		Conference: params.conference,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		Division: params.division,
		DribbleRange: params.dribbleRange,
		GameSegment: params.gameSegment,
		GeneralRange: params.generalRange,
		LastNGames: params.lastNGames,
		Location: params.location,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		Outcome: params.outcome,
		PORound: params.pORound,
		Period: params.period,
		SeasonSegment: params.seasonSegment,
		ShotClockRange: params.shotClockRange,
		ShotDistRange: params.shotDistRange,
		TeamID: params.teamID,
		TouchTimeRange: params.touchTimeRange,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/leaguedashoppptshot",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as LeagueDashOppPtShotResponse;
}
