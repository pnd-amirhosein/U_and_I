import fs from 'node:fs/promises';

import { PATHS } from './config';
import { buildManifest } from './steps/build-manifest';
import { extractProps } from './steps/extract-props';
import { extractTokens } from './steps/extract-tokens';
import { normalizeProps } from './steps/normalize-props';

async function cleanTemporaryFiles(): Promise<void> {
  await fs.rm(PATHS.generatedDir, { recursive: true, force: true });
}

async function main(): Promise<void> {
  console.log('🧪 Building Ensemble UI metadata...');

  await cleanTemporaryFiles();
  await extractProps();
  await normalizeProps();
  await extractTokens();
  await buildManifest();
  await cleanTemporaryFiles();

  console.log('✅ Metadata ready: dist/metadata/');
}

main().catch(async error => {
  // Keep failed intermediate files for debugging.
  console.error('❌ Metadata build failed.');
  console.error(error);
  process.exitCode = 1;
});
