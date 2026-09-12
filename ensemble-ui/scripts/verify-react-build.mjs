import { access, readFile, readdir } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

import { log, runMain } from './_shared/logger.mjs';

const ROOT = process.cwd();
const REQUIRED_FILES = [
  'dist-react/components.js',
  'dist-react/components.d.ts',
  'dist/types/components.d.ts'
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

await runMain('React build verification', async () => {
  log.title('Ensemble UI · Verify React Package');

  log.step('Checking required React output files');
  for (const file of REQUIRED_FILES) {
    await access(path.join(ROOT, file), constants.R_OK);
  }

  log.step('Checking package.json React exports');
  const pkg = JSON.parse(await readFile(path.join(ROOT, 'package.json'), 'utf8'));
  const reactExport = pkg.exports?.['./react'];

  assert(
    reactExport?.import === './dist-react/components.js' &&
      reactExport?.types === './dist-react/components.d.ts',
    'package.json ./react export is not pointing to dist-react/components.{js,d.ts}'
  );

  const stencilTypesExport = pkg.exports?.['./dist/components'];
  assert(
    stencilTypesExport?.types === './dist/types/components.d.ts',
    'package.json ./dist/components type export is required by generated React declarations'
  );

  log.step('Checking generated React file set');
  const files = await readdir(path.join(ROOT, 'dist-react'));
  const jsCount = files.filter(file => file.endsWith('.js')).length;
  const dtsCount = files.filter(file => file.endsWith('.d.ts')).length;

  assert(
    jsCount >= 2 && dtsCount >= 2,
    `React output looks incomplete (${jsCount} JS / ${dtsCount} d.ts files)`
  );

  log.step('Checking expected component exports');
  const componentsJs = await readFile(path.join(ROOT, 'dist-react/components.js'), 'utf8');
  for (const expected of ['EuiButton', 'EuiStat', 'EuiCalendar']) {
    assert(componentsJs.includes(expected), `React barrel is missing ${expected}`);
  }

  log.done(`React build verified: ${jsCount} JS + ${dtsCount} declaration files.`);
});
