import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { log, runMain } from './_shared/logger.mjs';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = path.resolve(SCRIPT_DIR, '../packages/icons');
const OUTPUT_FILE = path.resolve(ICONS_DIR, 'index.ts');

async function collectSvgFiles(directory, prefix = '') {
  const entries = await readdir(directory);
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry);
    const info = await stat(fullPath);

    if (info.isDirectory()) {
      files.push(...await collectSvgFiles(fullPath, `${prefix}${entry}/`));
      continue;
    }

    if (entry.endsWith('.svg')) {
      files.push(`${prefix}${entry}`);
    }
  }

  return files;
}

async function createIconEntry(file) {
  const fullPath = path.join(ICONS_DIR, file);
  let content = await readFile(fullPath, 'utf8');

  content = content
    .replace(/\r?\n|\r/g, '')
    .replace(/'/g, "\\'");

  const key = file.slice(0, -'.svg'.length);
  return `  '${key}': '${content}'`;
}

await runMain('Icon generation', async () => {
  log.title('Ensemble UI · Generate Icon Registry');

  log.step('Scanning SVG assets');
  const svgFiles = (await collectSvgFiles(ICONS_DIR)).sort();

  log.step(`Serializing ${svgFiles.length} icons`);
  const entries = await Promise.all(svgFiles.map(createIconEntry));

  const output =
    `export const icons: Record<string,string> = {\n${entries.join(',\n')}\n};\n`;

  await writeFile(OUTPUT_FILE, output, 'utf8');

  log.done(`Generated packages/icons/index.ts with ${svgFiles.length} icons.`);
});
