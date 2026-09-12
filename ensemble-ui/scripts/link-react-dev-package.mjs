import {
  existsSync,
  lstatSync,
  readFileSync,
  rmSync,
  symlinkSync
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { log, runMain } from './_shared/logger.mjs';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const UI_ROOT = resolve(SCRIPT_DIR, '..');
const REACT_ROOT = resolve(UI_ROOT, '..', 'ensemble-react');
const REACT_NODE_MODULES = join(REACT_ROOT, 'node_modules');
const INSTALLED_UI = join(REACT_NODE_MODULES, 'ensemble-ui');
const REACT_ENTRY = join(UI_ROOT, 'dist-react', 'components.js');

function assertEnvironment() {
  if (!existsSync(REACT_NODE_MODULES)) {
    throw new Error(
      'ensemble-react/node_modules does not exist. Run npm install once inside ensemble-react.'
    );
  }

  if (!existsSync(REACT_ENTRY)) {
    throw new Error(
      'dist-react/components.js does not exist. Build the React wrapper before linking.'
    );
  }
}

function createLiveLink() {
  rmSync(INSTALLED_UI, { recursive: true, force: true });
  symlinkSync(
    UI_ROOT,
    INSTALLED_UI,
    process.platform === 'win32' ? 'junction' : 'dir'
  );

  if (!lstatSync(INSTALLED_UI).isSymbolicLink()) {
    throw new Error('Failed to create the live Ensemble UI link.');
  }
}

function verifyLink() {
  const pkg = JSON.parse(
    readFileSync(join(INSTALLED_UI, 'package.json'), 'utf8')
  );

  const reactExport = pkg.exports?.['./react']?.import;
  if (reactExport !== './dist-react/components.js') {
    throw new Error(`Unexpected ensemble-ui/react export: ${String(reactExport)}`);
  }

  if (!existsSync(join(INSTALLED_UI, 'dist-react', 'components.js'))) {
    throw new Error(
      'The live package is linked, but dist-react/components.js is not visible through it.'
    );
  }
}

await runMain('React development package link', async () => {
  log.title('Ensemble UI · React Live Link');

  log.step('Validating React demo and wrapper output');
  assertEnvironment();

  log.step('Replacing installed package with a live filesystem link');
  createLiveLink();

  log.step('Verifying package exports through the live link');
  verifyLink();

  log.done(
    `${relative(REACT_ROOT, INSTALLED_UI)} → ${UI_ROOT}`
  );
});
