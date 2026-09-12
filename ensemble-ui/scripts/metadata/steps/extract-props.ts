import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import ts from 'typescript';

import { PATHS, ROOT } from '../config';
import type { ManifestPropConfig } from '../types/manifest';
import type { RawComponent, RawProp } from '../types/pipeline';
import { writeJson } from '../utils/json';

function decoratorsOf(node: ts.Node): readonly ts.Decorator[] {
  return ts.canHaveDecorators(node) ? ts.getDecorators(node) ?? [] : [];
}

function findDecorator(node: ts.Node, name: string): ts.CallExpression | undefined {
  for (const decorator of decoratorsOf(node)) {
    const expression = decorator.expression;

    if (
      ts.isCallExpression(expression) &&
      ts.isIdentifier(expression.expression) &&
      expression.expression.text === name
    ) {
      return expression;
    }
  }

  return undefined;
}

function componentTag(node: ts.ClassDeclaration, source: ts.SourceFile): string | undefined {
  const decorator = findDecorator(node, 'Component');
  const argument = decorator?.arguments[0];

  if (!argument || !ts.isObjectLiteralExpression(argument)) return undefined;

  for (const property of argument.properties) {
    if (!ts.isPropertyAssignment(property)) continue;
    if (property.name.getText(source).replace(/['"]/g, '') !== 'tag') continue;

    const value = property.initializer;
    if (ts.isStringLiteral(value) || ts.isNoSubstitutionTemplateLiteral(value)) {
      return value.text;
    }
  }

  return undefined;
}

function propConfig(decorator: ts.CallExpression, source: ts.SourceFile): ManifestPropConfig {
  const config: ManifestPropConfig = {};
  const argument = decorator.arguments[0];

  if (!argument || !ts.isObjectLiteralExpression(argument)) return config;

  for (const property of argument.properties) {
    if (!ts.isPropertyAssignment(property)) continue;

    const key = property.name.getText(source).replace(/['"]/g, '');
    const value = property.initializer;

    if (
      key === 'attribute' &&
      (ts.isStringLiteral(value) || ts.isNoSubstitutionTemplateLiteral(value))
    ) {
      config.attribute = value.text;
    }

    if (key === 'mutable' && value.kind === ts.SyntaxKind.TrueKeyword) config.mutable = true;
    if (key === 'mutable' && value.kind === ts.SyntaxKind.FalseKeyword) config.mutable = false;
    if (key === 'reflect' && value.kind === ts.SyntaxKind.TrueKeyword) config.reflect = true;
    if (key === 'reflect' && value.kind === ts.SyntaxKind.FalseKeyword) config.reflect = false;
  }

  return config;
}

function extractProp(node: ts.PropertyDeclaration, source: ts.SourceFile): RawProp | undefined {
  const decorator = findDecorator(node, 'Prop');
  if (!decorator) return undefined;

  return {
    name: node.name.getText(source),
    type: node.type?.getText(source),
    defaultValue: node.initializer?.getText(source),
    optional: Boolean(node.questionToken),
    config: propConfig(decorator, source),
    decoratorArgs: decorator.arguments.length
      ? decorator.arguments.map(arg => arg.getText(source)).join(', ')
      : undefined
  };
}

async function extractFile(file: string): Promise<RawComponent[]> {
  const absoluteFile = path.resolve(ROOT, file);
  const source = ts.createSourceFile(
    absoluteFile,
    await fs.readFile(absoluteFile, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );

  const components: RawComponent[] = [];

  function visit(node: ts.Node): void {
    if (ts.isClassDeclaration(node)) {
      const tag = componentTag(node, source);

      if (tag) {
        const props = node.members
          .filter(ts.isPropertyDeclaration)
          .map(member => extractProp(member, source))
          .filter((prop): prop is RawProp => Boolean(prop));

        components.push({
          tag,
          sourceFile: path.relative(ROOT, absoluteFile).replaceAll('\\', '/'),
          props
        });
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(source);
  return components;
}

export async function extractProps(): Promise<void> {
  const files = await fg(PATHS.componentsGlob, {
    cwd: ROOT,
    absolute: false,
    onlyFiles: true
  });

  if (!files.length) {
    throw new Error(`No files found matching "${PATHS.componentsGlob}".`);
  }

  const components: RawComponent[] = [];
  for (const file of files.sort()) components.push(...await extractFile(file));
  components.sort((a, b) => a.tag.localeCompare(b.tag));

  await writeJson(PATHS.rawProps, components);

  const propCount = components.reduce((count, component) => count + component.props.length, 0);
  console.log(`🔎 Props: ${components.length} components, ${propCount} props`);
}
