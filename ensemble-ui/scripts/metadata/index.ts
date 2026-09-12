import fs from 'node:fs/promises';

import { log, runMain } from '../_shared/logger.mjs';
import { PATHS } from './config';
import { buildManifest } from './steps/build-manifest';
import { extractProps } from './steps/extract-props';
import { extractTokens } from './steps/extract-tokens';
import { normalizeProps } from './steps/normalize-props';

async function cleanTemporaryFiles(): Promise<void> {
  await fs.rm(PATHS.generatedDir, { recursive: true, force: true });
}

async function main(): Promise<void> {
  await runMain('Metadata build', async () => {
    log.title(
      'Ensemble UI · Build Metadata',
      'Extract component facts, normalize them, resolve tokens, and ship the public manifest.'
    );

    log.step('Preparing temporary metadata workspace');
    await cleanTemporaryFiles();

    await extractProps();
    await normalizeProps();
    await extractTokens();
    await buildManifest();

    log.step('Removing temporary metadata files');
    await cleanTemporaryFiles();

    log.done('Metadata ready in dist/metadata/.');
  });
}

void main();
