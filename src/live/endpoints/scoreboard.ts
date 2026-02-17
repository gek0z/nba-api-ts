import type { FetchClient } from '../../http/fetch-client.js';
import type { ScoreboardResponse } from '../types/scoreboard.js';

const ENDPOINT = '/static/json/liveData/scoreboard/todaysScoreboard_00.json';

export async function scoreboard(client: FetchClient): Promise<ScoreboardResponse> {
  return client.get<ScoreboardResponse>(ENDPOINT);
}
