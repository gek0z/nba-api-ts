/** Simple token-bucket rate limiter. */
export class RateLimiter {
  private lastRequestTime = 0;

  constructor(private readonly minIntervalMs: number = 600) {}

  async wait(): Promise<void> {
    const now = Date.now();
    const elapsed = now - this.lastRequestTime;
    if (elapsed < this.minIntervalMs) {
      await new Promise((resolve) => setTimeout(resolve, this.minIntervalMs - elapsed));
    }
    this.lastRequestTime = Date.now();
  }
}
