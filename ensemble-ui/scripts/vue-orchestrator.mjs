import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

import { log, runMain } from './_shared/logger.mjs';
import { run } from './_shared/process.mjs';

const VUE_ROOT = resolve('../ensemble-vue');

await runMain('Vue development orchestration', async () => {
  log.title('Ensemble UI · Vue Dev', 'Build, link the live package, clear Vite caches, and launch the demo.');

  log.step('Building core and Vue wrapper');
  run('npm run build:core && npm run build:vue');
  log.success('Core and Vue wrapper built.');

  log.step('Linking the fresh local package');
  run('node scripts/link-vue-dev-package.mjs');

  log.step('Clearing Vite dependency caches');
  await Promise.all([
    rm(resolve(VUE_ROOT, 'node_modules/.vite'), { recursive: true, force: true }),
    rm(resolve(VUE_ROOT, 'node_modules/.vite-temp'), { recursive: true, force: true })
  ]);
  log.success('Vite caches cleared.');

  log.step('Starting Vue demo');
  run('npm run dev -- --force', { cwd: VUE_ROOT });
});
