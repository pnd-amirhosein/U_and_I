import { existsSync, lstatSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const uiRoot = resolve(scriptDir, '..');
const vueRoot = resolve(uiRoot, '..', 'ensemble-vue');
const vueNodeModules = join(vueRoot, 'node_modules');
const installedUi = join(vueNodeModules, 'ensemble-ui');
const vueEntry = join(uiRoot, 'dist-vue', 'components.js');

if (!existsSync(vueNodeModules)) {
  throw new Error('ensemble-vue/node_modules does not exist. Run npm install once inside ensemble-vue, then run npm run dev:vu again.');
}
if (!existsSync(vueEntry)) {
  throw new Error('dist-vue/components.js does not exist. Vue must be built before linking the dev package.');
}

// Never let npm's install-links setting leave the demo pointed at a stale packed copy.
rmSync(installedUi, { recursive: true, force: true });
symlinkSync(uiRoot, installedUi, process.platform === 'win32' ? 'junction' : 'dir');

if (!lstatSync(installedUi).isSymbolicLink()) {
  throw new Error('Failed to create a live ensemble-ui link in ensemble-vue/node_modules.');
}

const pkg = JSON.parse(readFileSync(join(installedUi, 'package.json'), 'utf8'));
if (pkg.exports?.['./vue']?.import !== './dist-vue/components.js') {
  throw new Error(`Unexpected ensemble-ui/vue export: ${String(pkg.exports?.['./vue']?.import)}`);
}
if (!existsSync(join(installedUi, 'dist-vue', 'components.js'))) {
  throw new Error('Live ensemble-ui link exists, but dist-vue/components.js is not visible through it.');
}

console.log(`✅ Vue dev package linked live: ${relative(vueRoot, installedUi)} -> ${uiRoot}`);
