/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './features/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      boxShadow: {
        heavy: '4px 4px 20px 0px rgba(128, 128, 128, 0.7)',
        medium: '0px 4px 32px 4px rgba(60, 57, 57, 0.24)',
        mild: '0px 4px 32px 4px rgba(128, 128, 128, 0.12)',
      },
      fontSize: {
        'header-1': [
          '3.5rem',
          {
            lineHeight: '3.75rem',
            fontWeight: '700',
          },
        ],
        'header-2': [
          '3rem',
          {
            lineHeight: '1',
            fontWeight: '700',
          },
        ],
        'sub-header-1': [
          '2.5rem',
          {
            lineHeight: '1',
            fontWeight: '600',
          },
        ],
        'sub-header-2': [
          '2rem',
          {
            lineHeight: '1',
            fontWeight: '600',
          },
        ],
        'lead-paragraph': [
          '1.5rem',
          {
            lineHeight: '1',
            fontWeight: '600',
          },
        ],
        'body-1': [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '400',
          },
        ],
        'body-2': [
          '1rem',
          {
            lineHeight: '1',
            fontWeight: '400',
          },
        ],
        'body-3': [
          '0.75rem',
          {
            lineHeight: '1rem',
            fontWeight: '400',
          },
        ],
        'button-1': [
          '1.5rem',
          {
            lineHeight: '1',
            fontWeight: '600',
          },
        ],
        'button-2': [
          '1rem',
          {
            lineHeight: '1',
            fontWeight: '600',
          },
        ],
      },
      colors: {
        black: {
          '80': '#33312B',
          '70': '#5C594F',
          '60': '#8C897F',
        },
        grey: {
          '40': '#BFBDB5',
          '30': '#F0EEE7',
        },
        white: {
          '20': '#FCFBF7',
          '10': '#FFFEFB',
        },
        blue: {
          '70': '#4196B2',
          '60': '#4FB4D6',
          '50': '#5ED6FF',
          '40': '#ABE9FF',
          '10': '#FCFDFE',
        },
        pink: {
          '70': '#B2507B',
          '60': '#D66094',
          '50': '#FF7DB7',
          '40': '#FFADD2',
          '10': '#FFFAFC',
        },
        orange: {
          '70': '#B26C2B',
          '60': '#CC823D',
          '50': '#FFA959',
          '40': '#FFCFA3',
          '10': '#FFF8F2',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
