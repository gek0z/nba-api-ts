/**
 * Comprehensive integration tests for all stats + live endpoints.
 * Hits the real NBA API — gated behind NBA_INTEGRATION_TESTS=1.
 *
 * Usage:
 *   NBA_INTEGRATION_TESTS=1 bun test tests/integration
 *   NBA_INTEGRATION_TESTS=1 NBA_USE_TLS=1 bun test tests/integration
 */
import { afterAll, describe, expect, test } from "bun:test";
import { type FetchFn, NBAClient } from "../../src/index.js";
import { createTlsFetch } from "./tls-fetch.js";

const SKIP = !process.env.NBA_INTEGRATION_TESTS;
const USE_TLS = !!process.env.NBA_USE_TLS;
const TIMEOUT = 30_000;

// Set up TLS fetch if requested
let tlsFetch: FetchFn | undefined;
let tlsCleanup: (() => Promise<void>) | undefined;

if (!SKIP && USE_TLS) {
	const tls = await createTlsFetch();
	tlsFetch = tls.fetch;
	tlsCleanup = tls.cleanup;
}

afterAll(async () => {
	if (tlsCleanup) await tlsCleanup();
});

// ── Known-good test params ──
const PLAYER_ID = 203999; // Jokic
const PLAYER_ID_2 = 2544; // LeBron
const TEAM_ID = 1610612743; // DEN
const TEAM_ID_2 = 1610612747; // LAL
const GAME_ID = "0022400561";
const SEASON = "2024-25";
const GAME_DATE = "2025-01-15";

// DEN 2024-25 starters for teamAndPlayersVsPlayers
const DEN_P1 = "203999"; // Jokic
const DEN_P2 = "1627750"; // Murray
const DEN_P3 = "1629008"; // MPJ
const DEN_P4 = "203486"; // Aaron Gordon
const DEN_P5 = "1631128"; // Braun
// LAL 2024-25 starters
const LAL_P1 = "2544"; // LeBron
const LAL_P2 = "203076"; // AD
const LAL_P3 = "1626156"; // D'Angelo Russell
const LAL_P4 = "1630559"; // Reaves
const LAL_P5 = "1629060"; // Rui Hachimura

describe.skipIf(SKIP)("Stats Integration", () => {
	const nba = new NBAClient({
		stats: {
			...(tlsFetch ? { fetch: tlsFetch } : {}),
			maxRetries: 1,
			timeout: 25_000,
		},
	});

	// ── Player Endpoints ──

	describe("Player", () => {
		test(
			"playerCareerStats",
			async () => {
				const res = await nba.stats.playerCareerStats({ playerID: PLAYER_ID });
				expect(res.careerTotalsRegularSeason).toBeArray();
				expect(res.careerTotalsRegularSeason.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"playerProfileV2",
			async () => {
				const res = await nba.stats.playerProfileV2({ playerID: PLAYER_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerAwards",
			async () => {
				const res = await nba.stats.playerAwards({ playerID: PLAYER_ID });
				expect(res.playerAwards).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"playerGameLog",
			async () => {
				const res = await nba.stats.playerGameLog({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res.playerGameLog).toBeArray();
				expect(res.playerGameLog.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"playerGameLogs",
			async () => {
				const res = await nba.stats.playerGameLogs({
					season: SEASON,
					playerID: PLAYER_ID,
				});
				expect(res.playerGameLogs).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"playerIndex",
			async () => {
				const res = await nba.stats.playerIndex({ season: SEASON });
				expect(res.playerIndex).toBeArray();
				expect(res.playerIndex.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"playerNextNGames",
			async () => {
				const res = await nba.stats.playerNextNGames({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerGameStreakFinder",
			async () => {
				const res = await nba.stats.playerGameStreakFinder({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerEstimatedMetrics",
			async () => {
				const res = await nba.stats.playerEstimatedMetrics({ season: SEASON });
				expect(res.playerEstimatedMetrics).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"playerFantasyProfileBarGraph",
			async () => {
				const res = await nba.stats.playerFantasyProfileBarGraph({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerCompare",
			async () => {
				const res = await nba.stats.playerCompare({
					playerIDList: "203999",
					vsPlayerIDList: "2544",
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerVsPlayer",
			async () => {
				const res = await nba.stats.playerVsPlayer({
					playerID: PLAYER_ID,
					vsPlayerID: PLAYER_ID_2,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerCareerByCollege",
			async () => {
				const res = await nba.stats.playerCareerByCollege({
					college: "Kentucky",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerCareerByCollegeRollup",
			async () => {
				const res = await nba.stats.playerCareerByCollegeRollup({});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Player Dashboard Endpoints ──

	describe("Player Dashboard", () => {
		test(
			"playerDashboardByGeneralSplits",
			async () => {
				const res = await nba.stats.playerDashboardByGeneralSplits({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res.overallPlayerDashboard).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"playerDashboardByClutch",
			async () => {
				const res = await nba.stats.playerDashboardByClutch({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res.overallPlayerDashboard).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"playerDashboardByGameSplits",
			async () => {
				const res = await nba.stats.playerDashboardByGameSplits({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res.overallPlayerDashboard).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"playerDashboardByLastNGames",
			async () => {
				const res = await nba.stats.playerDashboardByLastNGames({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res.overallPlayerDashboard).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"playerDashboardByShootingSplits",
			async () => {
				const res = await nba.stats.playerDashboardByShootingSplits({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res.overallPlayerDashboard).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"playerDashboardByTeamPerformance",
			async () => {
				const res = await nba.stats.playerDashboardByTeamPerformance({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res.overallPlayerDashboard).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"playerDashboardByYearOverYear",
			async () => {
				const res = await nba.stats.playerDashboardByYearOverYear({
					playerID: PLAYER_ID,
				});
				expect(res.overallPlayerDashboard).toBeArray();
			},
			TIMEOUT,
		);
	});

	// ── Player Tracking Endpoints ──

	describe("Player Tracking", () => {
		test(
			"playerDashPtPass",
			async () => {
				const res = await nba.stats.playerDashPtPass({
					playerID: PLAYER_ID,
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerDashPtReb",
			async () => {
				const res = await nba.stats.playerDashPtReb({
					playerID: PLAYER_ID,
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerDashPtShots",
			async () => {
				const res = await nba.stats.playerDashPtShots({
					playerID: PLAYER_ID,
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playerDashPtShotDefend",
			async () => {
				const res = await nba.stats.playerDashPtShotDefend({
					playerID: PLAYER_ID,
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Common Endpoints ──

	describe("Common", () => {
		test(
			"commonAllPlayers",
			async () => {
				const res = await nba.stats.commonAllPlayers({
					leagueID: "00",
					season: SEASON,
					isOnlyCurrentSeason: 1,
				});
				expect(res.commonAllPlayers).toBeArray();
				expect(res.commonAllPlayers.length).toBeGreaterThan(100);
			},
			TIMEOUT,
		);

		test(
			"commonPlayerInfo",
			async () => {
				const res = await nba.stats.commonPlayerInfo({ playerID: PLAYER_ID });
				expect(res.commonPlayerInfo).toBeArray();
				expect(res.commonPlayerInfo.length).toBe(1);
			},
			TIMEOUT,
		);

		test(
			"commonPlayoffSeries",
			async () => {
				const res = await nba.stats.commonPlayoffSeries({
					leagueID: "00",
					season: "2023-24",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"commonTeamRoster",
			async () => {
				const res = await nba.stats.commonTeamRoster({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res.commonTeamRoster).toBeArray();
				expect(res.commonTeamRoster.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"commonTeamYears",
			async () => {
				const res = await nba.stats.commonTeamYears({ leagueID: "00" });
				expect(res.teamYears).toBeArray();
			},
			TIMEOUT,
		);
	});

	// ── Team Endpoints ──

	describe("Team", () => {
		test(
			"teamInfoCommon",
			async () => {
				const res = await nba.stats.teamInfoCommon({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res.teamInfoCommon).toBeArray();
				expect(res.teamInfoCommon[0].teamId).toBe(TEAM_ID);
			},
			TIMEOUT,
		);

		test(
			"teamDetails",
			async () => {
				const res = await nba.stats.teamDetails({ teamID: TEAM_ID });
				expect(res.teamBackground).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"teamGameLog",
			async () => {
				const res = await nba.stats.teamGameLog({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res.teamGameLog).toBeArray();
				expect(res.teamGameLog.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"teamGameLogs",
			async () => {
				const res = await nba.stats.teamGameLogs({ season: SEASON });
				expect(res.teamGameLogs).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"teamYearByYearStats",
			async () => {
				const res = await nba.stats.teamYearByYearStats({ teamID: TEAM_ID });
				expect(res.teamStats).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"teamHistoricalLeaders",
			async () => {
				const res = await nba.stats.teamHistoricalLeaders({ teamID: TEAM_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"teamGameStreakFinder",
			async () => {
				const res = await nba.stats.teamGameStreakFinder({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Team Dashboard ──

	describe("Team Dashboard", () => {
		test(
			"teamDashboardByGeneralSplits",
			async () => {
				const res = await nba.stats.teamDashboardByGeneralSplits({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res.overallTeamDashboard).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"teamDashboardByShootingSplits",
			async () => {
				const res = await nba.stats.teamDashboardByShootingSplits({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res.overallTeamDashboard).toBeArray();
			},
			TIMEOUT,
		);
	});

	// ── Team Lineups / On-Off ──

	describe("Team Lineups", () => {
		test(
			"teamDashLineups",
			async () => {
				const res = await nba.stats.teamDashLineups({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res.lineups).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"teamPlayerDashboard",
			async () => {
				const res = await nba.stats.teamPlayerDashboard({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"teamPlayerOnOffSummary",
			async () => {
				const res = await nba.stats.teamPlayerOnOffSummary({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"teamPlayerOnOffDetails",
			async () => {
				const res = await nba.stats.teamPlayerOnOffDetails({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Team Tracking ──

	describe("Team Tracking", () => {
		test(
			"teamDashPtPass",
			async () => {
				const res = await nba.stats.teamDashPtPass({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"teamDashPtReb",
			async () => {
				const res = await nba.stats.teamDashPtReb({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"teamDashPtShots",
			async () => {
				const res = await nba.stats.teamDashPtShots({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Team Misc ──

	describe("Team Misc", () => {
		test(
			"teamEstimatedMetrics",
			async () => {
				const res = await nba.stats.teamEstimatedMetrics({ season: SEASON });
				expect(res.teamEstimatedMetrics).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"teamVsPlayer",
			async () => {
				const res = await nba.stats.teamVsPlayer({
					teamID: TEAM_ID,
					vsPlayerID: PLAYER_ID_2,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"teamAndPlayersVsPlayers",
			async () => {
				const res = await nba.stats.teamAndPlayersVsPlayers({
					teamID: TEAM_ID,
					playerID1: DEN_P1,
					playerID2: DEN_P2,
					playerID3: DEN_P3,
					playerID4: DEN_P4,
					playerID5: DEN_P5,
					vsTeamID: TEAM_ID_2,
					vsPlayerID1: LAL_P1,
					vsPlayerID2: LAL_P2,
					vsPlayerID3: LAL_P3,
					vsPlayerID4: LAL_P4,
					vsPlayerID5: LAL_P5,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── League Dash — Player ──

	describe("League Dash Player", () => {
		test(
			"leagueDashPlayerStats",
			async () => {
				const res = await nba.stats.leagueDashPlayerStats({ season: SEASON });
				expect(res.leagueDashPlayerStats).toBeArray();
				expect(res.leagueDashPlayerStats.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"leagueDashPlayerClutch",
			async () => {
				const res = await nba.stats.leagueDashPlayerClutch({ season: SEASON });
				expect(res.leagueDashPlayerClutch).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"leagueDashPlayerBioStats",
			async () => {
				const res = await nba.stats.leagueDashPlayerBioStats({
					season: SEASON,
				});
				expect(res.leagueDashPlayerBioStats).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"leagueDashPlayerPtShot",
			async () => {
				const res = await nba.stats.leagueDashPlayerPtShot({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leagueDashPlayerShotLocations",
			async () => {
				const res = await nba.stats.leagueDashPlayerShotLocations({
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leagueDashPtDefend",
			async () => {
				const res = await nba.stats.leagueDashPtDefend({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leagueDashPtStats",
			async () => {
				const res = await nba.stats.leagueDashPtStats({
					season: SEASON,
					ptMeasureType: "SpeedDistance",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── League Dash — Team ──

	describe("League Dash Team", () => {
		test(
			"leagueDashTeamStats",
			async () => {
				const res = await nba.stats.leagueDashTeamStats({ season: SEASON });
				expect(res.leagueDashTeamStats).toBeArray();
				expect(res.leagueDashTeamStats.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"leagueDashTeamClutch",
			async () => {
				const res = await nba.stats.leagueDashTeamClutch({ season: SEASON });
				expect(res.leagueDashTeamClutch).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"leagueDashTeamPtShot",
			async () => {
				const res = await nba.stats.leagueDashTeamPtShot({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leagueDashTeamShotLocations",
			async () => {
				const res = await nba.stats.leagueDashTeamShotLocations({
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leagueDashOppPtShot",
			async () => {
				const res = await nba.stats.leagueDashOppPtShot({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leagueDashPtTeamDefend",
			async () => {
				const res = await nba.stats.leagueDashPtTeamDefend({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leagueDashLineups",
			async () => {
				const res = await nba.stats.leagueDashLineups({ season: SEASON });
				expect(res.lineups).toBeArray();
			},
			TIMEOUT,
		);
	});

	// ── League Game / Matchup ──

	describe("League Game", () => {
		test(
			"leagueGameFinder",
			async () => {
				const res = await nba.stats.leagueGameFinder({
					playerOrTeamAbbreviation: "T",
					season: SEASON,
				});
				expect(res.leagueGameFinderResults).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"leagueGameLog",
			async () => {
				const res = await nba.stats.leagueGameLog({ season: SEASON });
				expect(res.leagueGameLog).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"leagueLineupViz",
			async () => {
				const res = await nba.stats.leagueLineupViz({
					season: SEASON,
					minutesMin: "10",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leaguePlayerOnDetails",
			async () => {
				const res = await nba.stats.leaguePlayerOnDetails({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leagueSeasonMatchups",
			async () => {
				const res = await nba.stats.leagueSeasonMatchups({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"matchupsRollup",
			async () => {
				const res = await nba.stats.matchupsRollup({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── League Hustle ──

	describe("League Hustle", () => {
		test(
			"leagueHustleStatsPlayer",
			async () => {
				const res = await nba.stats.leagueHustleStatsPlayer({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leagueHustleStatsTeam",
			async () => {
				const res = await nba.stats.leagueHustleStatsTeam({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Box Score V2 ──

	describe("Box Score V2", () => {
		test(
			"boxScoreTraditionalV2",
			async () => {
				const res = await nba.stats.boxScoreTraditionalV2({ gameID: GAME_ID });
				expect(res.playerStats).toBeArray();
				expect(res.teamStats).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"boxScoreAdvancedV2",
			async () => {
				const res = await nba.stats.boxScoreAdvancedV2({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"boxScoreMiscV2",
			async () => {
				const res = await nba.stats.boxScoreMiscV2({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"boxScoreScoringV2",
			async () => {
				const res = await nba.stats.boxScoreScoringV2({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"boxScoreUsageV2",
			async () => {
				const res = await nba.stats.boxScoreUsageV2({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"boxScoreFourFactorsV2",
			async () => {
				const res = await nba.stats.boxScoreFourFactorsV2({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"boxScoreSummaryV2",
			async () => {
				const res = await nba.stats.boxScoreSummaryV2({ gameID: GAME_ID });
				expect(res.gameInfo).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"boxScoreDefensiveV2",
			async () => {
				const res = await nba.stats.boxScoreDefensiveV2({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"boxScoreHustleV2",
			async () => {
				const res = await nba.stats.boxScoreHustleV2({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"hustleStatsBoxScore",
			async () => {
				const res = await nba.stats.hustleStatsBoxScore({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Box Score V3 ──

	describe("Box Score V3", () => {
		test(
			"boxScoreTraditionalV3",
			async () => {
				const res = (await nba.stats.boxScoreTraditionalV3({
					gameID: GAME_ID,
				})) as any;
				expect(res.gameId).toBe(GAME_ID);
				expect(res.homeTeam).toBeDefined();
				expect(res.awayTeam).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"boxScoreAdvancedV3",
			async () => {
				const res = (await nba.stats.boxScoreAdvancedV3({
					gameID: GAME_ID,
				})) as any;
				expect(res.gameId).toBe(GAME_ID);
			},
			TIMEOUT,
		);

		test(
			"boxScoreMiscV3",
			async () => {
				const res = (await nba.stats.boxScoreMiscV3({
					gameID: GAME_ID,
				})) as any;
				expect(res.gameId).toBe(GAME_ID);
			},
			TIMEOUT,
		);

		test(
			"boxScoreScoringV3",
			async () => {
				const res = (await nba.stats.boxScoreScoringV3({
					gameID: GAME_ID,
				})) as any;
				expect(res.gameId).toBe(GAME_ID);
			},
			TIMEOUT,
		);

		test(
			"boxScoreUsageV3",
			async () => {
				const res = (await nba.stats.boxScoreUsageV3({
					gameID: GAME_ID,
				})) as any;
				expect(res.gameId).toBe(GAME_ID);
			},
			TIMEOUT,
		);

		test(
			"boxScoreFourFactorsV3",
			async () => {
				const res = (await nba.stats.boxScoreFourFactorsV3({
					gameID: GAME_ID,
				})) as any;
				expect(res.gameId).toBe(GAME_ID);
			},
			TIMEOUT,
		);

		test(
			"boxScoreSummaryV3",
			async () => {
				const res = (await nba.stats.boxScoreSummaryV3({
					gameID: GAME_ID,
				})) as any;
				expect(res.gameId).toBe(GAME_ID);
			},
			TIMEOUT,
		);

		test(
			"boxScoreMatchupsV3",
			async () => {
				const res = (await nba.stats.boxScoreMatchupsV3({
					gameID: GAME_ID,
				})) as any;
				expect(res.gameId).toBe(GAME_ID);
			},
			TIMEOUT,
		);

		test(
			"boxScorePlayerTrackV3",
			async () => {
				const res = (await nba.stats.boxScorePlayerTrackV3({
					gameID: GAME_ID,
				})) as any;
				expect(res.gameId).toBe(GAME_ID);
			},
			TIMEOUT,
		);
	});

	// ── Play-by-Play ──

	describe("Play-by-Play", () => {
		test(
			"playByPlay",
			async () => {
				const res = await nba.stats.playByPlay({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playByPlayV2",
			async () => {
				const res = await nba.stats.playByPlayV2({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playByPlayV3",
			async () => {
				const res = (await nba.stats.playByPlayV3({ gameID: GAME_ID })) as any;
				expect(res.gameId).toBe(GAME_ID);
				expect(res.actions).toBeArray();
			},
			TIMEOUT,
		);
	});

	// ── Scoreboard ──

	describe("Scoreboard", () => {
		test(
			"scoreboardV2",
			async () => {
				const res = await nba.stats.scoreboardV2({
					gameDate: GAME_DATE,
					dayOffset: 0,
				});
				expect(res.gameHeader).toBeArray();
				expect(res.lineScore).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"scoreboardV3",
			async () => {
				const res = (await nba.stats.scoreboardV3({
					gameDate: GAME_DATE,
					leagueID: "00",
				})) as any;
				expect(res.gameDate).toBeDefined();
				expect(res.games).toBeArray();
			},
			TIMEOUT,
		);
	});

	// ── Schedule ──

	describe("Schedule", () => {
		test(
			"scheduleLeagueV2",
			async () => {
				const res = (await nba.stats.scheduleLeagueV2({
					season: SEASON,
					leagueID: "00",
				})) as any;
				expect(res.seasonYear).toBeDefined();
				expect(res.gameDates).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"scheduleLeagueV2Int",
			async () => {
				// International schedule — may return empty or error
				try {
					const res = await nba.stats.scheduleLeagueV2Int({
						season: SEASON,
						leagueID: "00",
					});
					expect(res).toBeDefined();
				} catch {
					// Expected: endpoint may not exist or return an error
				}
			},
			TIMEOUT,
		);
	});

	// ── Shot Chart ──

	describe("Shot Chart", () => {
		test(
			"shotChartDetail",
			async () => {
				const res = await nba.stats.shotChartDetail({
					playerID: PLAYER_ID,
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res.shot_Chart_Detail).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"shotChartLeagueWide",
			async () => {
				const res = await nba.stats.shotChartLeagueWide({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"shotChartLineupDetail",
			async () => {
				const res = await nba.stats.shotChartLineupDetail({
					season: SEASON,
					leagueID: "00",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Standings ──

	describe("Standings", () => {
		test(
			"leagueStandings",
			async () => {
				const res = await nba.stats.leagueStandings({ season: SEASON });
				expect(res.standings).toBeArray();
				expect(res.standings.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"leagueStandingsV3",
			async () => {
				const res = await nba.stats.leagueStandingsV3({
					season: SEASON,
					leagueID: "00",
				});
				expect(res.standings).toBeArray();
			},
			TIMEOUT,
		);

		test(
			"iSTStandings",
			async () => {
				const res = (await nba.stats.iSTStandings({
					season: SEASON,
					leagueID: "00",
				})) as any;
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"playoffPicture",
			async () => {
				const res = await nba.stats.playoffPicture({
					leagueID: "00",
					seasonID: "22024",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Leaders & Homepage ──

	describe("Leaders & Homepage", () => {
		test(
			"leagueLeaders",
			async () => {
				const res = await nba.stats.leagueLeaders({
					season: SEASON,
					statCategory: "PTS",
				});
				expect(res.leagueLeaders).toBeArray();
				expect(res.leagueLeaders.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"allTimeLeadersGrids",
			async () => {
				const res = await nba.stats.allTimeLeadersGrids({ leagueID: "00" });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"assistLeaders",
			async () => {
				const res = await nba.stats.assistLeaders({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"assistTracker",
			async () => {
				const res = await nba.stats.assistTracker({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"homePageLeaders",
			async () => {
				const res = await nba.stats.homePageLeaders({
					season: SEASON,
					statCategory: "Points",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"homePageV2",
			async () => {
				const res = await nba.stats.homePageV2({
					season: SEASON,
					statType: "Traditional",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"leadersTiles",
			async () => {
				const res = await nba.stats.leadersTiles({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"defenseHub",
			async () => {
				const res = await nba.stats.defenseHub({
					season: SEASON,
					leagueID: "00",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Franchise ──

	describe("Franchise", () => {
		test(
			"franchiseHistory",
			async () => {
				const res = await nba.stats.franchiseHistory({ leagueID: "00" });
				expect(res.franchiseHistory).toBeArray();
				expect(res.franchiseHistory.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"franchiseLeaders",
			async () => {
				const res = await nba.stats.franchiseLeaders({ teamID: TEAM_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"franchisePlayers",
			async () => {
				const res = await nba.stats.franchisePlayers({ teamID: TEAM_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Draft ──

	describe("Draft", () => {
		test(
			"draftHistory",
			async () => {
				const res = await nba.stats.draftHistory({ leagueID: "00" });
				expect(res.draftHistory).toBeArray();
				expect(res.draftHistory.length).toBeGreaterThan(0);
			},
			TIMEOUT,
		);

		test(
			"draftBoard",
			async () => {
				// Known to potentially return empty/error
				try {
					const res = await nba.stats.draftBoard({
						leagueID: "00",
						season: "2024",
					});
					expect(res).toBeDefined();
				} catch {
					// Expected: draftBoard may not work
				}
			},
			TIMEOUT,
		);

		test(
			"draftCombineStats",
			async () => {
				const res = await nba.stats.draftCombineStats({ season: "2024" });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"draftCombinePlayerAnthro",
			async () => {
				const res = await nba.stats.draftCombinePlayerAnthro({
					season: "2024",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"draftCombineDrillResults",
			async () => {
				const res = await nba.stats.draftCombineDrillResults({
					season: "2024",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"draftCombineSpotShooting",
			async () => {
				const res = await nba.stats.draftCombineSpotShooting({
					season: "2024",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"draftCombineNonStationaryShooting",
			async () => {
				const res = await nba.stats.draftCombineNonStationaryShooting({
					season: "2024",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Cume Stats ──

	describe("Cume Stats", () => {
		test(
			"cumeStatsPlayer",
			async () => {
				const res = await nba.stats.cumeStatsPlayer({
					playerID: PLAYER_ID,
					season: SEASON,
					gameIDs: GAME_ID,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"cumeStatsPlayerGames",
			async () => {
				const res = await nba.stats.cumeStatsPlayerGames({
					playerID: PLAYER_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"cumeStatsTeam",
			async () => {
				const res = await nba.stats.cumeStatsTeam({
					teamID: TEAM_ID,
					season: SEASON,
					gameIDs: GAME_ID,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"cumeStatsTeamGames",
			async () => {
				const res = await nba.stats.cumeStatsTeamGames({
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Fantasy ──

	describe("Fantasy", () => {
		test(
			"fantasyWidget",
			async () => {
				const res = await nba.stats.fantasyWidget({ season: SEASON });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"infographicFanDuelPlayer",
			async () => {
				const res = await nba.stats.infographicFanDuelPlayer({
					gameID: GAME_ID,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"dunkScoreLeaders",
			async () => {
				try {
					const res = await nba.stats.dunkScoreLeaders({
						season: SEASON,
						leagueID: "00",
					});
					expect(res).toBeDefined();
				} catch {
					// Endpoint may not be available
				}
			},
			TIMEOUT,
		);
	});

	// ── Game Misc ──

	describe("Game Misc", () => {
		test(
			"gameRotation",
			async () => {
				const res = await nba.stats.gameRotation({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"winProbabilityPBP",
			async () => {
				const res = await nba.stats.winProbabilityPBP({ gameID: GAME_ID });
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"synergyPlayTypes",
			async () => {
				const res = await nba.stats.synergyPlayTypes({
					season: SEASON,
					playType: "Isolation",
					playerOrTeam: "P",
					typeGrouping: "offensive",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── Video ──

	describe("Video", () => {
		test(
			"videoStatus",
			async () => {
				const res = await nba.stats.videoStatus({
					gameDate: GAME_DATE,
					leagueID: "00",
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test(
			"videoDetails",
			async () => {
				try {
					const res = await nba.stats.videoDetails({
						playerID: PLAYER_ID,
						teamID: TEAM_ID,
						season: SEASON,
					});
					expect(res).toBeDefined();
				} catch {
					// May fail due to Akamai protection
				}
			},
			TIMEOUT,
		);

		test(
			"videoEvents",
			async () => {
				try {
					const res = await nba.stats.videoEvents({
						gameID: GAME_ID,
						gameEventID: 1,
					});
					expect(res).toBeDefined();
				} catch {
					// May fail due to Akamai protection
				}
			},
			TIMEOUT,
		);

		test.skip(
			"videoDetailsAsset — Akamai blocked",
			async () => {
				const res = await nba.stats.videoDetailsAsset({
					playerID: PLAYER_ID,
					teamID: TEAM_ID,
					season: SEASON,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);

		test.skip(
			"videoEventsAsset — Akamai blocked",
			async () => {
				const res = await nba.stats.videoEventsAsset({
					gameID: GAME_ID,
					gameEventID: 1,
				});
				expect(res).toBeDefined();
			},
			TIMEOUT,
		);
	});

	// ── G-League / Misc ──

	describe("G-League / Misc", () => {
		test(
			"gLAlumBoxScoreSimilarityScore",
			async () => {
				try {
					const res = await nba.stats.gLAlumBoxScoreSimilarityScore({
						person1Id: PLAYER_ID,
						person2Id: PLAYER_ID_2,
					});
					expect(res).toBeDefined();
				} catch {
					// G-League endpoint may fail without valid G-League player IDs
				}
			},
			TIMEOUT,
		);
	});
});

// ── Live Endpoints ──

describe.skipIf(SKIP)("Live Integration", () => {
	const nba = new NBAClient();

	test(
		"scoreboard",
		async () => {
			const res = await nba.live.scoreboard();
			expect(res.scoreboard).toBeDefined();
			expect(res.scoreboard.gameDate).toBeDefined();
		},
		TIMEOUT,
	);

	test(
		"boxscore",
		async () => {
			try {
				const res = await nba.live.boxscore(GAME_ID);
				expect(res).toBeDefined();
			} catch {
				// Game may not be live or available
			}
		},
		TIMEOUT,
	);

	test(
		"playByPlay",
		async () => {
			try {
				const res = await nba.live.playByPlay(GAME_ID);
				expect(res).toBeDefined();
			} catch {
				// Game may not be live or available
			}
		},
		TIMEOUT,
	);

	test(
		"odds",
		async () => {
			try {
				const res = await nba.live.odds();
				expect(res).toBeDefined();
			} catch {
				// Odds may not be available
			}
		},
		TIMEOUT,
	);
});
