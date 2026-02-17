import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	GLAlumBoxScoreSimilarityScoreParams,
	GLAlumBoxScoreSimilarityScoreResponse,
} from "../types/gl-alum-box-score-similarity-score.js";

const RESULT_SET_MAP: Record<string, string> = {
	GLeagueAlumBoxScoreSimilarityScores: "gLeagueAlumBoxScoreSimilarityScores",
};

export async function gLAlumBoxScoreSimilarityScore(
	client: FetchClient,
	params: GLAlumBoxScoreSimilarityScoreParams,
): Promise<GLAlumBoxScoreSimilarityScoreResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		Person2Id: params.person2Id,
		Person1Id: params.person1Id,
		Person1LeagueId: params.person1LeagueId,
		Person1Season: params.person1Season,
		Person1SeasonType: params.person1SeasonType,
		Person2LeagueId: params.person2LeagueId,
		Person2Season: params.person2Season,
		Person2SeasonType: params.person2SeasonType,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/glalumboxscoresimilarityscore",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as GLAlumBoxScoreSimilarityScoreResponse;
}
