export const baseColors = {
  primary: {
    100: '#CCE0FF',
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
    50: '#FFFFFF',
    100: '#F5F5F5',
    200: '#CCCCCC',
    300: '#999999',
    400: '#666666',
    500: '#444444',
    600: '#2C2C2C',
    700: '#262626',
    800: '#1F1F1F',
    900: '#1E1E1E'
  },
  danger: {
    100: '#FEDBDB',
    200: '#FF7777',
    300: '#FF4444',
    400: '#CC3333',
  },
  warning: {
    100: '#FFF3CC',
    200: '#FFD966',
    300: '#FFBB33',
    400: '#CC9900',
  }
};

export const colors = {
  ...baseColors,
  success: baseColors.secondary,
  info: baseColors.primary,
};