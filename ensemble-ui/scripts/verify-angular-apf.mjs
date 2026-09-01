import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const apf = path.join(root, 'dist-angular');
const esm = path.join(apf, 'fesm2022', 'angular.mjs');
const types = path.join(apf, 'index.d.ts');

const fail = (message) => {
  console.error(`❌ Angular APF verification failed: ${message}`);
  process.exit(1);
};

for (const file of [esm, types]) {
  if (!fs.existsSync(file)) fail(`missing ${path.relative(root, file)}`);
}

const declaration = fs.readFileSync(types, 'utf8');
if (!declaration.includes('EuiButton')) fail('EuiButton is not exported from index.d.ts');
if (!declaration.includes('ɵɵComponentDeclaration')) fail('Angular partial component metadata is missing');

const js = fs.readFileSync(esm, 'utf8');
if (!js.includes('EuiButton')) fail('EuiButton is not present in the FESM bundle');

const illegalSources = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) illegalSources.push(full);
  }
};
walk(apf);
if (illegalSources.length) fail(`raw TypeScript leaked into dist-angular: ${illegalSources.map(f => path.relative(root, f)).join(', ')}`);

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const angularExport = pkg.exports?.['./angular'];
if (angularExport?.import !== './dist-angular/fesm2022/angular.mjs') fail('package export does not target the APF FESM bundle');
if (angularExport?.types !== './dist-angular/index.d.ts') fail('package export does not target the APF declarations');
if ((pkg.files ?? []).some((x) => x.startsWith('angular-build'))) fail('internal angular-build source is included in published files');

console.log('✅ Angular APF verified: precompiled FESM + declarations, no raw Angular source published.');
