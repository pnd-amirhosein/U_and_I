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

export function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return false;

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((el, idx) => deepEqual(el, b[idx]));
  }

  if (typeof a === "object" && typeof b === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(key => b.hasOwnProperty(key) && deepEqual(a[key], b[key]));
  }

  return false;
}
