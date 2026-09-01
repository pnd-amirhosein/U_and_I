import { access, readFile, readdir } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'dist-react/components.js',
  'dist-react/components.d.ts',
];

for (const file of required) {
  await access(path.join(root, file), constants.R_OK);
}

const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
const reactExport = pkg.exports?.['./react'];
if (reactExport?.import !== './dist-react/components.js' || reactExport?.types !== './dist-react/components.d.ts') {
  throw new Error('package.json ./react export is not pointing to dist-react/components.{js,d.ts}');
}

const files = await readdir(path.join(root, 'dist-react'));
const jsCount = files.filter((file) => file.endsWith('.js')).length;
const dtsCount = files.filter((file) => file.endsWith('.d.ts')).length;
if (jsCount < 2 || dtsCount < 2) {
  throw new Error(`React output looks incomplete (${jsCount} js / ${dtsCount} d.ts files).`);
}

const componentsJs = await readFile(path.join(root, 'dist-react/components.js'), 'utf8');
if (!componentsJs.includes('EuiButton') || !componentsJs.includes('EuiStat')) {
  throw new Error('React barrel is missing expected EUI exports.');
}

console.log(`✅ React build verified: ${jsCount} JS + ${dtsCount} declaration files; ensemble-ui/react is publishable.`);
