import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import chalk from "chalk";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust this to your icons folder
const ICONS_DIR = path.resolve(__dirname, '../packages/icons');
const OUTPUT_FILE = path.resolve(ICONS_DIR, 'index.ts');

// Recursively get all .svg files
function walk(dir, prefix = '') {
  return fs.readdirSync(dir).flatMap(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      return walk(fullPath, `${prefix}${file}/`);
    }
    if (file.endsWith('.svg')) return [`${prefix}${file}`];
    return [];
  });
}

const svgFiles = walk(ICONS_DIR);

// Build export lines
const exports = svgFiles.map(file => {
  const fullPath = path.join(ICONS_DIR, file);
  let content = fs.readFileSync(fullPath, 'utf-8');

  // Remove newlines and escape single quotes
  content = content.replace(/\r?\n|\r/g, '').replace(/'/g, "\\'");

  const key = file.replace('.svg', '');
  return `  '${key}': '${content}'`;
});

// Write index.ts
const tsContent = `export const icons: Record<string,string> = {\n${exports.join(',\n')}\n};\n`;

fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf-8');

console.log(`${chalk.green(getClock())}  Icons generated!`);

function getClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    return `[${h}:${m}.0]`;
}
