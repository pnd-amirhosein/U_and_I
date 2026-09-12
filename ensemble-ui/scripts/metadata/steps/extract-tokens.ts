import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';

import { PATHS, ROOT } from '../config';
import type { ManifestToken } from '../types/manifest';
import type { NormalizedComponent } from '../types/pipeline';
import { readJson, writeJson } from '../utils/json';

function tokenDefinitions(scss: string): Map<string, string> {
  const definitions = new Map<string, string>();
  const regex = /(--[A-Za-z0-9_-]+)\s*:\s*([^;]+);/g;

  for (const match of scss.matchAll(regex)) {
    definitions.set(match[1].trim(), match[2].trim().replace(/\s+/g, ' '));
  }

  return definitions;
}

function usedTokenNames(scss: string): string[] {
  const names = new Set<string>();
  const regex = /var\(\s*(--[A-Za-z0-9_-]+)/g;

  for (const match of scss.matchAll(regex)) names.add(match[1]);
  return [...names];
}

async function componentTokens(
  component: NormalizedComponent,
  definitions: Map<string, string>
): Promise<ManifestToken[]> {
  const directory = path.dirname(path.resolve(ROOT, component.sourceFile));
  const files = await fg('**/*.scss', { cwd: directory, absolute: true, onlyFiles: true });
  const names = new Set<string>();

  for (const file of files) {
    const scss = await fs.readFile(file, 'utf8');
    for (const name of usedTokenNames(scss)) names.add(name);
  }

  return [...names]
    .sort((a, b) => a.localeCompare(b))
    .map(name => ({ name, value: definitions.get(name) }));
}

export async function extractTokens(): Promise<void> {
  const components = await readJson<NormalizedComponent[]>(PATHS.normalizedProps);
  const definitions = tokenDefinitions(await fs.readFile(PATHS.tokenSource, 'utf8'));

  let usages = 0;
  let unresolved = 0;

  for (const component of components) {
    component.tokens = await componentTokens(component, definitions);
    usages += component.tokens.length;
    unresolved += component.tokens.filter(token => token.value === undefined).length;
  }

  await writeJson(PATHS.normalizedProps, components);

  console.log(`🎨 Tokens: ${definitions.size} defined, ${usages} component usages`);
  if (unresolved) console.warn(`⚠️ Tokens: ${unresolved} usages could not be resolved`);
}
