// packages/core/theme/createTheme.ts

import { defaultTheme } from './defaultTheme';

export function createTheme(
  overrides: Partial<typeof defaultTheme>
): typeof defaultTheme {
  return {
    ...defaultTheme,
    ...overrides,
    colors: { ...defaultTheme.colors, ...overrides.colors },
    spacing: { ...defaultTheme.spacing, ...overrides.spacing },
    typography: { ...defaultTheme.typography, ...overrides.typography },
    radii: { ...defaultTheme.radii, ...overrides.radii },
    shadows: { ...defaultTheme.shadows, ...overrides.shadows },
    transitions: { ...defaultTheme.transitions, ...overrides.transitions },
  };
}
