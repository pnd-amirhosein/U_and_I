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
const VUE_ROOT = resolve(UI_ROOT, '..', 'ensemble-vue');
const VUE_NODE_MODULES = join(VUE_ROOT, 'node_modules');
const INSTALLED_UI = join(VUE_NODE_MODULES, 'ensemble-ui');
const VUE_ENTRY = join(UI_ROOT, 'dist-vue', 'components.js');

function assertEnvironment() {
  if (!existsSync(VUE_NODE_MODULES)) {
    throw new Error(
      'ensemble-vue/node_modules does not exist. Run npm install once inside ensemble-vue.'
    );
  }

  if (!existsSync(VUE_ENTRY)) {
    throw new Error(
      'dist-vue/components.js does not exist. Build the Vue wrapper before linking.'
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

  const vueExport = pkg.exports?.['./vue']?.import;
  if (vueExport !== './dist-vue/components.js') {
    throw new Error(`Unexpected ensemble-ui/vue export: ${String(vueExport)}`);
  }

  if (!existsSync(join(INSTALLED_UI, 'dist-vue', 'components.js'))) {
    throw new Error(
      'The live package is linked, but dist-vue/components.js is not visible through it.'
    );
  }
}

await runMain('Vue development package link', async () => {
  log.title('Ensemble UI · Vue Live Link');

  log.step('Validating Vue demo and wrapper output');
  assertEnvironment();

  log.step('Replacing installed package with a live filesystem link');
  createLiveLink();

  log.step('Verifying package exports through the live link');
  verifyLink();

  log.done(
    `${relative(VUE_ROOT, INSTALLED_UI)} → ${UI_ROOT}`
  );
});
