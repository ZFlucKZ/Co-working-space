import { type Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
        plus: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#4196B2',
          40: '#4FB4D6',
          30: '#5ED6FF',
          20: '#ABE9FF',
          10: '#FCFDFE',
        },
        pink: {
          50: '#B2507B',
          40: '#D66094',
          30: '#FF7DB7',
          20: '#FFADD2',
          10: '#FFFAFC',
        },
        orange: {
          50: '#B26C2B',
          40: '#CC823D',
          30: '#FFA959',
          20: '#FFCFA3',
          10: '#FFF8F2',
        },
        black: {
          80: '#33312B',
          70: '#5C594F',
          60: '#8C897F',
        },
        grey: {
          50: '#BFBDB5',
          40: '#F0EEE7',
          30: '#FDFCF9',
        },
        white: {
          20: '#FAF9F5',
          10: '#FFFEFB',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
