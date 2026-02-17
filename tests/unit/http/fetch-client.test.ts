import { describe, expect, test, mock, beforeEach, afterEach } from 'bun:test';
import { FetchClient } from '../../../src/http/fetch-client.js';
import { NBAApiError, NBATimeoutError } from '../../../src/http/errors.js';

describe('FetchClient', () => {
  const originalFetch = globalThis.fetch;

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  test('builds URL with query params', async () => {
    let capturedUrl = '';
    globalThis.fetch = async (input: any, init?: any) => {
      capturedUrl = typeof input === 'string' ? input : input.toString();
      return new Response(JSON.stringify({ data: 'ok' }), { status: 200 });
    };

    const client = new FetchClient('https://stats.nba.com', { rateLimit: 0 });
    await client.get('/stats/test', { PlayerID: 203999, Season: '2024-25' });

    expect(capturedUrl).toContain('PlayerID=203999');
    expect(capturedUrl).toContain('Season=2024-25');
  });

  test('skips undefined params', async () => {
    let capturedUrl = '';
    globalThis.fetch = async (input: any) => {
      capturedUrl = typeof input === 'string' ? input : input.toString();
      return new Response(JSON.stringify({}), { status: 200 });
    };

    const client = new FetchClient('https://stats.nba.com', { rateLimit: 0 });
    await client.get('/stats/test', { PlayerID: 203999, Season: undefined });

    expect(capturedUrl).toContain('PlayerID=203999');
    expect(capturedUrl).not.toContain('Season');
  });

  test('throws NBAApiError on non-retryable status', async () => {
    globalThis.fetch = async () => new Response('Not Found', { status: 404 });

    const client = new FetchClient('https://stats.nba.com', { rateLimit: 0, maxRetries: 0 });
    expect(client.get('/stats/test')).rejects.toBeInstanceOf(NBAApiError);
  });

  test('parses JSON response', async () => {
    const data = { resultSets: [{ name: 'Test', headers: [], rowSet: [] }] };
    globalThis.fetch = async () => new Response(JSON.stringify(data), { status: 200 });

    const client = new FetchClient('https://stats.nba.com', { rateLimit: 0 });
    const result = await client.get('/stats/test');
    expect(result).toEqual(data);
  });

  test('uses custom fetch when provided', async () => {
    let capturedUrl = '';
    let capturedHeaders: Record<string, string> = {};
    const customFetch = async (url: string, init?: RequestInit) => {
      capturedUrl = url;
      capturedHeaders = (init?.headers ?? {}) as Record<string, string>;
      return new Response(JSON.stringify({ custom: true }), { status: 200 });
    };

    const client = new FetchClient('https://stats.nba.com', { rateLimit: 0, fetch: customFetch });
    const result = await client.get('/stats/test', { PlayerID: 203999 });

    expect(capturedUrl).toContain('PlayerID=203999');
    expect(capturedHeaders).toBeDefined();
    expect(result).toEqual({ custom: true });
  });

  test('custom fetch does not use globalThis.fetch', async () => {
    let globalFetchCalled = false;
    globalThis.fetch = async () => {
      globalFetchCalled = true;
      return new Response('{}', { status: 200 });
    };

    const customFetch = async () => new Response(JSON.stringify({ ok: 1 }), { status: 200 });
    const client = new FetchClient('https://stats.nba.com', { rateLimit: 0, fetch: customFetch });
    await client.get('/stats/test');

    expect(globalFetchCalled).toBe(false);
  });
});
