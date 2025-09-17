import { writeFileSync } from "fs";
import { generateColorVariables } from "./colors.css";
import { colors } from "./colors";

const css = generateColorVariables(colors);
writeFileSync("packages/core/tokens/colors.css", css);
