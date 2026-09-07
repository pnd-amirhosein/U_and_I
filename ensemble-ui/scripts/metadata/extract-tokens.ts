import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';

const ROOT = process.cwd();

const RAW_PROPS_FILE = path.resolve(
  ROOT,
  'scripts/metadata/generated/props.normalized.json'
);

const TOKEN_SOURCE_FILE = path.resolve(
  ROOT,
  'packages/core/theme/tokens.scss'
);

interface RawPropMetadata {
  name: string;
  type?: string;
  defaultValue?: string;
  optional: boolean;

  config: {
    attribute?: string;
    mutable?: boolean;
    reflect?: boolean;
  };

  decoratorArgs?: string;
}

interface RawTokenMetadata {
  name: string;
  value?: string;
}

interface RawComponentMetadata {
  tag: string;
  sourceFile: string;
  props: RawPropMetadata[];
  tokens?: RawTokenMetadata[];
}

/**
 * Finds CSS custom-property usages such as:
 *
 * var(--color-primary-300)
 * var(--color-primary-300, red)
 * var( --color-primary-300 )
 *
 * We intentionally extract only the token name.
 */
function extractUsedTokenNames(
  scss: string
): string[] {
  const regex =
    /var\(\s*(--[A-Za-z0-9_-]+)/g;

  const tokens = new Set<string>();

  let match: RegExpExecArray | null;

  while ((match = regex.exec(scss)) !== null) {
    tokens.add(match[1]);
  }

  return [...tokens];
}

/**
 * Reads token definitions from tokens.scss.
 *
 * Example:
 *
 * --color-primary-300: #0066ff;
 *
 * becomes:
 *
 * {
 *   "--color-primary-300": "#0066ff"
 * }
 */
function extractTokenDefinitions(
  scss: string
): Map<string, string> {
  const definitions =
    new Map<string, string>();

  /*
   * Supports values such as:
   *
   * #0066ff
   * 1rem
   * rgba(...)
   * var(--something)
   * calc(...)
   *
   * Values are captured until the next semicolon.
   */
  const regex =
    /(--[A-Za-z0-9_-]+)\s*:\s*([^;]+);/g;

  let match: RegExpExecArray | null;

  while ((match = regex.exec(scss)) !== null) {
    const name = match[1].trim();

    const value = match[2]
      .trim()
      .replace(/\s+/g, ' ');

    definitions.set(
      name,
      value
    );
  }

  return definitions;
}

/**
 * Finds SCSS files belonging to one component.
 *
 * Example:
 *
 * source:
 * src/components/autocomplete/autocomplete.tsx
 *
 * searched:
 * src/components/autocomplete/**\/*.scss
 */
async function findComponentScssFiles(
  component: RawComponentMetadata
): Promise<string[]> {
  const absoluteTsxPath =
    path.resolve(
      ROOT,
      component.sourceFile
    );

  const componentDirectory =
    path.dirname(
      absoluteTsxPath
    );

  return fg('**/*.scss', {
    cwd: componentDirectory,
    absolute: true,
    onlyFiles: true
  });
}

/**
 * Extract every token used by a component's SCSS.
 */
async function extractComponentTokens(
  component: RawComponentMetadata,
  definitions: Map<string, string>
): Promise<RawTokenMetadata[]> {
  const scssFiles =
    await findComponentScssFiles(
      component
    );

  const usedTokens =
    new Set<string>();

  for (const scssFile of scssFiles) {
    const scss =
      await fs.readFile(
        scssFile,
        'utf8'
      );

    for (
      const token of
      extractUsedTokenNames(scss)
    ) {
      usedTokens.add(token);
    }
  }

  /*
   * Sort for deterministic JSON output.
   */
  return [...usedTokens]
    .sort((a, b) =>
      a.localeCompare(b)
    )
    .map(name => ({
      name,
      value:
        definitions.get(name)
    }));
}

async function main(): Promise<void> {
  console.log(
    '🎨 Extracting Ensemble UI component tokens...'
  );

  /*
   * Read the raw component metadata produced
   * by extract-props.ts.
   */
  const rawJson =
    await fs.readFile(
      RAW_PROPS_FILE,
      'utf8'
    );

  const components =
    JSON.parse(
      rawJson
    ) as RawComponentMetadata[];

  /*
   * Load the global token source.
   */
  const tokenSource =
    await fs.readFile(
      TOKEN_SOURCE_FILE,
      'utf8'
    );

  const tokenDefinitions =
    extractTokenDefinitions(
      tokenSource
    );

  console.log(
    `🎨 ${tokenDefinitions.size} token definitions found.`
  );

  let totalUsage = 0;
  let unresolvedCount = 0;

  for (
    const component of components
  ) {
    const tokens =
      await extractComponentTokens(
        component,
        tokenDefinitions
      );

    component.tokens = tokens;

    totalUsage += tokens.length;

    unresolvedCount +=
      tokens.filter(
        token =>
          token.value === undefined
      ).length;

    console.log(
      `  ${component.tag}: ${tokens.length} tokens`
    );
  }

  /*
   * Rewrite props.raw.json with the newly
   * enriched token information.
   */
  await fs.writeFile(
    RAW_PROPS_FILE,
    JSON.stringify(
      components,
      null,
      2
    ) + '\n',
    'utf8'
  );

  console.log('');
  console.log(
    `✅ ${components.length} components processed.`
  );

  console.log(
    `✅ ${totalUsage} component token usages found.`
  );

  if (unresolvedCount > 0) {
    console.warn(
      `⚠️ ${unresolvedCount} token usages could not be resolved from tokens.scss.`
    );
  }

  console.log(
    `📦 Updated: ${path.relative(
      ROOT,
      RAW_PROPS_FILE
    )}`
  );
}

main().catch(error => {
  console.error(
    '❌ Token extraction failed.'
  );

  console.error(error);

  process.exit(1);
});