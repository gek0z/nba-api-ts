import { describe, expect, test } from 'bun:test';
import { NBAClient } from '../../src/index.js';

const SKIP = !process.env.NBA_INTEGRATION_TESTS;

describe.skipIf(SKIP)('Stats Integration', () => {
  const nba = new NBAClient();

  test('playerCareerStats returns Jokic data', async () => {
    const result = await nba.stats.playerCareerStats({ playerID: 203999 });
    expect(result.careerTotalsRegularSeason).toBeDefined();
    expect(result.careerTotalsRegularSeason.length).toBeGreaterThan(0);
    expect(result.careerTotalsRegularSeason[0].playerId).toBe(203999);
    expect(result.careerTotalsRegularSeason[0].pts).toBeGreaterThan(0);
  }, 15000);

  test('commonPlayerInfo returns player info', async () => {
    const result = await nba.stats.commonPlayerInfo({ playerID: 2544 });
    expect(result.commonPlayerInfo).toBeDefined();
    expect(result.commonPlayerInfo.length).toBe(1);
  }, 15000);

  test('commonAllPlayers returns player list', async () => {
    const result = await nba.stats.commonAllPlayers({
      leagueID: '00',
      season: '2024-25',
      isOnlyCurrentSeason: 1,
    });
    expect(result.commonAllPlayers).toBeDefined();
    expect(result.commonAllPlayers.length).toBeGreaterThan(100);
  }, 15000);
});

describe.skipIf(SKIP)('Live Integration', () => {
  const nba = new NBAClient();

  test('scoreboard returns data', async () => {
    const result = await nba.live.scoreboard();
    expect(result.scoreboard).toBeDefined();
    expect(result.scoreboard.gameDate).toBeDefined();
  }, 15000);
});
