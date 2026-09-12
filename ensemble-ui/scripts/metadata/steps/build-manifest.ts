import fs from 'node:fs/promises';

import { log } from '../../_shared/logger.mjs';
import { PATHS } from '../config';
import type { EnsembleUIManifest, ManifestProp } from '../types/manifest';
import type { NormalizedComponent } from '../types/pipeline';
import { readJson, writeJson } from '../utils/json';

export async function buildManifest(): Promise<void> {
  log.step('Building public manifest and type contract');

  const components = await readJson<NormalizedComponent[]>(PATHS.normalizedProps);

  const manifest: EnsembleUIManifest = {
    schemaVersion: 1,
    components: Object.fromEntries(
      components.map(component => [
        component.tag,
        {
          sourceFile: component.sourceFile,
          props: component.props.map(({ decoratorArgs: _internal, ...prop }) => prop as ManifestProp),
          tokens: component.tokens ?? []
        }
      ])
    )
  };

  await writeJson(PATHS.manifest, manifest);

  // The public type contract ships beside manifest.json.
  await fs.copyFile(PATHS.publicTypesSource, PATHS.publicTypes);

  log.success(`Built manifest for ${Object.keys(manifest.components).length} components.`);
}
