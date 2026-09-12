import { rm } from 'node:fs/promises';
import path from 'node:path';

import { log, runMain } from './_shared/logger.mjs';

const TARGETS = [
  'packages/react',
  'packages/angular',
  'packages/vue',
  'angular-build/src/generated'
];

await runMain('Generated wrapper cleanup', async () => {
  log.title('Ensemble UI · Clean Generated Output');

  for (const target of TARGETS) {
    log.step(`Removing ${target}`);
    await rm(path.resolve(target), { recursive: true, force: true });
  }

  log.done(`Removed ${TARGETS.length} generated output directories.`);
});
