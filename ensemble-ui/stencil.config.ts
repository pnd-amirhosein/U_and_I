import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
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
  // globalScript: 'packages/core/utils/global.ts',
  plugins: [
    sass(),
    postcss({ plugins: postcssPlugins })
  ],
  sourceMap: false,
  minifyJs: true,
  minifyCss: true,
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader', copy: [{ src: './fonts', dest: 'fonts' }] },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false
    },
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
      directivesProxyFile: './angular-build/src/generated/components.ts',
      outputType: 'standalone',
      inlineProperties: true
    }),
    vueOutputTarget({
      componentCorePackage: 'ensemble-ui',
      proxiesFile: './packages/vue/components.ts',
      includeImportCustomElements: true
    })
  ],
  testing: { browserHeadless: "shell" },
};
