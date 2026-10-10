import { NBAApiError, NBANetworkError, NBATimeoutError } from "./errors.js";
import { NBA_CDN_HEADERS, NBA_STATS_HEADERS } from "./headers.js";
import { RateLimiter } from "./rate-limiter.js";

/** A fetch-compatible function signature. */
export type FetchFn = (url: string, init?: RequestInit) => Promise<Response>;

export interface FetchClientOptions {
	/** Request timeout in ms. Default: 30000 */
	timeout?: number;
	/** Max retry attempts on transient failures. Default: 3 */
	maxRetries?: number;
	/** Min delay between requests in ms. 0 to disable. Default: 600 */
	rateLimit?: number;
	/** Override default headers. */
	headers?: Record<string, string>;
	/**
	 * Custom fetch implementation. Both stats.nba.com and (since June 2026)
	 * cdn.nba.com sit behind Akamai, which rejects clients whose TLS handshake
	 * doesn't look like a browser. Provide a fetch backed by impit,
	 * curl-impersonate, or similar. Defaults to globalThis.fetch.
	 *
	 * @see https://nba-api-ts.riccardo.lol/guides/akamai/
	 */
	fetch?: FetchFn;
}

const RETRYABLE_STATUS_CODES = new Set([408, 429, 500, 502, 503, 504]);

/** Akamai answers blocked clients with an "Access Denied" HTML page; say so. */
function errorMessage(status: number, url: string, body?: string): string {
	const message = `HTTP ${status} from ${url}`;
	if (body?.includes("Access Denied")) {
		return `${message} (blocked by Akamai, pass a browser-impersonating fetch: https://nba-api-ts.riccardo.lol/guides/akamai/)`;
	}
	return message;
}

export class FetchClient {
	private readonly timeout: number;
	private readonly maxRetries: number;
	private readonly headers: Record<string, string>;
	private readonly rateLimiter: RateLimiter | null;
	private readonly fetchFn: FetchFn;

	constructor(
		private readonly baseUrl: string,
		options: FetchClientOptions = {},
	) {
		this.timeout = options.timeout ?? 30_000;
		this.maxRetries = options.maxRetries ?? 3;
		this.headers =
			options.headers ??
			(baseUrl.includes("stats.nba.com") ? NBA_STATS_HEADERS : NBA_CDN_HEADERS);
		this.fetchFn = options.fetch ?? globalThis.fetch.bind(globalThis);
		const rateLimit = options.rateLimit ?? 600;
		this.rateLimiter = rateLimit > 0 ? new RateLimiter(rateLimit) : null;
	}

	async get<T = unknown>(
		path: string,
		params?: Record<string, string | number | undefined>,
	): Promise<T> {
		const url = this.buildUrl(path, params);
		let lastError: unknown;

		for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
			if (attempt > 0) {
				// Exponential backoff: 1s, 2s, 4s
				await new Promise((r) => setTimeout(r, 1000 * 2 ** (attempt - 1)));
			}

			if (this.rateLimiter) {
				await this.rateLimiter.wait();
			}

			try {
				const response = await this.fetchWithTimeout(url);

				if (response.ok) {
					return (await response.json()) as T;
				}

				const body = await response.text().catch(() => undefined);
				const message = errorMessage(response.status, url, body);

				if (
					RETRYABLE_STATUS_CODES.has(response.status) &&
					attempt < this.maxRetries
				) {
					lastError = new NBAApiError(message, response.status, url, body);
					continue;
				}

				throw new NBAApiError(message, response.status, url, body);
			} catch (error) {
				if (error instanceof NBAApiError || error instanceof NBATimeoutError) {
					if (error instanceof NBATimeoutError && attempt < this.maxRetries) {
						lastError = error;
						continue;
					}
					throw error;
				}
				if (attempt < this.maxRetries) {
					lastError = error;
					continue;
				}
				throw new NBANetworkError(url, error);
			}
		}

		throw lastError;
	}

	private buildUrl(
		path: string,
		params?: Record<string, string | number | undefined>,
	): string {
		const url = new URL(path, this.baseUrl);
		if (params) {
			for (const [key, value] of Object.entries(params)) {
				if (value !== undefined) {
					url.searchParams.set(key, String(value));
				}
			}
		}
		return url.toString();
	}

	private async fetchWithTimeout(url: string): Promise<Response> {
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), this.timeout);
		try {
			return await this.fetchFn(url, {
				headers: this.headers,
				signal: controller.signal,
			});
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				throw new NBATimeoutError(url, this.timeout);
			}
			throw error;
		} finally {
			clearTimeout(timer);
		}
	}
}
