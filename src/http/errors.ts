export class NBAApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly url: string,
    public readonly responseBody?: string,
  ) {
    super(message);
    this.name = 'NBAApiError';
  }
}

export class NBATimeoutError extends Error {
  constructor(
    public readonly url: string,
    public readonly timeoutMs: number,
  ) {
    super(`Request to ${url} timed out after ${timeoutMs}ms`);
    this.name = 'NBATimeoutError';
  }
}

export class NBANetworkError extends Error {
  constructor(
    public readonly url: string,
    public readonly cause: unknown,
  ) {
    super(`Network error requesting ${url}: ${cause instanceof Error ? cause.message : String(cause)}`);
    this.name = 'NBANetworkError';
  }
}
