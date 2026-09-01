import { execSync } from 'child_process';
import { rmSync } from 'fs';
import { resolve } from 'path';

const run = (cmd) => {
  console.log(`\x1b[36m> ${cmd}\x1b[0m`);
  execSync(cmd, { stdio: 'inherit' });
};

try {
  console.log('🏗 Building Stencil + React wrapper...');
  // React dev is intentionally isolated from Angular APF packaging.
  run('npm run build:core && npm run build:react');

  console.log('🔗 Linking fresh local ensemble-ui into React demo...');
  run('node scripts/link-react-dev-package.mjs');

  // Clear Vite optimized dependency caches after regenerating the local package.
  rmSync(resolve('../ensemble-react/node_modules/.vite'), { recursive: true, force: true });
  rmSync(resolve('../ensemble-react/node_modules/.vite-temp'), { recursive: true, force: true });

  console.log('🚀 Starting React app...');
  run('cd ../ensemble-react && npm run dev -- --force');
} catch (err) {
  console.error('❌ React build orchestration failed:', err);
  process.exit(1);
}
