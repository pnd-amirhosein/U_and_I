"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = void 0;
var fontFamilies = {
    sans: '"Hubot Sans", "Yekan Bakh", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    mono: '"JetBrains Mono", monospace',
};
exports.typography = {
    h1: { fontSize: '48px', fontWeight: 700, fontFamily: fontFamilies.sans },
    h2: { fontSize: '36px', fontWeight: 600, fontFamily: fontFamilies.sans },
    h3: { fontSize: '24px', fontWeight: 600, fontFamily: fontFamilies.sans },
    h4: { fontSize: '20px', fontWeight: 600, fontFamily: fontFamilies.sans },
    h5: { fontSize: '16px', fontWeight: 500, fontFamily: fontFamilies.sans },
    h6: { fontSize: '14px', fontWeight: 500, fontFamily: fontFamilies.sans },
    paragraph: { fontSize: '14px', fontWeight: 400, fontFamily: fontFamilies.sans },
    form: { fontSize: '16px', fontWeight: 400, fontFamily: fontFamilies.sans },
    caption: { fontSize: '12px', fontWeight: 400, fontFamily: fontFamilies.sans },
    button: { fontSize: '14px', fontWeight: 600, fontFamily: fontFamilies.sans },
    nav: { fontSize: '14px', fontWeight: 500, fontFamily: fontFamilies.sans },
};
