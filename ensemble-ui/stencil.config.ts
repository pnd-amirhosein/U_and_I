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
  sourceMap: false,
  minifyJs: true,
  minifyCss: true,
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader', copy: [{ src: './fonts', dest: 'fonts' }] },
    { type: 'dist-custom-elements', customElementsExportBehavior: 'auto-define-custom-elements', externalRuntime: false},
    // { type: 'dist-custom-elements' },
    { type: 'docs-readme' },
    { type: 'docs-json', file: 'dist/components.json' },
    { type: 'www', serviceWorker: null },
    reactOutputTarget({
      outDir: './packages/react',
      stencilPackageName: 'ensemble-ui',
      esModules: true,
    }),
    angularOutputTarget({
      componentCorePackage: 'ensemble-ui',
      directivesProxyFile: './packages/angular/components.ts',
      directivesArrayFile: './packages/angular/index.ts'
    }),
  ],
  testing: { browserHeadless: "shell" },
};
