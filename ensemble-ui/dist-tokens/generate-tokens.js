"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var fs_1 = require("fs");
var colors_1 = require("./colors");
var spacing_1 = require("./spacing");
var radii_1 = require("./radii");
var shadows_1 = require("./shadows");
var typography_1 = require("./typography");
var transitions_1 = require("./transitions");
function objectToCSSVars(obj, prefix) {
    var css = "";
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value === "object") {
            css += objectToCSSVars(value, "".concat(prefix, "-").concat(key));
        }
        else {
            css += "  --".concat(prefix, "-").concat(key, ": ").concat(value, ";\n");
        }
    }
    return css;
}
var css = ":root {\n".concat(objectToCSSVars(colors_1.colors, "color") +
    objectToCSSVars(spacing_1.spacing, "space") +
    objectToCSSVars(radii_1.radii, "radius") +
    objectToCSSVars(shadows_1.shadows, "shadow") +
    objectToCSSVars(typography_1.typography, "font") +
    objectToCSSVars(transitions_1.transitions, "transition"), "}\n");
(0, fs_1.writeFileSync)("packages/core/theme/tokens.scss", css);
console.log("✅ tokens.css generated!");
// run these:
// 1> npx tsc packages/core/tokens/generate-tokens.ts --outDir dist-tokens
// 2> node dist-tokens/generate-tokens.js
