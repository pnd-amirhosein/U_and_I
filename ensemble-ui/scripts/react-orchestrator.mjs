import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

import { log, runMain } from './_shared/logger.mjs';
import { run } from './_shared/process.mjs';

const REACT_ROOT = resolve('../ensemble-react');

await runMain('React development orchestration', async () => {
  log.title('Ensemble UI · React Dev', 'Build, link the live package, clear Vite caches, and launch the demo.');

  log.step('Building core and React wrapper');
  run('npm run build:core && npm run build:react');
  log.success('Core and React wrapper built.');

  log.step('Linking the fresh local package');
  run('node scripts/link-react-dev-package.mjs');

  log.step('Clearing Vite dependency caches');
  await Promise.all([
    rm(resolve(REACT_ROOT, 'node_modules/.vite'), { recursive: true, force: true }),
    rm(resolve(REACT_ROOT, 'node_modules/.vite-temp'), { recursive: true, force: true })
  ]);
  log.success('Vite caches cleared.');

  log.step('Starting React demo');
  run('npm run dev -- --force', { cwd: REACT_ROOT });
});
