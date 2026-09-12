/** Public metadata contract shipped with Ensemble UI. */

export type NormalizedPropType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'bigint'
  | 'symbol'
  | 'array'
  | 'object'
  | 'function'
  | 'union'
  | 'custom'
  | 'unknown';

export interface ManifestPropType {
  normalized: NormalizedPropType;
  raw: string;
}

export interface ManifestPropConfig {
  attribute?: string;
  mutable?: boolean;
  reflect?: boolean;
}

export interface ManifestProp {
  name: string;
  type: ManifestPropType;
  defaultValue?: string;
  optional: boolean;
  config: ManifestPropConfig;
}

export interface ManifestToken {
  name: string;
  value?: string;
}

export interface ManifestComponent {
  sourceFile: string;
  props: ManifestProp[];
  tokens: ManifestToken[];
}

export interface EnsembleUIManifest {
  schemaVersion: number;
  components: Record<string, ManifestComponent>;
}
