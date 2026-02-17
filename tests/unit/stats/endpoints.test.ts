/**
 * Comprehensive fixture-based tests for all stats endpoints.
 * Each test loads a real API response fixture and verifies parsing.
 */
import { afterEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { NBAClient } from "../../../src/index.js";

const FIXTURES_DIR = join(import.meta.dir, "../../fixtures");

const originalFetch = globalThis.fetch;

afterEach(() => {
	globalThis.fetch = originalFetch;
});

function mockFetch(fixture: string) {
	const path = join(FIXTURES_DIR, `${fixture}.json`);
	if (!existsSync(path)) throw new Error(`Fixture not found: ${path}`);
	const data = readFileSync(path, "utf-8");
	globalThis.fetch = async () => new Response(data, { status: 200 });
}

function createClient() {
	return new NBAClient({
		stats: { rateLimit: 0, maxRetries: 0, timeout: 5000 },
	});
}

// ── V2 Standard Endpoints (resultSets array) ──

describe("Player Endpoints", () => {
	test("playerCareerStats", async () => {
		mockFetch("playerCareerStats");
		const nba = createClient();
		const res = await nba.stats.playerCareerStats({ playerID: 203999 });
		expect(res.careerTotalsRegularSeason).toBeArray();
		expect(res.seasonTotalsRegularSeason).toBeArray();
		expect(res.careerTotalsRegularSeason.length).toBeGreaterThan(0);
		const career = res.careerTotalsRegularSeason[0];
		expect(career.playerId).toBe(203999);
		expect(career.pts).toBeNumber();
	});

	test("commonPlayerInfo", async () => {
		mockFetch("commonPlayerInfo");
		const nba = createClient();
		const res = await nba.stats.commonPlayerInfo({ playerID: 203999 });
		expect(res.commonPlayerInfo).toBeArray();
		expect(res.commonPlayerInfo[0].personId).toBe(203999);
	});

	test("playerAwards", async () => {
		mockFetch("playerAwards");
		const nba = createClient();
		const res = await nba.stats.playerAwards({ playerID: 203999 });
		expect(res.playerAwards).toBeArray();
	});

	test("playerGameLog", async () => {
		mockFetch("playerGameLog");
		const nba = createClient();
		const res = await nba.stats.playerGameLog({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res.playerGameLog).toBeArray();
		expect(res.playerGameLog.length).toBeGreaterThan(0);
	});

	test("playerGameLogs", async () => {
		mockFetch("playerGameLogs");
		const nba = createClient();
		const res = await nba.stats.playerGameLogs({ season: "2024-25" });
		expect(res.playerGameLogs).toBeArray();
	});

	test("playerIndex", async () => {
		mockFetch("playerIndex");
		const nba = createClient();
		const res = await nba.stats.playerIndex({ season: "2024-25" });
		expect(res.playerIndex).toBeArray();
		expect(res.playerIndex.length).toBeGreaterThan(0);
	});

	test("playerProfileV2", async () => {
		mockFetch("playerProfileV2");
		const nba = createClient();
		const res = await nba.stats.playerProfileV2({ playerID: 203999 });
		expect(res).toBeDefined();
	});

	test("playerNextNGames", async () => {
		mockFetch("playerNextNGames");
		const nba = createClient();
		const res = await nba.stats.playerNextNGames({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("playerGameStreakFinder", async () => {
		mockFetch("playerGameStreakFinder");
		const nba = createClient();
		const res = await nba.stats.playerGameStreakFinder({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("playerEstimatedMetrics", async () => {
		mockFetch("playerEstimatedMetrics");
		const nba = createClient();
		const res = await nba.stats.playerEstimatedMetrics({ season: "2024-25" });
		expect(res.playerEstimatedMetrics).toBeArray();
	});

	test("playerFantasyProfileBarGraph", async () => {
		mockFetch("playerFantasyProfileBarGraph");
		const nba = createClient();
		const res = await nba.stats.playerFantasyProfileBarGraph({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("playerCompare", async () => {
		mockFetch("playerCompare");
		const nba = createClient();
		const res = await nba.stats.playerCompare({
			playerIDList: "203999",
			vsPlayerIDList: "2544",
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("playerVsPlayer", async () => {
		mockFetch("playerVsPlayer");
		const nba = createClient();
		const res = await nba.stats.playerVsPlayer({
			playerID: 203999,
			vsPlayerID: 2544,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("playerCareerByCollegeRollup", async () => {
		mockFetch("playerCareerByCollegeRollup");
		const nba = createClient();
		const res = await nba.stats.playerCareerByCollegeRollup({});
		expect(res).toBeDefined();
	});
});

describe("Player Dashboard Endpoints", () => {
	test("playerDashboardByGeneralSplits", async () => {
		mockFetch("playerDashboardByGeneralSplits");
		const nba = createClient();
		const res = await nba.stats.playerDashboardByGeneralSplits({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res.overallPlayerDashboard).toBeArray();
	});

	test("playerDashboardByClutch", async () => {
		mockFetch("playerDashboardByClutch");
		const nba = createClient();
		const res = await nba.stats.playerDashboardByClutch({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res.overallPlayerDashboard).toBeArray();
	});

	test("playerDashboardByGameSplits", async () => {
		mockFetch("playerDashboardByGameSplits");
		const nba = createClient();
		const res = await nba.stats.playerDashboardByGameSplits({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res.overallPlayerDashboard).toBeArray();
	});

	test("playerDashboardByLastNGames", async () => {
		mockFetch("playerDashboardByLastNGames");
		const nba = createClient();
		const res = await nba.stats.playerDashboardByLastNGames({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res.overallPlayerDashboard).toBeArray();
	});

	test("playerDashboardByShootingSplits", async () => {
		mockFetch("playerDashboardByShootingSplits");
		const nba = createClient();
		const res = await nba.stats.playerDashboardByShootingSplits({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res.overallPlayerDashboard).toBeArray();
	});

	test("playerDashboardByTeamPerformance", async () => {
		mockFetch("playerDashboardByTeamPerformance");
		const nba = createClient();
		const res = await nba.stats.playerDashboardByTeamPerformance({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res.overallPlayerDashboard).toBeArray();
	});

	test("playerDashboardByYearOverYear", async () => {
		mockFetch("playerDashboardByYearOverYear");
		const nba = createClient();
		const res = await nba.stats.playerDashboardByYearOverYear({
			playerID: 203999,
		});
		expect(res.overallPlayerDashboard).toBeArray();
	});
});

describe("Player Tracking Endpoints", () => {
	test("playerDashPtPass", async () => {
		mockFetch("playerDashPtPass");
		const nba = createClient();
		const res = await nba.stats.playerDashPtPass({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("playerDashPtReb", async () => {
		mockFetch("playerDashPtReb");
		const nba = createClient();
		const res = await nba.stats.playerDashPtReb({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("playerDashPtShots", async () => {
		mockFetch("playerDashPtShots");
		const nba = createClient();
		const res = await nba.stats.playerDashPtShots({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("playerDashPtShotDefend", async () => {
		mockFetch("playerDashPtShotDefend");
		const nba = createClient();
		const res = await nba.stats.playerDashPtShotDefend({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});
});

describe("Common Endpoints", () => {
	test("commonAllPlayers", async () => {
		mockFetch("commonAllPlayers");
		const nba = createClient();
		const res = await nba.stats.commonAllPlayers({
			leagueID: "00",
			season: "2024-25",
			isOnlyCurrentSeason: 1,
		});
		expect(res.commonAllPlayers).toBeArray();
		expect(res.commonAllPlayers.length).toBeGreaterThan(0);
	});

	test("commonTeamRoster", async () => {
		mockFetch("commonTeamRoster");
		const nba = createClient();
		const res = await nba.stats.commonTeamRoster({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res.commonTeamRoster).toBeArray();
		expect(res.commonTeamRoster.length).toBeGreaterThan(0);
	});

	test("commonTeamYears", async () => {
		mockFetch("commonTeamYears");
		const nba = createClient();
		const res = await nba.stats.commonTeamYears({ leagueID: "00" });
		expect(res.teamYears).toBeArray();
	});

	test("commonPlayoffSeries", async () => {
		mockFetch("commonPlayoffSeries");
		const nba = createClient();
		const res = await nba.stats.commonPlayoffSeries({
			leagueID: "00",
			season: "2023-24",
		});
		expect(res).toBeDefined();
	});
});

describe("Team Endpoints", () => {
	test("teamInfoCommon", async () => {
		mockFetch("teamInfoCommon");
		const nba = createClient();
		const res = await nba.stats.teamInfoCommon({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res.teamInfoCommon).toBeArray();
		expect(res.teamInfoCommon[0].teamId).toBe(1610612743);
	});

	test("teamDetails", async () => {
		mockFetch("teamDetails");
		const nba = createClient();
		const res = await nba.stats.teamDetails({ teamID: 1610612743 });
		expect(res.teamBackground).toBeArray();
	});

	test("teamGameLog", async () => {
		mockFetch("teamGameLog");
		const nba = createClient();
		const res = await nba.stats.teamGameLog({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res.teamGameLog).toBeArray();
		expect(res.teamGameLog.length).toBeGreaterThan(0);
	});

	test("teamGameLogs", async () => {
		mockFetch("teamGameLogs");
		const nba = createClient();
		const res = await nba.stats.teamGameLogs({ season: "2024-25" });
		expect(res.teamGameLogs).toBeArray();
	});

	test("teamYearByYearStats", async () => {
		mockFetch("teamYearByYearStats");
		const nba = createClient();
		const res = await nba.stats.teamYearByYearStats({ teamID: 1610612743 });
		expect(res.teamStats).toBeArray();
	});

	test("teamPlayerDashboard", async () => {
		mockFetch("teamPlayerDashboard");
		const nba = createClient();
		const res = await nba.stats.teamPlayerDashboard({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("teamPlayerOnOffSummary", async () => {
		mockFetch("teamPlayerOnOffSummary");
		const nba = createClient();
		const res = await nba.stats.teamPlayerOnOffSummary({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("teamPlayerOnOffDetails", async () => {
		mockFetch("teamPlayerOnOffDetails");
		const nba = createClient();
		const res = await nba.stats.teamPlayerOnOffDetails({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("teamEstimatedMetrics", async () => {
		mockFetch("teamEstimatedMetrics");
		const nba = createClient();
		const res = await nba.stats.teamEstimatedMetrics({ season: "2024-25" });
		expect(res.teamEstimatedMetrics).toBeArray();
	});

	test("teamDashboardByGeneralSplits", async () => {
		mockFetch("teamDashboardByGeneralSplits");
		const nba = createClient();
		const res = await nba.stats.teamDashboardByGeneralSplits({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res.overallTeamDashboard).toBeArray();
	});

	test("teamDashboardByShootingSplits", async () => {
		mockFetch("teamDashboardByShootingSplits");
		const nba = createClient();
		const res = await nba.stats.teamDashboardByShootingSplits({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res.overallTeamDashboard).toBeArray();
	});

	test("teamDashLineups", async () => {
		mockFetch("teamDashLineups");
		const nba = createClient();
		const res = await nba.stats.teamDashLineups({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res.lineups).toBeArray();
	});

	test("teamDashPtPass", async () => {
		mockFetch("teamDashPtPass");
		const nba = createClient();
		const res = await nba.stats.teamDashPtPass({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("teamDashPtReb", async () => {
		mockFetch("teamDashPtReb");
		const nba = createClient();
		const res = await nba.stats.teamDashPtReb({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("teamDashPtShots", async () => {
		mockFetch("teamDashPtShots");
		const nba = createClient();
		const res = await nba.stats.teamDashPtShots({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});
});

describe("League Endpoints", () => {
	test("leagueDashPlayerStats", async () => {
		mockFetch("leagueDashPlayerStats");
		const nba = createClient();
		const res = await nba.stats.leagueDashPlayerStats({ season: "2024-25" });
		expect(res.leagueDashPlayerStats).toBeArray();
		expect(res.leagueDashPlayerStats.length).toBeGreaterThan(0);
		expect(res.leagueDashPlayerStats[0].playerName).toBeString();
	});

	test("leagueDashTeamStats", async () => {
		mockFetch("leagueDashTeamStats");
		const nba = createClient();
		const res = await nba.stats.leagueDashTeamStats({ season: "2024-25" });
		expect(res.leagueDashTeamStats).toBeArray();
		expect(res.leagueDashTeamStats.length).toBeGreaterThan(0);
	});

	test("leagueDashPlayerClutch", async () => {
		mockFetch("leagueDashPlayerClutch");
		const nba = createClient();
		const res = await nba.stats.leagueDashPlayerClutch({ season: "2024-25" });
		expect(res.leagueDashPlayerClutch).toBeArray();
	});

	test("leagueDashTeamClutch", async () => {
		mockFetch("leagueDashTeamClutch");
		const nba = createClient();
		const res = await nba.stats.leagueDashTeamClutch({ season: "2024-25" });
		expect(res.leagueDashTeamClutch).toBeArray();
	});

	test("leagueDashPlayerBioStats", async () => {
		mockFetch("leagueDashPlayerBioStats");
		const nba = createClient();
		const res = await nba.stats.leagueDashPlayerBioStats({ season: "2024-25" });
		expect(res.leagueDashPlayerBioStats).toBeArray();
	});

	test("leagueDashLineups", async () => {
		mockFetch("leagueDashLineups");
		const nba = createClient();
		const res = await nba.stats.leagueDashLineups({ season: "2024-25" });
		expect(res.lineups).toBeArray();
	});

	test("leagueDashPlayerShotLocations", async () => {
		mockFetch("leagueDashPlayerShotLocations");
		const nba = createClient();
		const res = await nba.stats.leagueDashPlayerShotLocations({
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("leagueDashTeamShotLocations", async () => {
		mockFetch("leagueDashTeamShotLocations");
		const nba = createClient();
		const res = await nba.stats.leagueDashTeamShotLocations({
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("leagueDashPlayerPtShot", async () => {
		mockFetch("leagueDashPlayerPtShot");
		const nba = createClient();
		const res = await nba.stats.leagueDashPlayerPtShot({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leagueDashTeamPtShot", async () => {
		mockFetch("leagueDashTeamPtShot");
		const nba = createClient();
		const res = await nba.stats.leagueDashTeamPtShot({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leagueDashOppPtShot", async () => {
		mockFetch("leagueDashOppPtShot");
		const nba = createClient();
		const res = await nba.stats.leagueDashOppPtShot({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leagueDashPtDefend", async () => {
		mockFetch("leagueDashPtDefend");
		const nba = createClient();
		const res = await nba.stats.leagueDashPtDefend({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leagueDashPtStats", async () => {
		mockFetch("leagueDashPtStats");
		const nba = createClient();
		const res = await nba.stats.leagueDashPtStats({
			season: "2024-25",
			ptMeasureType: "SpeedDistance",
		});
		expect(res).toBeDefined();
	});

	test("leagueDashPtTeamDefend", async () => {
		mockFetch("leagueDashPtTeamDefend");
		const nba = createClient();
		const res = await nba.stats.leagueDashPtTeamDefend({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leagueGameFinder", async () => {
		mockFetch("leagueGameFinder");
		const nba = createClient();
		const res = await nba.stats.leagueGameFinder({
			playerOrTeamAbbreviation: "T",
			season: "2024-25",
		});
		expect(res.leagueGameFinderResults).toBeArray();
	});

	test("leagueGameLog", async () => {
		mockFetch("leagueGameLog");
		const nba = createClient();
		const res = await nba.stats.leagueGameLog({ season: "2024-25" });
		expect(res.leagueGameLog).toBeArray();
	});

	test("leagueLeaders", async () => {
		mockFetch("leagueLeaders");
		const nba = createClient();
		const res = await nba.stats.leagueLeaders({
			season: "2024-25",
			statCategory: "PTS",
		});
		expect(res.leagueLeaders).toBeArray();
		expect(res.leagueLeaders.length).toBeGreaterThan(0);
		expect(res.leagueLeaders[0].player).toBeString();
	});

	test("leagueStandings", async () => {
		mockFetch("leagueStandings");
		const nba = createClient();
		const res = await nba.stats.leagueStandings({ season: "2024-25" });
		expect(res.standings).toBeArray();
		expect(res.standings.length).toBeGreaterThan(0);
	});

	test("leagueStandingsV3", async () => {
		mockFetch("leagueStandingsV3");
		const nba = createClient();
		const res = await nba.stats.leagueStandingsV3({
			season: "2024-25",
			leagueID: "00",
		});
		expect(res.standings).toBeArray();
	});

	test("leagueHustleStatsPlayer", async () => {
		mockFetch("leagueHustleStatsPlayer");
		const nba = createClient();
		const res = await nba.stats.leagueHustleStatsPlayer({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leagueHustleStatsTeam", async () => {
		mockFetch("leagueHustleStatsTeam");
		const nba = createClient();
		const res = await nba.stats.leagueHustleStatsTeam({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leagueLineupViz", async () => {
		mockFetch("leagueLineupViz");
		const nba = createClient();
		const res = await nba.stats.leagueLineupViz({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leaguePlayerOnDetails", async () => {
		mockFetch("leaguePlayerOnDetails");
		const nba = createClient();
		const res = await nba.stats.leaguePlayerOnDetails({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leagueSeasonMatchups", async () => {
		mockFetch("leagueSeasonMatchups");
		const nba = createClient();
		const res = await nba.stats.leagueSeasonMatchups({ season: "2024-25" });
		expect(res).toBeDefined();
	});
});

describe("Box Score V2 Endpoints", () => {
	test("boxScoreTraditionalV2", async () => {
		mockFetch("boxScoreTraditionalV2");
		const nba = createClient();
		const res = await nba.stats.boxScoreTraditionalV2({ gameID: "0022400561" });
		expect(res.playerStats).toBeArray();
		expect(res.teamStats).toBeArray();
		expect(res.playerStats.length).toBeGreaterThan(0);
	});

	test("boxScoreSummaryV2", async () => {
		mockFetch("boxScoreSummaryV2");
		const nba = createClient();
		const res = await nba.stats.boxScoreSummaryV2({ gameID: "0022400561" });
		expect(res.gameInfo).toBeArray();
	});

	test("boxScoreDefensiveV2", async () => {
		mockFetch("boxScoreDefensiveV2");
		const nba = createClient();
		const res = await nba.stats.boxScoreDefensiveV2({ gameID: "0022400561" });
		expect(res).toBeDefined();
	});

	test("boxScoreHustleV2", async () => {
		mockFetch("boxScoreHustleV2");
		const nba = createClient();
		const res = await nba.stats.boxScoreHustleV2({ gameID: "0022400561" });
		expect(res).toBeDefined();
	});

	test("hustleStatsBoxScore", async () => {
		mockFetch("hustleStatsBoxScore");
		const nba = createClient();
		const res = await nba.stats.hustleStatsBoxScore({ gameID: "0022400561" });
		expect(res).toBeDefined();
	});
});

describe("Box Score V3 Endpoints", () => {
	test("boxScoreTraditionalV3", async () => {
		mockFetch("boxScoreTraditionalV3");
		const nba = createClient();
		const res = (await nba.stats.boxScoreTraditionalV3({
			gameID: "0022400561",
		})) as any;
		expect(res.gameId).toBe("0022400561");
		expect(res.homeTeam).toBeDefined();
		expect(res.awayTeam).toBeDefined();
		expect(res.homeTeam.players).toBeArray();
	});

	test("boxScoreAdvancedV3", async () => {
		mockFetch("boxScoreAdvancedV3");
		const nba = createClient();
		const res = (await nba.stats.boxScoreAdvancedV3({
			gameID: "0022400561",
		})) as any;
		expect(res.gameId).toBe("0022400561");
		expect(res.homeTeam).toBeDefined();
		expect(res.awayTeam).toBeDefined();
	});

	test("boxScoreSummaryV3", async () => {
		mockFetch("boxScoreSummaryV3");
		const nba = createClient();
		const res = (await nba.stats.boxScoreSummaryV3({
			gameID: "0022400561",
		})) as any;
		expect(res.gameId).toBe("0022400561");
	});

	test("boxScoreMiscV3", async () => {
		mockFetch("boxScoreMiscV3");
		const nba = createClient();
		const res = (await nba.stats.boxScoreMiscV3({
			gameID: "0022400561",
		})) as any;
		expect(res.gameId).toBe("0022400561");
	});

	test("boxScoreScoringV3", async () => {
		mockFetch("boxScoreScoringV3");
		const nba = createClient();
		const res = (await nba.stats.boxScoreScoringV3({
			gameID: "0022400561",
		})) as any;
		expect(res.gameId).toBe("0022400561");
	});

	test("boxScoreUsageV3", async () => {
		mockFetch("boxScoreUsageV3");
		const nba = createClient();
		const res = (await nba.stats.boxScoreUsageV3({
			gameID: "0022400561",
		})) as any;
		expect(res.gameId).toBe("0022400561");
	});

	test("boxScoreFourFactorsV3", async () => {
		mockFetch("boxScoreFourFactorsV3");
		const nba = createClient();
		const res = (await nba.stats.boxScoreFourFactorsV3({
			gameID: "0022400561",
		})) as any;
		expect(res.gameId).toBe("0022400561");
	});

	test("boxScoreMatchupsV3", async () => {
		mockFetch("boxScoreMatchupsV3");
		const nba = createClient();
		const res = (await nba.stats.boxScoreMatchupsV3({
			gameID: "0022400561",
		})) as any;
		expect(res.gameId).toBe("0022400561");
	});

	test("boxScorePlayerTrackV3", async () => {
		mockFetch("boxScorePlayerTrackV3");
		const nba = createClient();
		const res = (await nba.stats.boxScorePlayerTrackV3({
			gameID: "0022400561",
		})) as any;
		expect(res.gameId).toBe("0022400561");
	});
});

describe("Play-by-Play Endpoints", () => {
	test("playByPlayV3", async () => {
		mockFetch("playByPlayV3");
		const nba = createClient();
		const res = (await nba.stats.playByPlayV3({ gameID: "0022400561" })) as any;
		expect(res.gameId).toBe("0022400561");
		expect(res.actions).toBeArray();
	});
});

describe("Scoreboard Endpoints", () => {
	test("scoreboardV2", async () => {
		mockFetch("scoreboardV2");
		const nba = createClient();
		const res = await nba.stats.scoreboardV2({
			gameDate: "2025-01-15",
			dayOffset: 0,
		});
		expect(res.gameHeader).toBeArray();
		expect(res.lineScore).toBeArray();
	});

	test("scoreboardV3", async () => {
		mockFetch("scoreboardV3");
		const nba = createClient();
		const res = (await nba.stats.scoreboardV3({
			gameDate: "2025-01-15",
			leagueID: "00",
		})) as any;
		expect(res.gameDate).toBeDefined();
		expect(res.games).toBeArray();
	});
});

describe("Schedule Endpoints", () => {
	test("scheduleLeagueV2", async () => {
		mockFetch("scheduleLeagueV2");
		const nba = createClient();
		const res = (await nba.stats.scheduleLeagueV2({
			season: "2024-25",
			leagueID: "00",
		})) as any;
		expect(res.seasonYear).toBeDefined();
		expect(res.gameDates).toBeArray();
	});
});

describe("Shot Chart Endpoints", () => {
	test("shotChartDetail", async () => {
		mockFetch("shotChartDetail");
		const nba = createClient();
		const res = await nba.stats.shotChartDetail({
			playerID: 203999,
			season: "2024-25",
			teamID: 1610612743,
		});
		expect(res.shot_Chart_Detail).toBeArray();
	});

	test("shotChartLeagueWide", async () => {
		mockFetch("shotChartLeagueWide");
		const nba = createClient();
		const res = await nba.stats.shotChartLeagueWide({ season: "2024-25" });
		expect(res).toBeDefined();
	});
});

describe("Standings & Misc", () => {
	test("iSTStandings", async () => {
		mockFetch("iSTStandings");
		const nba = createClient();
		const res = (await nba.stats.iSTStandings({
			season: "2024-25",
			leagueID: "00",
		})) as any;
		expect(res.leagueId).toBeDefined();
		expect(res.teams).toBeArray();
	});

	test("playoffPicture", async () => {
		mockFetch("playoffPicture");
		const nba = createClient();
		const res = await nba.stats.playoffPicture({
			leagueID: "00",
			seasonID: "22024",
		});
		expect(res).toBeDefined();
	});

	test("matchupsRollup", async () => {
		mockFetch("matchupsRollup");
		const nba = createClient();
		const res = await nba.stats.matchupsRollup({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("gameRotation", async () => {
		mockFetch("gameRotation");
		const nba = createClient();
		const res = await nba.stats.gameRotation({ gameID: "0022400561" });
		expect(res).toBeDefined();
	});
});

describe("Leaders & Homepage", () => {
	test("allTimeLeadersGrids", async () => {
		mockFetch("allTimeLeadersGrids");
		const nba = createClient();
		const res = await nba.stats.allTimeLeadersGrids({ leagueID: "00" });
		expect(res).toBeDefined();
	});

	test("assistLeaders", async () => {
		mockFetch("assistLeaders");
		const nba = createClient();
		const res = await nba.stats.assistLeaders({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("assistTracker", async () => {
		mockFetch("assistTracker");
		const nba = createClient();
		const res = await nba.stats.assistTracker({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("leadersTiles", async () => {
		mockFetch("leadersTiles");
		const nba = createClient();
		const res = await nba.stats.leadersTiles({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("homePageLeaders", async () => {
		mockFetch("homePageLeaders");
		const nba = createClient();
		const res = await nba.stats.homePageLeaders({
			season: "2024-25",
			statCategory: "Points",
		});
		expect(res).toBeDefined();
	});

	test("homePageV2", async () => {
		mockFetch("homePageV2");
		const nba = createClient();
		const res = await nba.stats.homePageV2({
			season: "2024-25",
			statType: "Traditional",
		});
		expect(res).toBeDefined();
	});
});

describe("Franchise Endpoints", () => {
	test("franchiseHistory", async () => {
		mockFetch("franchiseHistory");
		const nba = createClient();
		const res = await nba.stats.franchiseHistory({ leagueID: "00" });
		expect(res.franchiseHistory).toBeArray();
		expect(res.franchiseHistory.length).toBeGreaterThan(0);
	});

	test("franchiseLeaders", async () => {
		mockFetch("franchiseLeaders");
		const nba = createClient();
		const res = await nba.stats.franchiseLeaders({ teamID: 1610612743 });
		expect(res).toBeDefined();
	});

	test("franchisePlayers", async () => {
		mockFetch("franchisePlayers");
		const nba = createClient();
		const res = await nba.stats.franchisePlayers({ teamID: 1610612743 });
		expect(res).toBeDefined();
	});
});

describe("Draft Endpoints", () => {
	test("draftHistory", async () => {
		mockFetch("draftHistory");
		const nba = createClient();
		const res = await nba.stats.draftHistory({ leagueID: "00" });
		expect(res.draftHistory).toBeArray();
		expect(res.draftHistory.length).toBeGreaterThan(0);
	});

	test("draftCombineStats", async () => {
		mockFetch("draftCombineStats");
		const nba = createClient();
		const res = await nba.stats.draftCombineStats({ season: "2024" });
		expect(res).toBeDefined();
	});

	test("draftCombinePlayerAnthro", async () => {
		mockFetch("draftCombinePlayerAnthro");
		const nba = createClient();
		const res = await nba.stats.draftCombinePlayerAnthro({ season: "2024" });
		expect(res).toBeDefined();
	});

	test("draftCombineDrillResults", async () => {
		mockFetch("draftCombineDrillResults");
		const nba = createClient();
		const res = await nba.stats.draftCombineDrillResults({ season: "2024" });
		expect(res).toBeDefined();
	});

	test("draftCombineSpotShooting", async () => {
		mockFetch("draftCombineSpotShooting");
		const nba = createClient();
		const res = await nba.stats.draftCombineSpotShooting({ season: "2024" });
		expect(res).toBeDefined();
	});

	test("draftCombineNonStationaryShooting", async () => {
		mockFetch("draftCombineNonStationaryShooting");
		const nba = createClient();
		const res = await nba.stats.draftCombineNonStationaryShooting({
			season: "2024",
		});
		expect(res).toBeDefined();
	});
});

describe("Cume Stats Endpoints", () => {
	test("cumeStatsPlayer", async () => {
		mockFetch("cumeStatsPlayer");
		const nba = createClient();
		const res = await nba.stats.cumeStatsPlayer({
			playerID: 203999,
			season: "2024-25",
			gameIDs: "0022400561",
		});
		expect(res).toBeDefined();
	});

	test("cumeStatsPlayerGames", async () => {
		mockFetch("cumeStatsPlayerGames");
		const nba = createClient();
		const res = await nba.stats.cumeStatsPlayerGames({
			playerID: 203999,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});

	test("cumeStatsTeam", async () => {
		mockFetch("cumeStatsTeam");
		const nba = createClient();
		const res = await nba.stats.cumeStatsTeam({
			teamID: 1610612743,
			season: "2024-25",
			gameIDs: "0022400561",
		});
		expect(res).toBeDefined();
	});

	test("cumeStatsTeamGames", async () => {
		mockFetch("cumeStatsTeamGames");
		const nba = createClient();
		const res = await nba.stats.cumeStatsTeamGames({
			teamID: 1610612743,
			season: "2024-25",
		});
		expect(res).toBeDefined();
	});
});

describe("Fantasy Endpoints", () => {
	test("fantasyWidget", async () => {
		mockFetch("fantasyWidget");
		const nba = createClient();
		const res = await nba.stats.fantasyWidget({ season: "2024-25" });
		expect(res).toBeDefined();
	});

	test("infographicFanDuelPlayer", async () => {
		mockFetch("infographicFanDuelPlayer");
		const nba = createClient();
		const res = await nba.stats.infographicFanDuelPlayer({
			gameID: "0022400561",
		});
		expect(res).toBeDefined();
	});
});

describe("Other Endpoints", () => {
	test("synergyPlayTypes", async () => {
		mockFetch("synergyPlayTypes");
		const nba = createClient();
		const res = await nba.stats.synergyPlayTypes({
			season: "2024-25",
			playType: "Isolation",
			playerOrTeam: "P",
			typeGrouping: "offensive",
		});
		expect(res).toBeDefined();
	});

	test("videoStatus", async () => {
		mockFetch("videoStatus");
		const nba = createClient();
		const res = await nba.stats.videoStatus({
			gameDate: "2025-01-15",
			leagueID: "00",
		});
		expect(res).toBeDefined();
	});
});
