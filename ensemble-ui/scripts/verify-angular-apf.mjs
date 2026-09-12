import fs from 'node:fs';
import path from 'node:path';

import { log, runMain } from './_shared/logger.mjs';

const ROOT = process.cwd();
const APF_DIR = path.join(ROOT, 'dist-angular');
const ESM_FILE = path.join(APF_DIR, 'fesm2022', 'angular.mjs');
const TYPES_FILE = path.join(APF_DIR, 'index.d.ts');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function collectRawTypeScript(directory) {
  const leaked = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      leaked.push(...collectRawTypeScript(fullPath));
    } else if (entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
      leaked.push(fullPath);
    }
  }

  return leaked;
}

await runMain('Angular APF verification', async () => {
  log.title('Ensemble UI · Verify Angular Package');

  log.step('Checking required APF output files');
  for (const file of [ESM_FILE, TYPES_FILE]) {
    assert(fs.existsSync(file), `Missing ${path.relative(ROOT, file)}`);
  }

  log.step('Checking Angular declarations');
  const declaration = fs.readFileSync(TYPES_FILE, 'utf8');
  assert(declaration.includes('EuiButton'), 'EuiButton is not exported from index.d.ts');
  assert(
    declaration.includes('ɵɵComponentDeclaration'),
    'Angular partial component metadata is missing'
  );

  log.step('Checking FESM bundle');
  const bundle = fs.readFileSync(ESM_FILE, 'utf8');
  assert(bundle.includes('EuiButton'), 'EuiButton is not present in the FESM bundle');

  log.step('Checking for leaked raw TypeScript');
  const illegalSources = collectRawTypeScript(APF_DIR);
  assert(
    illegalSources.length === 0,
    `Raw TypeScript leaked into dist-angular: ${illegalSources
      .map(file => path.relative(ROOT, file))
      .join(', ')}`
  );

  log.step('Checking package.json Angular exports');
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
  const angularExport = pkg.exports?.['./angular'];

  assert(
    angularExport?.import === './dist-angular/fesm2022/angular.mjs',
    'package export does not target the APF FESM bundle'
  );
  assert(
    angularExport?.types === './dist-angular/index.d.ts',
    'package export does not target the APF declarations'
  );
  assert(
    !(pkg.files ?? []).some(entry => entry.startsWith('angular-build')),
    'internal angular-build source is included in published files'
  );

  log.done('Angular APF verified: FESM, declarations, exports, and publish contents are valid.');
});
