// scripts/metadata/build-manifest.ts

import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();

const GENERATED_DIR = path.resolve(
  ROOT,
  'scripts/metadata/generated'
);

const NORMALIZED_INPUT_FILE = path.resolve(
  GENERATED_DIR,
  'props.normalized.json'
);

const MANIFEST_OUTPUT_FILE = path.resolve(
  ROOT,
  'dist/metadata/manifest.json'
);

interface PropConfig {
  attribute?: string;
  mutable?: boolean;
  reflect?: boolean;
}

type NormalizedPropType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'bigint'
  | 'symbol'
  | 'array'
  | 'object'
  | 'function'
  | 'union'
  | 'custom'
  | 'unknown';

interface PropTypeMetadata {
  normalized: NormalizedPropType;
  raw: string;
}

interface NormalizedPropMetadata {
  name: string;
  type: PropTypeMetadata;
  defaultValue?: string;
  optional: boolean;
  config: PropConfig;

  /**
   * Internal extractor/debug metadata.
   * Not shipped in the public manifest.
   */
  decoratorArgs?: string;
}

interface TokenMetadata {
  name: string;
  value?: string;
}

interface NormalizedComponentMetadata {
  tag: string;
  sourceFile: string;
  props: NormalizedPropMetadata[];
  tokens?: TokenMetadata[];
}

interface ManifestPropMetadata {
  name: string;
  type: PropTypeMetadata;
  defaultValue?: string;
  optional: boolean;
  config: PropConfig;
}

interface ManifestComponentMetadata {
  sourceFile: string;
  props: ManifestPropMetadata[];
  tokens: TokenMetadata[];
}

interface EnsembleUIManifest {
  schemaVersion: number;
  components: Record<
    string,
    ManifestComponentMetadata
  >;
}

function buildManifest(
  components: NormalizedComponentMetadata[]
): EnsembleUIManifest {
  const manifest: EnsembleUIManifest = {
    schemaVersion: 1,
    components: {}
  };

  for (const component of components) {
    const props: ManifestPropMetadata[] =
      component.props.map(prop => {
        const {
          decoratorArgs: _decoratorArgs,
          ...publicProp
        } = prop;

        return publicProp;
      });

    manifest.components[component.tag] = {
      sourceFile: component.sourceFile,
      props,
      tokens: component.tokens ?? []
    };
  }

  return manifest;
}

async function writeManifest(
  manifest: EnsembleUIManifest
): Promise<void> {
  await fs.mkdir(
    path.dirname(MANIFEST_OUTPUT_FILE),
    {
      recursive: true
    }
  );

  await fs.writeFile(
    MANIFEST_OUTPUT_FILE,
    JSON.stringify(
      manifest,
      null,
      2
    ) + '\n',
    'utf8'
  );
}

async function cleanGeneratedFiles(): Promise<void> {
  await fs.rm(
    GENERATED_DIR,
    {
      recursive: true,
      force: true
    }
  );
}

async function main(): Promise<void> {
  console.log(
    '📦 Building Ensemble UI manifest...'
  );

  const json =
    await fs.readFile(
      NORMALIZED_INPUT_FILE,
      'utf8'
    );

  const components =
    JSON.parse(
      json
    ) as NormalizedComponentMetadata[];

  const manifest =
    buildManifest(
      components
    );

  await writeManifest(
    manifest
  );

  console.log(
    `✅ ${Object.keys(
      manifest.components
    ).length} components added to manifest.`
  );

  console.log(
    `📄 ${path.relative(
      ROOT,
      MANIFEST_OUTPUT_FILE
    )}`
  );

  await cleanGeneratedFiles();

  console.log(
    '🧹 Temporary metadata files removed.'
  );
}

main().catch(error => {
  console.error(
    '❌ Manifest build failed.'
  );

  console.error(error);

  process.exit(1);
});