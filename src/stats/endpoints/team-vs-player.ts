import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	TeamVsPlayerParams,
	TeamVsPlayerResponse,
} from "../types/team-vs-player.js";

const RESULT_SET_MAP: Record<string, string> = {
	OnOffCourt: "onOffCourt",
	Overall: "overall",
	ShotAreaOffCourt: "shotAreaOffCourt",
	ShotAreaOnCourt: "shotAreaOnCourt",
	ShotAreaOverall: "shotAreaOverall",
	ShotDistanceOffCourt: "shotDistanceOffCourt",
	ShotDistanceOnCourt: "shotDistanceOnCourt",
	ShotDistanceOverall: "shotDistanceOverall",
	vsPlayerOverall: "vsPlayerOverall",
};

export async function teamVsPlayer(
	client: FetchClient,
	params: TeamVsPlayerParams,
): Promise<TeamVsPlayerResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		VsPlayerID: params.vsPlayerID,
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
		PlayerID: params.playerID,
		SeasonSegment: params.seasonSegment,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/teamvsplayer",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as TeamVsPlayerResponse;
}
