// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Regression guard for the package entry point.
//
// `public-api.d.ts` / `public-api.js` are GENERATED - the proto compiler deletes and rewrites
// them on every `make build` - and `create_npm_package` copies them into `npm/` as the package's
// `typings` / `main`. They used to list the proto stubs only, so `auth/` shipped inside the
// package while nothing re-exported it: `import { login } from '@ondewo/nlu-client-nodejs'`
// did not resolve and consumers could only deep-import the module.
//
// The lines are emitted by ondewo-proto-compiler >= 5.13.0 (append-auth-exports.sh; CommonJS .js barrel since 5.15.5). This asserts
// the artifacts as text rather than importing them - importing would pull in every generated
// protobuf module for no added signal - so a compiler downgrade that drops the re-export fails
// here instead of silently shipping an unusable entry point.
//
// It lives under auth/ because the test build compiles specs from auth/ and examples/ only.

import { strict as assert } from 'assert';
import { readFileSync } from 'fs';
import { join } from 'path';
import { describe, it } from 'node:test';

const REPO_ROOT: string = join(__dirname, '..', '..');
const AUTH_MODULES: string[] = ['offlineTokenProvider', 'grpcChannel'];

/**
 * The line the proto compiler (>= 5.15.5) writes for an auth module: a star export in the
 * `.d.ts` barrel, a `reexport(require(...))` in the CommonJS `.js` barrel.
 *
 * @param artifact - `public-api.d.ts` or `public-api.js`.
 * @param module - Basename of the auth module.
 * @returns The expected barrel line.
 */
function exportLine(artifact: string, module: string): string {
	if (artifact.endsWith('.d.ts')) {
		return `export * from './auth/${module}';`;
	}
	return `reexport(require('./auth/${module}'));`;
}

describe('package public API entry point', () => {
	for (const artifact of ['public-api.d.ts', 'public-api.js']) {
		for (const module of AUTH_MODULES) {
			const line: string = exportLine(artifact, module);

			it(`contains ${line} exactly once in ${artifact}`, () => {
				const contents: string = readFileSync(join(REPO_ROOT, artifact), 'utf8');
				const occurrences: number = contents.split(line).length - 1;

				assert.equal(
					occurrences,
					1,
					`${artifact} must re-export auth/${module} exactly once - regenerate with ondewo-proto-compiler >= 5.15.5`
				);
			});
		}
	}

	it('public-api.js is CommonJS (no ES export lines)', () => {
		const contents: string = readFileSync(join(REPO_ROOT, 'public-api.js'), 'utf8');

		assert.deepEqual(
			contents.split('\n').filter((line: string): boolean => line.startsWith('export ')),
			[]
		);
	});
});
