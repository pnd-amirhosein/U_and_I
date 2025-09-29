"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = exports.baseColors = void 0;
exports.baseColors = {
    primary: {
        100: '#99C2FF',
        200: '#4D94FF',
        300: '#0066FF',
        400: '#003D99',
    },
    secondary: {
        100: '#BFE5C6',
        200: '#8FD29C',
        300: '#5FBE71',
        400: '#397244'
    },
    neutral: {
        100: '#F5F5F5',
        200: '#CCCCCC',
        300: '#999999',
        400: '#666666',
        500: '#333333',
        600: '#2C2C2C',
        700: '#262626',
        800: '#1F1F1F',
    },
    danger: {
        100: '#FFAAAA',
        200: '#FF7777',
        300: '#FF4444',
        400: '#CC3333',
    },
    warning: {
        100: '#FFE699',
        200: '#FFD966',
        300: '#FFBB33',
        400: '#CC9900',
    }
};
exports.colors = __assign(__assign({}, exports.baseColors), { success: exports.baseColors.secondary, info: exports.baseColors.primary });
