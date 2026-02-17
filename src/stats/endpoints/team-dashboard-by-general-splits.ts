import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	TeamDashboardByGeneralSplitsParams,
	TeamDashboardByGeneralSplitsResponse,
} from "../types/team-dashboard-by-general-splits.js";

const RESULT_SET_MAP: Record<string, string> = {
	DaysRestTeamDashboard: "daysRestTeamDashboard",
	LocationTeamDashboard: "locationTeamDashboard",
	MonthTeamDashboard: "monthTeamDashboard",
	OverallTeamDashboard: "overallTeamDashboard",
	PrePostAllStarTeamDashboard: "prePostAllStarTeamDashboard",
	WinsLossesTeamDashboard: "winsLossesTeamDashboard",
};

export async function teamDashboardByGeneralSplits(
	client: FetchClient,
	params: TeamDashboardByGeneralSplitsParams,
): Promise<TeamDashboardByGeneralSplitsResponse> {
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
		PORound: params.pORound,
		SeasonSegment: params.seasonSegment,
		ShotClockRange: params.shotClockRange,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/teamdashboardbygeneralsplits",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as TeamDashboardByGeneralSplitsResponse;
}
