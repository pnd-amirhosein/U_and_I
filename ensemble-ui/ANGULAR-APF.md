# Angular integration: precompiled APF subpath

`ensemble-ui/angular` is built before the npm package is published. Consumers do not generate or compile EUI wrapper source in their application.

## Maintainer build flow

1. Stencil builds the Web Components and writes the generated Angular standalone wrappers to `angular-build/src/generated/`.
2. `ng-packagr` compiles those generated wrappers in partial compilation mode and emits Angular Package Format artifacts to `dist-angular/`.
3. The root `ensemble-ui` package exports `./angular` from that precompiled output.
4. Only `dist-angular/` is included in the published package. `angular-build/` is build-only source and is never shipped.

The root build command performs the complete pipeline:

```bash
npm run build
```

The Angular APF stage can be run independently after a Stencil build:

```bash
npm run build:angular
```

A verification script fails the build if the FESM/declarations are missing, Angular partial metadata is absent, raw `.ts` source leaks into `dist-angular/`, or the root export points somewhere else.

## Consumer usage

Install the same package as every other framework integration:

```bash
npm install ensemble-ui
```

Then import standalone wrappers from the precompiled Angular subpath:

```ts
import { Component } from '@angular/core';
import { EuiButton } from 'ensemble-ui/angular';

@Component({
  standalone: true,
  imports: [EuiButton],
  template: `<eui-button size="md" variant="primary">Save</eui-button>`
})
export class ExampleComponent {}
```

No generated directives/components are written into the consumer project, and the consumer does not build EUI's Angular source.

## Package boundaries

- `angular-build/` — internal build project, not published.
- `dist-angular/` — precompiled Angular Package Format artifact, published.
- `dist/` / `loader/` — Stencil runtime artifacts, published as before.
- Angular and RxJS are optional peer dependencies of the root package so React/Vue consumers are not forced to install Angular.
