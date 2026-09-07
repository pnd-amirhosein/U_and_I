// scripts/metadata/normalize-props.ts

import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();

const RAW_INPUT_FILE = path.resolve(
  ROOT,
  'scripts/metadata/generated/props.raw.json'
);

const NORMALIZED_OUTPUT_FILE = path.resolve(
  ROOT,
  'scripts/metadata/generated/props.normalized.json'
);

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

export interface PropTypeMetadata {
  normalized: NormalizedPropType;
  raw: string;
}

export interface RawPropConfig {
  attribute?: string;
  mutable?: boolean;
  reflect?: boolean;
}

export interface RawPropMetadata {
  name: string;

  /**
   * Raw type coming directly from extract-props.ts.
   *
   * Example:
   * "(query: string) => Promise<any[]>"
   */
  type?: string;

  defaultValue?: string;
  optional: boolean;
  config: RawPropConfig;
  decoratorArgs?: string;
}

export interface NormalizedPropMetadata {
  name: string;

  /**
   * This REPLACES the raw string `type` field.
   */
  type: PropTypeMetadata;

  defaultValue?: string;
  optional: boolean;
  config: RawPropConfig;
  decoratorArgs?: string;
}

export interface RawComponentMetadata {
  tag: string;
  sourceFile: string;
  props: RawPropMetadata[];
}

export interface NormalizedComponentMetadata {
  tag: string;
  sourceFile: string;
  props: NormalizedPropMetadata[];
}

/**
 * Native JS / TS primitive names.
 */
const NATIVE_PRIMITIVES =
  new Set([
    'string',
    'number',
    'boolean',
    'bigint',
    'symbol'
  ]);

/**
 * Native/global object-like types.
 */
const NATIVE_OBJECT_TYPES =
  new Set([
    'object',

    'Date',
    'RegExp',
    'Error',

    'Map',
    'Set',
    'WeakMap',
    'WeakSet',

    'Promise',

    'Array',
    'ReadonlyArray',

    'HTMLElement',
    'HTMLInputElement',
    'HTMLTextAreaElement',
    'HTMLButtonElement',
    'HTMLSelectElement',

    'Element',
    'Node',

    'Event',
    'CustomEvent'
  ]);

/**
 * Native TypeScript utility/generic types.
 */
const NATIVE_GENERIC_TYPES =
  new Set([
    'Array',
    'ReadonlyArray',

    'Promise',

    'Map',
    'ReadonlyMap',

    'Set',
    'ReadonlySet',

    'WeakMap',
    'WeakSet',

    'Record',

    'Partial',
    'Required',
    'Readonly',

    'Pick',
    'Omit',

    'Exclude',
    'Extract',

    'NonNullable',

    'ReturnType',
    'Parameters',

    'ConstructorParameters',
    'InstanceType',

    'Awaited'
  ]);

/**
 * Convert one raw TS type into the small type
 * representation used by EUI Laboratory.
 */
export function normalizePropType(
  rawType?: string
): PropTypeMetadata {
  if (!rawType) {
    return {
      normalized: 'unknown',
      raw: 'unknown'
    };
  }

  const type = rawType.trim();

  /*
   * Primitive types
   */
  if (NATIVE_PRIMITIVES.has(type)) {
    return {
      normalized:
        type as NormalizedPropType,
      raw: type
    };
  }

  /*
   * Functions
   *
   * () => void
   * (value: string) => boolean
   * (query: string) => Promise<any[]>
   */
  if (isFunctionType(type)) {
    return {
      normalized: 'function',
      raw: type
    };
  }

  /*
   * Arrays
   *
   * string[]
   * BreadcrumbData[]
   * CalendarEventType[]
   *
   * We do not care whether the element itself
   * is native/custom here. The raw value keeps
   * the complete TS definition.
   */
  if (isArrayType(type)) {
    return {
      normalized: 'array',
      raw: type
    };
  }

  /*
   * Generic arrays
   *
   * Array<string>
   * Array<BreadcrumbData>
   * ReadonlyArray<string>
   */
  if (isGenericArrayType(type)) {
    return {
      normalized: 'array',
      raw: type
    };
  }

  /*
   * TS unions
   *
   * string | number
   *
   * 'blank' | 'icon' | 'text'
   *
   * Validation | undefined
   *
   * They remain unions.
   *
   * We are NOT translating literal unions
   * into enums.
   */
  if (isUnionType(type)) {
    return {
      normalized: 'union',
      raw: type
    };
  }

  /*
   * Object forms
   *
   * object
   * Record<string, any>
   * { name: string; value: number }
   */
  if (isObjectType(type)) {
    return {
      normalized: 'object',
      raw: type
    };
  }

  /*
   * Native/global object names.
   *
   * Date
   * HTMLElement
   * Promise
   */
  if (NATIVE_OBJECT_TYPES.has(type)) {
    return {
      normalized: 'object',
      raw: type
    };
  }

  /*
   * Native generic/utility types.
   *
   * Promise<string>
   * Record<string, number>
   * Partial<Foo>
   * Pick<Foo, 'name'>
   */
  if (isNativeGenericType(type)) {
    return {
      normalized: 'object',
      raw: type
    };
  }

  /*
   * Special TS types.
   */
  if (
    type === 'any' ||
    type === 'unknown' ||
    type === 'never' ||
    type === 'void' ||
    type === 'undefined' ||
    type === 'null'
  ) {
    return {
      normalized: 'unknown',
      raw: type
    };
  }

  /*
   * Simple project-defined names.
   *
   * Validation
   * Alert
   * BreadcrumbData
   * CalendarEventType
   *
   * These are the things we call custom.
   */
  if (isNamedType(type)) {
    return {
      normalized: 'custom',
      raw: type
    };
  }

  /*
   * Anything complicated that we don't
   * understand yet stays intact.
   */
  return {
    normalized: 'unknown',
    raw: type
  };
}

/**
 * IMPORTANT:
 *
 * This function deliberately REMOVES the raw
 * string `type` property and replaces it with
 * the normalized type object.
 */
export function normalizeProp(
  prop: RawPropMetadata
): NormalizedPropMetadata {
  const {
    type: rawType,
    ...rest
  } = prop;

  return {
    ...rest,

    type: normalizePropType(
      rawType
    )
  };
}

export function normalizeComponent(
  component: RawComponentMetadata
): NormalizedComponentMetadata {
  return {
    tag: component.tag,
    sourceFile: component.sourceFile,

    props: component.props.map(
      normalizeProp
    )
  };
}

export function normalizeComponents(
  components: RawComponentMetadata[]
): NormalizedComponentMetadata[] {
  return components.map(
    normalizeComponent
  );
}

function isFunctionType(
  type: string
): boolean {
  return type.includes('=>');
}

function isArrayType(
  type: string
): boolean {
  return type.endsWith('[]');
}

function isGenericArrayType(
  type: string
): boolean {
  return (
    /^Array<.+>$/.test(type) ||
    /^ReadonlyArray<.+>$/.test(type)
  );
}

function isUnionType(
  type: string
): boolean {
  return type.includes('|');
}

function isObjectType(
  type: string
): boolean {
  return (
    type === 'object' ||

    /^Record<.+>$/.test(type) ||

    (
      type.startsWith('{') &&
      type.endsWith('}')
    )
  );
}

function isNativeGenericType(
  type: string
): boolean {
  const match =
    type.match(
      /^([A-Za-z_$][A-Za-z0-9_$]*)<.+>$/
    );

  if (!match) {
    return false;
  }

  const baseType =
    match[1];

  return NATIVE_GENERIC_TYPES.has(
    baseType
  );
}

function isNamedType(
  type: string
): boolean {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/
    .test(type);
}

async function main(): Promise<void> {
  console.log(
    '🧠 Normalizing Ensemble UI prop types...'
  );

  const rawJson =
    await fs.readFile(
      RAW_INPUT_FILE,
      'utf8'
    );

  const rawComponents =
    JSON.parse(
      rawJson
    ) as RawComponentMetadata[];

  const normalizedComponents =
    normalizeComponents(
      rawComponents
    );

  await fs.mkdir(
    path.dirname(
      NORMALIZED_OUTPUT_FILE
    ),
    {
      recursive: true
    }
  );

  await fs.writeFile(
    NORMALIZED_OUTPUT_FILE,
    JSON.stringify(
      normalizedComponents,
      null,
      2
    ) + '\n',
    'utf8'
  );

  const propCount =
    normalizedComponents.reduce(
      (count, component) =>
        count +
        component.props.length,
      0
    );

  console.log(
    `✅ ${normalizedComponents.length} components normalized.`
  );

  console.log(
    `✅ ${propCount} props normalized.`
  );

  console.log(
    `📦 ${path.relative(
      ROOT,
      NORMALIZED_OUTPUT_FILE
    )}`
  );
}

main().catch(error => {
  console.error(
    '❌ Prop normalization failed.'
  );

  console.error(error);

  process.exit(1);
});