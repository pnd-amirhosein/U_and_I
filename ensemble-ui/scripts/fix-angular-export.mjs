import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { log, runMain } from './_shared/logger.mjs';

const INDEX_FILE = path.resolve('packages/angular/index.ts');
const REQUIRED_EXPORT = "export * from './components';";

await runMain('Angular export patch', async () => {
  log.title('Ensemble UI · Angular Export Patch');
  log.step('Checking packages/angular/index.ts');

  const content = await readFile(INDEX_FILE, 'utf8');

  if (content.includes(REQUIRED_EXPORT)) {
    log.success('Angular components export is already present.');
    return;
  }

  await writeFile(INDEX_FILE, `${REQUIRED_EXPORT}\n\n${content}`, 'utf8');
  log.success('Angular components export added.');
});
