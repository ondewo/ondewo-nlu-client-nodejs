# Examples

Minimal, runnable examples for the `@ondewo/nlu-client-nodejs` SDK.

## `listAgents.ts`

Authenticates with the Keycloak **offline-token** flow and calls the NLU `Agents.ListAgents` RPC.

Authentication uses the current bearer convention (post-Keycloak migration): `login(...)` from
[`../auth/offlineTokenProvider.ts`](../auth/offlineTokenProvider.ts) returns a provider whose
`getAuthorizationHeader()` yields the `Authorization: Bearer <token>` gRPC metadata value. The legacy
`cai-token` / HTTP-basic / `users.login()` credentials no longer exist.

The RPC call is factored into `fetchAgents(client, authorizationHeader, pageSize)` so it can be unit
tested against a **mocked** gRPC client with no live server; `main()` wires the real `AgentsClient`
and `login()` together.

### Run against a server

Configuration is read from [`environment.env`](./environment.env), which each example loads via
`dotenv` (path resolved relative to the script, so `cwd` does not matter). Copy your real connection
and technical-user credentials into that file — it ships with non-secret placeholders and the
canonical variable names (`ONDEWO_HOST`, `ONDEWO_PORT`, `KEYCLOAK_URL`, `KEYCLOAK_REALM`,
`KEYCLOAK_CLIENT_ID`, `KEYCLOAK_USER_NAME`, `KEYCLOAK_PASSWORD`, ...). Then compile and run:

```sh
tsc examples/listAgents.ts --ignoreConfig --module commonjs --target es2020 --strict \
  --lib es2020,dom --skipLibCheck --types node --typeRoots ./node_modules/@types
node examples/listAgents.js
```

## Tests (no live server)

The example ships a mock-based unit test (`listAgents.spec.ts`) using Node's built-in test runner —
the same convention as the auth provider. Both the gRPC client and the Keycloak token endpoint are
mocked, so the tests need no network:

```sh
tsc examples/listAgents.ts examples/listAgents.spec.ts --ignoreConfig --module commonjs \
  --target es2020 --strict --lib es2020,dom --skipLibCheck --types node \
  --typeRoots ./node_modules/@types --outDir .test-build
ln -sfn ../api .test-build/api
node --test .test-build/examples/listAgents.spec.js
```
