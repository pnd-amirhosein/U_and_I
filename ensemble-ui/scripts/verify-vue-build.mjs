import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { log, runMain } from './_shared/logger.mjs';

const ROOT = process.cwd();
const COMPONENTS_JS = resolve(ROOT, 'dist-vue/components.js');
const COMPONENTS_DTS = resolve(ROOT, 'dist-vue/components.d.ts');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

await runMain('Vue build verification', async () => {
  log.title('Ensemble UI · Verify Vue Package');

  log.step('Checking required Vue output files');
  assert(
    existsSync(COMPONENTS_JS) && existsSync(COMPONENTS_DTS),
    'Vue build is incomplete: dist-vue/components.js and components.d.ts are required'
  );

  log.step('Checking expected component exports');
  const jsText = readFileSync(COMPONENTS_JS, 'utf8');
  const dtsText = readFileSync(COMPONENTS_DTS, 'utf8');
  assert(
    jsText.includes('EuiButton') && dtsText.includes('EuiButton'),
    'Vue build does not export EuiButton; generated wrapper output is incomplete'
  );

  log.step('Checking for leaked raw TypeScript');
  const unexpectedTs = readdirSync(resolve(ROOT, 'dist-vue')).filter(
    name => name.endsWith('.ts') && !name.endsWith('.d.ts')
  );
  assert(
    unexpectedTs.length === 0,
    `Raw Vue TypeScript leaked into dist-vue: ${unexpectedTs.join(', ')}`
  );

  log.done('Vue build verified: JavaScript bundle and declarations are ready.');
});
