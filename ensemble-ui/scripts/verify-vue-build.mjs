import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const js = resolve(root, 'dist-vue/components.js');
const dts = resolve(root, 'dist-vue/components.d.ts');

if (!existsSync(js) || !existsSync(dts)) {
  throw new Error('Vue build is incomplete: dist-vue/components.js and components.d.ts are required.');
}

const jsText = readFileSync(js, 'utf8');
const dtsText = readFileSync(dts, 'utf8');
if (!jsText.includes('EuiButton') || !dtsText.includes('EuiButton')) {
  throw new Error('Vue build does not export EuiButton; generated wrapper output is incomplete.');
}

const unexpectedTs = readdirSync(resolve(root, 'dist-vue')).filter((name) => name.endsWith('.ts') && !name.endsWith('.d.ts'));
if (unexpectedTs.length) {
  throw new Error(`Raw Vue TypeScript leaked into dist-vue: ${unexpectedTs.join(', ')}`);
}

console.log('✅ Vue build verified: dist-vue/components.js + declarations are ready.');
