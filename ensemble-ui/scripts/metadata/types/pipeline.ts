import type {
  ManifestPropConfig,
  ManifestPropType,
  ManifestToken
} from './manifest';

/** Internal extraction shape. Never shipped. */
export interface RawProp {
  name: string;
  type?: string;
  defaultValue?: string;
  optional: boolean;
  config: ManifestPropConfig;
  decoratorArgs?: string;
}

export interface RawComponent {
  tag: string;
  sourceFile: string;
  props: RawProp[];
}

/** Internal normalized shape used between pipeline steps. */
export interface NormalizedProp {
  name: string;
  type: ManifestPropType;
  defaultValue?: string;
  optional: boolean;
  config: ManifestPropConfig;
  decoratorArgs?: string;
}

export interface NormalizedComponent {
  tag: string;
  sourceFile: string;
  props: NormalizedProp[];
  tokens?: ManifestToken[];
}
