import path from 'node:path';

export const ROOT = process.cwd();

export const PATHS = {
  componentsGlob: 'src/components/*/*.tsx',
  tokenSource: path.resolve(ROOT, 'packages/core/theme/tokens.scss'),
  generatedDir: path.resolve(ROOT, 'scripts/metadata/generated'),
  rawProps: path.resolve(ROOT, 'scripts/metadata/generated/props.raw.json'),
  normalizedProps: path.resolve(ROOT, 'scripts/metadata/generated/props.normalized.json'),
  manifestDir: path.resolve(ROOT, 'dist/metadata'),
  manifest: path.resolve(ROOT, 'dist/metadata/manifest.json'),
  publicTypes: path.resolve(ROOT, 'dist/metadata/index.d.ts'),
  publicTypesSource: path.resolve(ROOT, 'scripts/metadata/types/manifest.ts')
} as const;
