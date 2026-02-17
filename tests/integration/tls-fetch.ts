/**
 * Creates a fetch-compatible function backed by tlsclientwrapper
 * to bypass Akamai TLS fingerprinting on stats.nba.com.
 *
 * Usage:
 *   const { fetch, cleanup } = await createTlsFetch();
 *   const nba = new NBAClient({ stats: { fetch } });
 *   // ... run tests ...
 *   await cleanup();
 */
import { ModuleClient, SessionClient } from "tlsclientwrapper";

const NBA_STATS_HEADERS: Record<string, string> = {
	"User-Agent":
		"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
	Accept: "application/json, text/plain, */*",
	"Accept-Language": "en-US,en;q=0.9",
	Referer: "https://www.nba.com/",
	Origin: "https://www.nba.com",
};

export async function createTlsFetch(): Promise<{
	fetch: (url: string, init?: RequestInit) => Promise<Response>;
	cleanup: () => Promise<void>;
}> {
	const moduleClient = new ModuleClient();
	await moduleClient.open();

	const session = new SessionClient(moduleClient, {
		tlsClientIdentifier: "chrome_131",
		timeoutSeconds: 25,
		followRedirects: true,
		defaultHeaders: NBA_STATS_HEADERS,
	});

	const tlsFetch = async (
		url: string,
		_init?: RequestInit,
	): Promise<Response> => {
		// Use session's defaultHeaders (set above) — do NOT pass FetchClient's
		// per-request headers since the session already has them configured.
		const res = await session.get(url);

		// The Go TLS library returns status 0 on connection-level failures
		// (timeouts, refused, etc.) with the error message in the body.
		if (res.status === 0) {
			throw new Error(res.body || "TLS request failed");
		}

		// tlsclientwrapper returns headers as Record<string, string[]>
		const flatHeaders: Record<string, string> = {};
		if (res.headers) {
			for (const [key, value] of Object.entries(res.headers)) {
				flatHeaders[key] = Array.isArray(value)
					? value.join(", ")
					: String(value);
			}
		}

		return new Response(res.body ?? "", {
			status: res.status,
			headers: flatHeaders,
		});
	};

	const cleanup = async () => {
		await session.destroySession();
		await moduleClient.terminate();
	};

	return { fetch: tlsFetch, cleanup };
}
