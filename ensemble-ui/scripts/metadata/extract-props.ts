// scripts/metadata/extract-props.ts

import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';
import fg from 'fast-glob';

const ROOT = process.cwd();

const COMPONENTS_GLOB =
  'src/components/*/*.tsx';

const RAW_OUTPUT_FILE = path.resolve(
  ROOT,
  'scripts/metadata/generated/props.raw.json'
);

interface RawPropConfig {
  attribute?: string;
  mutable?: boolean;
  reflect?: boolean;
}

export interface RawPropMetadata {
  name: string;
  type?: string;
  defaultValue?: string;
  optional: boolean;
  config: RawPropConfig;
  decoratorArgs?: string;
}

export interface RawComponentPropMetadata {
  tag: string;
  sourceFile: string;
  props: RawPropMetadata[];
}

function getDecorators(
  node: ts.Node
): readonly ts.Decorator[] {
  if (!ts.canHaveDecorators(node)) {
    return [];
  }

  return ts.getDecorators(node) ?? [];
}

function findDecorator(
  node: ts.Node,
  decoratorName: string
): ts.CallExpression | undefined {
  for (const decorator of getDecorators(node)) {
    const expression = decorator.expression;

    if (!ts.isCallExpression(expression)) {
      continue;
    }

    if (
      ts.isIdentifier(expression.expression) &&
      expression.expression.text === decoratorName
    ) {
      return expression;
    }
  }

  return undefined;
}

function getComponentTag(
  node: ts.ClassDeclaration,
  sourceFile: ts.SourceFile
): string | undefined {
  const decorator =
    findDecorator(node, 'Component');

  if (!decorator) {
    return undefined;
  }

  const firstArgument =
    decorator.arguments[0];

  if (
    !firstArgument ||
    !ts.isObjectLiteralExpression(firstArgument)
  ) {
    return undefined;
  }

  for (const property of firstArgument.properties) {
    if (!ts.isPropertyAssignment(property)) {
      continue;
    }

    const name =
      property.name.getText(sourceFile);

    if (name !== 'tag') {
      continue;
    }

    const initializer =
      property.initializer;

    if (
      ts.isStringLiteral(initializer) ||
      ts.isNoSubstitutionTemplateLiteral(
        initializer
      )
    ) {
      return initializer.text;
    }
  }

  return undefined;
}

function getPropConfig(
  decorator: ts.CallExpression,
  sourceFile: ts.SourceFile
): RawPropConfig {
  const config: RawPropConfig = {};

  const firstArgument =
    decorator.arguments[0];

  if (
    !firstArgument ||
    !ts.isObjectLiteralExpression(firstArgument)
  ) {
    return config;
  }

  for (const property of firstArgument.properties) {
    if (!ts.isPropertyAssignment(property)) {
      continue;
    }

    const key = property.name
      .getText(sourceFile)
      .replace(/['"]/g, '');

    const value =
      property.initializer;

    switch (key) {
      case 'attribute':
        if (
          ts.isStringLiteral(value) ||
          ts.isNoSubstitutionTemplateLiteral(
            value
          )
        ) {
          config.attribute =
            value.text;
        }
        break;

      case 'mutable':
        if (
          value.kind ===
          ts.SyntaxKind.TrueKeyword
        ) {
          config.mutable = true;
        }

        if (
          value.kind ===
          ts.SyntaxKind.FalseKeyword
        ) {
          config.mutable = false;
        }
        break;

      case 'reflect':
        if (
          value.kind ===
          ts.SyntaxKind.TrueKeyword
        ) {
          config.reflect = true;
        }

        if (
          value.kind ===
          ts.SyntaxKind.FalseKeyword
        ) {
          config.reflect = false;
        }
        break;
    }
  }

  return config;
}

function extractProp(
  node: ts.PropertyDeclaration,
  sourceFile: ts.SourceFile
): RawPropMetadata | undefined {
  const decorator =
    findDecorator(node, 'Prop');

  if (!decorator) {
    return undefined;
  }

  const name =
    node.name.getText(sourceFile);

  const type =
    node.type?.getText(sourceFile);

  const defaultValue =
    node.initializer?.getText(sourceFile);

  const decoratorArgs =
    decorator.arguments.length > 0
      ? decorator.arguments
          .map(
            arg =>
              arg.getText(sourceFile)
          )
          .join(', ')
      : undefined;

  return {
    name,
    type,
    defaultValue,

    optional: Boolean(
      node.questionToken
    ),

    config: getPropConfig(
      decorator,
      sourceFile
    ),

    decoratorArgs
  };
}

async function extractComponentFile(
  filePath: string
): Promise<RawComponentPropMetadata[]> {
  const absolutePath =
    path.resolve(
      ROOT,
      filePath
    );

  const sourceText =
    await fs.readFile(
      absolutePath,
      'utf8'
    );

  const sourceFile =
    ts.createSourceFile(
      absolutePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX
    );

  const components:
    RawComponentPropMetadata[] = [];

  function visit(
    node: ts.Node
  ): void {
    if (
      ts.isClassDeclaration(node)
    ) {
      const tag =
        getComponentTag(
          node,
          sourceFile
        );

      if (tag) {
        const props:
          RawPropMetadata[] = [];

        for (
          const member of node.members
        ) {
          if (
            !ts.isPropertyDeclaration(
              member
            )
          ) {
            continue;
          }

          const prop =
            extractProp(
              member,
              sourceFile
            );

          if (prop) {
            props.push(prop);
          }
        }

        components.push({
          tag,

          sourceFile: path
            .relative(
              ROOT,
              absolutePath
            )
            .replaceAll(
              '\\',
              '/'
            ),

          props
        });
      }
    }

    ts.forEachChild(
      node,
      visit
    );
  }

  visit(sourceFile);

  return components;
}

async function writeJson(
  outputFile: string,
  value: unknown
): Promise<void> {
  await fs.mkdir(
    path.dirname(
      outputFile
    ),
    {
      recursive: true
    }
  );

  await fs.writeFile(
    outputFile,

    JSON.stringify(
      value,
      null,
      2
    ) + '\n',

    'utf8'
  );
}

async function main(): Promise<void> {
  console.log(
    '🔎 Extracting Ensemble UI component props...'
  );

  const files =
    await fg(
      COMPONENTS_GLOB,
      {
        cwd: ROOT,
        absolute: false,
        onlyFiles: true
      }
    );

  if (files.length === 0) {
    throw new Error(
      `No files found matching "${COMPONENTS_GLOB}".`
    );
  }

  const components:
    RawComponentPropMetadata[] = [];

  for (
    const file of files.sort()
  ) {
    components.push(
      ...await extractComponentFile(
        file
      )
    );
  }

  components.sort(
    (a, b) =>
      a.tag.localeCompare(
        b.tag
      )
  );

  await writeJson(
    RAW_OUTPUT_FILE,
    components
  );

  const propCount =
    components.reduce(
      (
        count,
        component
      ) =>
        count +
        component.props.length,

      0
    );

  console.log(
    `✅ ${components.length} components found.`
  );

  console.log(
    `✅ ${propCount} props extracted.`
  );

  console.log(
    `📦 RAW: ${path.relative(
      ROOT,
      RAW_OUTPUT_FILE
    )}`
  );
}

main().catch(error => {
  console.error(
    '❌ Prop extraction failed.'
  );

  console.error(error);

  process.exit(1);
});