// @ts-nocheck
import { writeFileSync } from "fs";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { typography } from "./typography";
import { transitions } from "./transitions";

function objectToCSSVars(obj: Record<string, any>, prefix: string): string {
  let css = "";
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      css += objectToCSSVars(value as Record<string, any>, `${prefix}-${key}`);
    } else {
      css += `  --${prefix}-${key}: ${value};\n`;
    }
  }
  return css;
}


const css = `:root {\n${objectToCSSVars(colors, "color") +
  objectToCSSVars(spacing, "space") +
  objectToCSSVars(radii, "radius") +
  objectToCSSVars(shadows, "shadow") +
  objectToCSSVars(typography, "font") +
  objectToCSSVars(transitions, "transition")
  }}\n`;

writeFileSync("packages/core/theme/tokens.scss", css);
console.log("✅ tokens.css generated!");


// run these:
// 1> npx tsc packages/core/tokens/generate-tokens.ts --outDir dist-tokens
// 2> node dist-tokens/generate-tokens.js