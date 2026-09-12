import { rm } from 'node:fs/promises';
import path from 'node:path';

import { log, runMain } from './_shared/logger.mjs';

const TARGETS = [
  'dist',
  'dist-angular',
  'dist-react',
  'dist-vue',
  'www',
  'loader',
  '../ensemble-angular/.angular',
  'src/components/icons'
];

await runMain('Build artifact cleanup', async () => {
  log.title('Ensemble UI · Purge Previous Build');

  for (const target of TARGETS) {
    log.step(`Removing ${target}`);
    await rm(path.resolve(target), { recursive: true, force: true });
  }

  log.done(`Removed ${TARGETS.length} previous build locations.`);
});
