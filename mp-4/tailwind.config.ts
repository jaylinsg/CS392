import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          light: '#80CAFF',
          DEFAULT: '#009BE1',
          dark: '#006BA6',
        }
      }
    },
  },
  plugins: [],
};

export default config;
