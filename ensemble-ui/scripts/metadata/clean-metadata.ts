// scripts/metadata/clean-metadata.ts

import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();

const GENERATED_DIR = path.resolve(
  ROOT,
  'scripts/metadata/generated'
);

async function main(): Promise<void> {
  console.log('🧹 Cleaning generated metadata...');

  await fs.rm(
    GENERATED_DIR,
    {
      recursive: true,
      force: true
    }
  );

  console.log(
    `✅ Removed: ${path.relative(
      ROOT,
      GENERATED_DIR
    )}`
  );
}

main().catch(error => {
  console.error(
    '❌ Metadata cleanup failed.'
  );

  console.error(error);

  process.exit(1);
});