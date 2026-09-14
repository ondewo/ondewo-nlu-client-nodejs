# Release History

*****************

## Release ONDEWO NLU Nodejs Client 7.2.0

### Improvements

* Tracking API Version [7.2.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.2.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 7.1.2

### Bug fixes

* [[OND211-2418]](https://ondewo.atlassian.net/browse/OND211-2418) **The retry cadence introduced
  in 7.1.1 polled the token endpoint once a second for the whole of an outage.** Re-arming the loop
  fixed the dead-timer half of the defect and exposed a second one: the re-arm went through
  `scheduleRefresh(undefined)`, which falls back to `MIN_REFRESH_DELAY_IN_S` (1 s). One client at
  1 Hz is harmless; ondewo runs **one client per call container**, so the clients whose refreshes
  fail together then retry together -- the same thundering-herd shape as the login burst the
  offline-token hand-off exists to remove.
* **The failure path now backs off, and it jitters.** The ceiling grows `5 s * 2 ** (failures - 1)`
  up to a `300 s` cap, and the actual wait is drawn uniformly from `[base, ceiling]`. The jitter is
  the load-bearing half -- a shared ladder without it keeps N clients in lockstep however long the
  delays get. A successful refresh resets the counter, and the `stopped` and deadline guards still
  bound every re-arm.
* **An `onRefreshError` handler that throws no longer kills the refresh loop**, and its error no
  longer escapes the timer callback as an `unhandledRejection` -- which Node terminates the process
  on by default.
* The healthy schedule is untouched: the counter is zero unless a refresh has actually failed, so a
  client that never fails computes exactly the delays 7.1.1 did. The login options take a new
  optional `randomFraction` for the jitter, defaulting to `Math.random`, so a test can make a retry
  delay exact.

*****************

## Release ONDEWO NLU Nodejs Client 7.1.1

### Bug fixes

* [[OND211-2418]](https://ondewo.atlassian.net/browse/OND211-2418) **A single failed background refresh permanently ended proactive token renewal.** `refresh()` re-arms the timer on its last line — after the `await` that performs the token request — so when that request threw, `scheduleRefresh()` was never reached and the timer callback's `catch` returned without re-arming. One transient answer from the token endpoint (a 502 from a proxy, a DNS blip, a restarting Keycloak) therefore ended background renewal for the life of the provider, leaving every later token to the stale-token/`UNAUTHENTICATED` fallback. The `catch` now re-arms via `scheduleRefresh(undefined)`, bounded by `MIN_REFRESH_DELAY_IN_S` so a persistently failing endpoint is retried at a floor rather than in a hot loop; the `stopped` and deadline guards still apply, so a stopped provider re-arms nothing.
* The spec now asserts the re-arm and the recovery, and is verified falsifiable — removing the re-arm fails exactly that test. The same defect and fix landed in the python, typescript, js, nodejs and angular NLU clients.

*****************

## Release ONDEWO NLU Nodejs Client 7.1.0

### Improvements

* Tracking API Version [7.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.1.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 7.0.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO NLU Nodejs Client 7.0.0

### Breaking Changes

* Tracking API Version [7.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )
* BREAKING: the `Login` RPC and its `LoginRequest` / `LoginResponse` messages are removed, together with the `POST /v2/login` HTTP binding. Authentication is Keycloak-only - obtain an access token from Keycloak and send it as the `Authorization: Bearer &lt;token&gt;` header on every call.
* Migration: construct the client with `keycloak_url`, `realm`, `client_id`, `user_name` and `password` in the `ClientConfig` and it mints and refreshes the token itself. The identity used must be exempt from 2FA, so create one with `CreateProjectTechnicalUser` and pass its `username` (not an e-mail). `CheckLogin` is not affected and remains the way to probe whether a token is still valid.
* Also in this release: session-feedback CRUD and analytics RPCs on `Sessions`, full notification CRUD on `Users`, and remote-operation container logs/status RPCs on `Operations`.

*****************

## Release ONDEWO NLU Nodejs Client 6.14.0

### Improvements

* Tracking API Version [6.14.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.14.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.13.0

### Improvements

* Tracking API Version [6.13.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.13.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.12.0

### Improvements

* Tracking API Version [6.12.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.12.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.11.0

### Improvements

* Tracking API Version [6.11.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.11.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.10.0

### Improvements

* Tracking API Version [6.10.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.10.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.9.0

### Improvements

* Tracking API Version [6.9.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.9.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.8.0

### Improvements

* Tracking API Version [6.8.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.8.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.7.0

### Improvements

* Tracking API Version [6.7.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.7.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.6.0

### Improvements

* Tracking API Version [6.6.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.6.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.5.0

### Improvements

* Tracking API Version [6.5.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.5.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.4.0

### Improvements

* Tracking API Version [6.4.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.4.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.3.0

### Improvements

* Tracking API Version [6.3.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.3.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.2.0

### Improvements

* Tracking API Version [6.2.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.2.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.1.0

### Improvements

* Tracking API Version [6.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.1.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 6.0.0

### Improvements

* Tracking API Version [6.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 5.0.0

### Improvements

* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.9.0

### Improvements

* Tracking API Version [4.9.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.9.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.8.0

### Improvements

* Tracking API Version [4.8.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.8.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.7.0

### Improvements

* Tracking API Version [4.7.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.7.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.6.0

### Improvements

* Tracking API Version [4.6.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.6.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.5.0

### Improvements

* Tracking API Version [4.5.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.5.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.4.0

### Improvements

* Tracking API Version [4.4.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.4.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.3.0

### Improvements

* Tracking API Version [4.3.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.3.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.2.0

### Improvements

* Tracking API Version [4.2.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.2.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.1.0

### Improvements

* Tracking API Version [4.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.1.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 4.0.0

### Improvements

* Tracking API Version [4.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 3.5.2

### Improvements

* Tracking API Version [3.5.2](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.5.2) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 3.5.0

### Improvements

* Tracking API Version [3.5.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.5.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 3.4.0

### Improvements

* Tracking API Version [3.4.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.4.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 3.3.0

### Improvements

* Tracking API Version [3.3.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.3.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 3.2.0

### Improvements

* Tracking API Version [3.2.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.2.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 3.1.0

### Improvements

* Tracking API Version [3.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.1.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 3.0.0

### Improvements

* Tracking API Version [3.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Nodejs Client 2.14.0

### Improvements

* Tracking API Version 2.14.0

*****************

## Release ONDEWO NLU Node.js Client 2.13.0

### New Features

* Track version 2.13.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.13.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************

## Release ONDEWO NLU Node.js Client 1.1.0

### New Features

* Added first public release
* Javascript and Typescript clients
* Uses version 1.1.0 from <a href="https://github.com/ondewo/ondewo-nlu-api">ONDEWO NLU APIs</a>
