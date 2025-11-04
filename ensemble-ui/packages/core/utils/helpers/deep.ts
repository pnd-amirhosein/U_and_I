// packages/core/utils/helpers/deep.ts
export function deepGet(obj: any, path: string): any[] {
  if (!obj || !path) return [];

  const parts = path.split('.');
  const results: any[] = [];

  function recurse(current: any, i: number) {
    if (current == null) return;

    const key = parts[i];
    const next = current[key];

    if (Array.isArray(next)) {
      next.forEach(item => recurse(item, i + 1));
    } else if (i < parts.length - 1) {
      recurse(next, i + 1);
    } else if (next !== undefined) {
      results.push(next);
    }
  }

  recurse(obj, 0);
  return results;
}
