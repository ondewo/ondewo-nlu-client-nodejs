/**
 * Minimal structural type of the fetch `Response` fields this helper reads. Keeps the module
 * self-contained (no DOM lib dependency) while still typing the injectable `fetchImpl`.
 */
export interface TokenFetchResponse {
    /** Whether the HTTP status is in the 2xx success range. */
    ok: boolean;
    /** The numeric HTTP status code (e.g. `200`, `401`, `500`). */
    status: number;
    /**
     * Read the full response body as text.
     *
     * @returns A promise resolving to the raw response body.
     */
    text(): Promise<string>;
}
/** Init object passed to the injectable fetch when POSTing to the token endpoint. */
export interface TokenFetchInit {
    /** HTTP method; always `"POST"` for the token endpoint call. */
    method: string;
    /** Request headers (`Content-Type`/`Accept`), keyed by header name. */
    headers: Record<string, string>;
    /** The `application/x-www-form-urlencoded` request body. */
    body: string;
}
/**
 * Injectable fetch signature (a subset of the global `fetch`) used by the token endpoint call.
 *
 * @param url - The fully-qualified OIDC token endpoint URL.
 * @param init - The request init (method, headers, form-encoded body).
 * @returns A promise resolving to the {@link TokenFetchResponse} for the request.
 */
export type TokenFetch = (url: string, init: TokenFetchInit) => Promise<TokenFetchResponse>;
/** Options for the D18 headless-SDK offline-token login. */
export interface OfflineTokenLoginOptions {
    /** Base Keycloak URL, e.g. "https://auth.example.com/auth" (trailing slash tolerated). */
    keycloakUrl: string;
    /** Realm name, e.g. "ondewo-ccai-platform". */
    realm: string;
    /** Public SDK client id, e.g. "ondewo-nlu-cai-sdk-public". NO client_secret (Q1). */
    clientId: string;
    /** 2FA-exempt technical-user email. */
    username: string;
    /** Technical-user password. */
    password: string;
    /** Optional cap (seconds) on how long the auto-refresh loop runs after login. */
    tokenExpirationInS?: number;
    /** Optional fetch override (tests inject a mock); defaults to the global fetch. */
    fetchImpl?: TokenFetch;
    /** Optional clock override returning epoch ms (tests); defaults to Date.now. */
    nowInMs?: () => number;
}
/** Error raised on any token-endpoint or token-shape failure. */
export declare class TokenError extends Error {
    /**
     * Create a {@link TokenError} with a fixed `name` of `"TokenError"`.
     *
     * @param message - Human-readable description of the token failure.
     */
    constructor(message: string);
}
/**
 * A live access-token holder backed by a bounded auto-refresh loop. Obtain one from {@link login};
 * read {@link getAuthorizationHeader} for the gRPC `Authorization` metadata and call {@link stop} when done.
 */
export declare class OfflineTokenProvider {
    /** Pre-computed OIDC token endpoint URL for the configured realm. */
    private readonly tokenEndpoint;
    /** Public SDK client id sent on every token request (no `client_secret`). */
    private readonly clientId;
    /** Optional cap (seconds) after which the auto-refresh loop stops; `undefined` means unbounded. */
    private readonly tokenExpirationInS;
    /** The {@link TokenFetch} used for all token-endpoint calls (injectable for tests). */
    private readonly fetchImpl;
    /** Clock returning epoch milliseconds; injectable so the bounded deadline is testable. */
    private readonly nowInMs;
    /** The current access token, or `null` before bootstrap / after the bounded loop has lapsed. */
    private accessToken;
    /** The current offline refresh token, or `null` before bootstrap. */
    private refreshToken;
    /** Handle of the armed refresh timer, or `null` when no refresh is scheduled. */
    private timer;
    /** Whether {@link stop} has been called; suppresses any further (re-)scheduling. */
    private stopped;
    /** Absolute epoch-ms deadline for the bounded loop, or `null` when unbounded. */
    private deadlineInMs;
    /** Optional callback invoked with the error of a failed background refresh. */
    private onRefreshErrorHandler;
    /**
     * Construct an inert provider from login options. No network call is made here; call
     * {@link bootstrap} (or use the {@link login} factory) to acquire the first token.
     *
     * @param options - The {@link OfflineTokenLoginOptions} for the login + refresh loop.
     */
    constructor(options: OfflineTokenLoginOptions);
    /**
     * Perform the one-time ROPC login and arm the first refresh. Awaited by {@link login}.
     *
     * @param username - The 2FA-exempt technical-user email.
     * @param password - The technical-user password.
     * @returns A promise that resolves once the first token is stored and the refresh is armed.
     * @throws {@link TokenError} If the token endpoint fails or the response carries no
     *   `refresh_token` (the SDK client lacks `directAccessGrants` + the `offline_access` scope).
     */
    bootstrap(username: string, password: string): Promise<void>;
    /**
     * Exchange the offline refresh token for a fresh access token and re-arm the next refresh.
     *
     * No-ops once {@link stop} has run or the bounded deadline has elapsed (in which case it also
     * stops the loop).
     *
     * @returns A promise that resolves once the token is refreshed and the next refresh is armed (or
     *   once the loop has been stopped).
     * @throws {@link TokenError} If the refresh token endpoint call fails or returns an unusable body.
     */
    private refresh;
    /**
     * Arm a single timer for the next refresh, clamped to the bounded deadline. Stops silently once
     * `tokenExpirationInS` has elapsed (no further renewal -> access lapses -> re-login required).
     *
     * The delay is derived from `expiresInRaw` minus {@link REFRESH_SKEW_IN_S}, floored at
     * {@link MIN_REFRESH_DELAY_IN_S}, then clamped to the time remaining before the deadline.
     *
     * @param expiresInRaw - The `expires_in` (seconds) from the latest token response; a missing or
     *   non-positive value falls back to {@link MIN_REFRESH_DELAY_IN_S}.
     */
    private scheduleRefresh;
    /**
     * Register a callback invoked with the error of a failed background refresh (optional diagnostics).
     *
     * A later call replaces any previously registered handler.
     *
     * @param handler - Callback receiving the (untyped) error thrown by a failed background refresh.
     */
    onRefreshError(handler: (error: unknown) => void): void;
    /**
     * Return the current access token.
     *
     * @returns The current access token, or `null` before bootstrap / after the bounded loop has
     *   lapsed.
     */
    getAccessToken(): string | null;
    /**
     * Build the value for an `Authorization` gRPC metadata header.
     *
     * @returns The header value `Bearer <access_token>`.
     * @throws {@link TokenError} If no access token is available (login has not completed or has
     *   lapsed).
     */
    getAuthorizationHeader(): string;
    /** Stop the auto-refresh loop. Idempotent; safe to call from any state. */
    stop(): void;
}
/**
 * One-time ROPC + `offline_access` login against the PUBLIC SDK client, returning a live token
 * provider whose access token is auto-refreshed in the background until `tokenExpirationInS` elapses.
 *
 * @param options - The {@link OfflineTokenLoginOptions}; the five string fields (`keycloakUrl`,
 *   `realm`, `clientId`, `username`, `password`) are required and must be non-empty.
 * @returns A promise resolving to a bootstrapped {@link OfflineTokenProvider} with a live access token.
 * @throws {@link TokenError} If `options` is missing, a required option is absent/empty, the token
 *   endpoint call fails, or the response lacks an `access_token` / `refresh_token`.
 */
export declare function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider>;
