
export interface GLAlumBoxScoreSimilarityScoreParams {
  person2Id: number;
  person1Id: number;
  person1LeagueId?: number;
  person1Season?: string;
  person1SeasonType?: string;
  person2LeagueId?: number;
  person2Season?: string;
  person2SeasonType?: string;
}

export interface GLeagueAlumBoxScoreSimilarityScoresRow {
  person2Id: number;
  person2: unknown;
  teamId: number;
  similarityScore: unknown;
}

export interface GLAlumBoxScoreSimilarityScoreResponse {
  gLeagueAlumBoxScoreSimilarityScores: GLeagueAlumBoxScoreSimilarityScoresRow[];
}
