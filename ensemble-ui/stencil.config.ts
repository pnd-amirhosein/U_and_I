import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';

const postcssPresetEnv = require('postcss-preset-env');
const postcssNesting = require('postcss-nesting'); // optional
const cssnano = require('cssnano');

const postcssPlugins = [
  postcssPresetEnv({
    stage: 3,
    features: {
      'nesting-rules': true
    },
    autoprefixer: { grid: true }
  }),
  postcssNesting(),
  ...(process.env.NODE_ENV === 'production' ? [cssnano({ preset: 'default' })] : [])
];

export const config: Config = {
  namespace: 'ensemble-ui',
  globalStyle: 'packages/core/theme/global.scss',
  plugins: [
    sass(),
    postcss({ plugins: postcssPlugins })
  ],
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'dist-custom-elements', customElementsExportBehavior: 'auto-define-custom-elements', externalRuntime: false, },
    { type: 'docs-readme' },
    { type: 'www', serviceWorker: null },
    reactOutputTarget({
      outDir: './packages/react',
      stencilPackageName: 'ensemble-ui',  // package root import
      esModules: true,
    }),
    angularOutputTarget({
      componentCorePackage: 'ensemble-ui',
      directivesProxyFile: './packages/angular/components.ts'
    }),
  ],
  testing: { browserHeadless: "shell" },
};
