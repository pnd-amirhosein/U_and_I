import { existsSync, lstatSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const uiRoot = resolve(scriptDir, '..');
const reactRoot = resolve(uiRoot, '..', 'ensemble-react');
const reactNodeModules = join(reactRoot, 'node_modules');
const installedUi = join(reactNodeModules, 'ensemble-ui');
const reactEntry = join(uiRoot, 'dist-react', 'components.js');

if (!existsSync(reactNodeModules)) {
  throw new Error(
    'ensemble-react/node_modules does not exist. Run npm install once inside ensemble-react, then run npm run dev:rc again.'
  );
}

if (!existsSync(reactEntry)) {
  throw new Error('dist-react/components.js does not exist. React must be built before linking the dev package.');
}

// A `file:../ensemble-ui` dependency is normally a symlink, but npm\'s
// `install-links=true` setting turns it into a packed/copy install. That copy
// becomes stale whenever EUI is rebuilt. Force the demo app to use a live
// filesystem link so Vite always sees the just-generated dist-react output.
rmSync(installedUi, { recursive: true, force: true });
symlinkSync(uiRoot, installedUi, process.platform === 'win32' ? 'junction' : 'dir');

const stat = lstatSync(installedUi);
if (!stat.isSymbolicLink()) {
  throw new Error('Failed to create a live ensemble-ui link in ensemble-react/node_modules.');
}

const pkg = JSON.parse(readFileSync(join(installedUi, 'package.json'), 'utf8'));
const reactExport = pkg.exports?.['./react']?.import;
if (reactExport !== './dist-react/components.js') {
  throw new Error(`Unexpected ensemble-ui/react export: ${String(reactExport)}`);
}
if (!existsSync(join(installedUi, 'dist-react', 'components.js'))) {
  throw new Error('Live ensemble-ui link exists, but dist-react/components.js is not visible through it.');
}

console.log(`✅ React dev package linked live: ${relative(reactRoot, installedUi)} -> ${uiRoot}`);
