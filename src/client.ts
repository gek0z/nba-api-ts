import { FetchClient, type FetchClientOptions } from './http/fetch-client.js';
import { StatsClient } from './stats/index.js';
import { LiveClient } from './live/index.js';

export interface NBAClientOptions {
  /** Options for the stats.nba.com fetch client. */
  stats?: FetchClientOptions;
  /** Options for the cdn.nba.com live data fetch client. */
  live?: FetchClientOptions;
}

export class NBAClient {
  /** Stats API client (stats.nba.com) — ~138 endpoints. */
  readonly stats: StatsClient;
  /** Live data client (cdn.nba.com) — scoreboard, boxscore, play-by-play, odds. */
  readonly live: LiveClient;

  constructor(options?: NBAClientOptions) {
    const statsFetch = new FetchClient('https://stats.nba.com', options?.stats);
    this.stats = new StatsClient(statsFetch);
    this.live = new LiveClient(options?.live);
  }
}
