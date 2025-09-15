import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';



export const config: Config = {
  namespace: 'ensemble-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
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
  testing: {
    browserHeadless: "shell",
  },
};
