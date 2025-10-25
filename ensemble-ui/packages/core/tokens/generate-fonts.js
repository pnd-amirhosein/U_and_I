"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
const chalk = require("chalk");

// Config: paths
var fontsDir = path.resolve("src/fonts");
var outputFile = path.resolve("./packages/core/theme/fonts.scss");

// Read font files
var files = fs.readdirSync(fontsDir).filter(function (f) { return f.endsWith(".woff2"); });
var css = "";

// Helper to parse weight from filename
function parseWeight(name) {
    if (/Thin/i.test(name))
        return 100;
    if (/ExtraLight/i.test(name))
        return 200;
    if (/Light/i.test(name))
        return 300;
    if (/Regular/i.test(name))
        return 400;
    if (/Medium/i.test(name))
        return 500;
    if (/SemiBold/i.test(name))
        return 600;
    if (/Bold/i.test(name))
        return 700;
    if (/ExtraBold/i.test(name))
        return 800;
    if (/Black/i.test(name))
        return 900;
    return 400;
}

// Helper to parse style
function parseStyle(name) {
    return /Italic/i.test(name) ? "italic" : "normal";
}

// Helper to parse stretch
function parseStretch(name) {
    if (/Condensed/i.test(name))
        return "condensed";
    if (/Expanded/i.test(name))
        return "expanded";
    return "normal";
}

// Generate @font-face for each file
files.forEach(function (file) {
    var base = file.replace(".woff2", "");
    var fontWeight = parseWeight(base);
    var fontStyle = parseStyle(base);
    var fontStretch = parseStretch(base);
    css += "\n@font-face {\n  font-family: \"Hubot Sans\";\n  src: url(\"./fonts/".concat(file, "\") format(\"woff2\");\n  font-weight: ").concat(fontWeight, ";\n  font-style: ").concat(fontStyle, ";\n  font-stretch: ").concat(fontStretch, ";\n  font-display: swap;\n}\n");
});

// Write output file
fs.writeFileSync(outputFile, css);
console.log(`${chalk.green(getClock())}  fonts.generated.css created with `.concat(files.length, " fonts"));

function getClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    return `[${h}:${m}.0]`;
}