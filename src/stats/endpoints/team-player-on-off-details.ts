import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	TeamPlayerOnOffDetailsParams,
	TeamPlayerOnOffDetailsResponse,
} from "../types/team-player-on-off-details.js";

const RESULT_SET_MAP: Record<string, string> = {
	OverallTeamPlayerOnOffDetails: "overallTeamPlayerOnOffDetails",
	PlayersOffCourtTeamPlayerOnOffDetails:
		"playersOffCourtTeamPlayerOnOffDetails",
	PlayersOnCourtTeamPlayerOnOffDetails: "playersOnCourtTeamPlayerOnOffDetails",
};

export async function teamPlayerOnOffDetails(
	client: FetchClient,
	params: TeamPlayerOnOffDetailsParams,
): Promise<TeamPlayerOnOffDetailsResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		TeamID: params.teamID,
		LastNGames: params.lastNGames,
		MeasureType: params.measureType,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		PaceAdjust: params.paceAdjust,
		PerMode: params.perMode,
		Period: params.period,
		PlusMinus: params.plusMinus,
		Rank: params.rank,
		Season: params.season,
		SeasonType: params.seasonType,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		GameSegment: params.gameSegment,
		LeagueID: params.leagueID,
		Location: params.location,
		Outcome: params.outcome,
		SeasonSegment: params.seasonSegment,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/teamplayeronoffdetails",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as TeamPlayerOnOffDetailsResponse;
}
