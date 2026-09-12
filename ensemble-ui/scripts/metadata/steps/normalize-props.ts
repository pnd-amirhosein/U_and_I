import { PATHS } from '../config';
import type { ManifestPropType, NormalizedPropType } from '../types/manifest';
import type { NormalizedComponent, NormalizedProp, RawComponent, RawProp } from '../types/pipeline';
import { readJson, writeJson } from '../utils/json';

const PRIMITIVES = new Set<NormalizedPropType>([
  'string', 'number', 'boolean', 'bigint', 'symbol'
]);

const NATIVE_OBJECTS = new Set([
  'object', 'Date', 'RegExp', 'Error', 'Map', 'Set', 'WeakMap', 'WeakSet',
  'Promise', 'Array', 'ReadonlyArray', 'HTMLElement', 'HTMLInputElement',
  'HTMLTextAreaElement', 'HTMLButtonElement', 'HTMLSelectElement', 'Element',
  'Node', 'Event', 'CustomEvent'
]);

const NATIVE_GENERICS = new Set([
  'Array', 'ReadonlyArray', 'Promise', 'Map', 'ReadonlyMap', 'Set', 'ReadonlySet',
  'WeakMap', 'WeakSet', 'Record', 'Partial', 'Required', 'Readonly', 'Pick', 'Omit',
  'Exclude', 'Extract', 'NonNullable', 'ReturnType', 'Parameters',
  'ConstructorParameters', 'InstanceType', 'Awaited'
]);

const SPECIAL_TYPES = new Set([
  'any', 'unknown', 'never', 'void', 'undefined', 'null'
]);

function normalized(normalized: NormalizedPropType, raw: string): ManifestPropType {
  return { normalized, raw };
}

function normalizeType(rawType?: string): ManifestPropType {
  if (!rawType) return normalized('unknown', 'unknown');

  const type = rawType.trim();

  if (PRIMITIVES.has(type as NormalizedPropType)) {
    return normalized(type as NormalizedPropType, type);
  }

  if (type.includes('=>')) return normalized('function', type);
  if (type.endsWith('[]')) return normalized('array', type);
  if (/^(Array|ReadonlyArray)<.+>$/.test(type)) return normalized('array', type);
  if (type.includes('|')) return normalized('union', type);

  if (
    type === 'object' ||
    /^Record<.+>$/.test(type) ||
    (type.startsWith('{') && type.endsWith('}'))
  ) {
    return normalized('object', type);
  }

  if (NATIVE_OBJECTS.has(type)) return normalized('object', type);

  const generic = type.match(/^([A-Za-z_$][A-Za-z0-9_$]*)<.+>$/);
  if (generic && NATIVE_GENERICS.has(generic[1])) return normalized('object', type);

  if (SPECIAL_TYPES.has(type)) return normalized('unknown', type);
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(type)) return normalized('custom', type);

  return normalized('unknown', type);
}

function normalizeProp(prop: RawProp): NormalizedProp {
  const { type, ...rest } = prop;
  return { ...rest, type: normalizeType(type) };
}

export async function normalizeProps(): Promise<void> {
  const raw = await readJson<RawComponent[]>(PATHS.rawProps);

  const components: NormalizedComponent[] = raw.map(component => ({
    tag: component.tag,
    sourceFile: component.sourceFile,
    props: component.props.map(normalizeProp)
  }));

  await writeJson(PATHS.normalizedProps, components);

  const propCount = components.reduce((count, component) => count + component.props.length, 0);
  console.log(`🧠 Types: ${propCount} props normalized`);
}
