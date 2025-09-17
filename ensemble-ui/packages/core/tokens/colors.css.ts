import { colors } from "./colors";

// this will produce a CSS string you can inject into :root
export const generateColorVariables = (palette: typeof colors) => {
  let css = ":root {\n";

  const toKebab = (str: string) => str.replace(/_/g, "-").toLowerCase();

  for (const [group, shades] of Object.entries(palette)) {
    if (typeof shades === "object") {
      for (const [shade, value] of Object.entries(shades)) {
        css += `  --color-${toKebab(group)}-${shade}: ${value};\n`;
      }
    }
  }

  css += "}\n";
  return css;
};
