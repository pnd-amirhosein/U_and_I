import { execSync } from 'child_process';
import { rmSync } from 'fs';
import { resolve } from 'path';

const run = (cmd) => {
  console.log(`\x1b[36m> ${cmd}\x1b[0m`);
  execSync(cmd, { stdio: 'inherit' });
};

try {
  console.log('🏗 Building Stencil + Vue wrapper...');
  // Vue dev is isolated from Angular APF and React packaging.
  run('npm run build:core && npm run build:vue');

  console.log('🔗 Linking fresh local ensemble-ui into Vue demo...');
  run('node scripts/link-vue-dev-package.mjs');

  rmSync(resolve('../ensemble-vue/node_modules/.vite'), { recursive: true, force: true });
  rmSync(resolve('../ensemble-vue/node_modules/.vite-temp'), { recursive: true, force: true });

  console.log('🚀 Starting Vue app...');
  run('cd ../ensemble-vue && npm run dev -- --force');
} catch (err) {
  console.error('❌ Vue build orchestration failed:', err);
  process.exit(1);
}
