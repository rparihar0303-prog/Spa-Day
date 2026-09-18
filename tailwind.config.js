/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic SPA DAY luxury design system tokens
        spa: {
          ivory: '#F9F6F0',
          cream: '#F2EDE4',
          sand: '#E5DED3',
          'sand-light': '#EFE9DF',
          charcoal: '#1B1917',
          'charcoal-card': '#24221F',
          'charcoal-soft': '#35322D',
          'text-primary': '#1B1917',
          'text-secondary': '#4E4942',
          'text-muted': '#787267',
          'text-light': '#F9F6F0',
          'text-light-secondary': '#D7D0C5',
          'text-light-muted': '#A69E92',
          gold: '#B38F5F',
          'gold-light': '#CCAFA0',
          'gold-dark': '#8F6E43',
        },
        ivory: '#F8F5F0',
        cream: '#F1ECE4',
        sand: '#E8E0D4',
        taupe: {
          DEFAULT: '#A89B89',
          light: '#C4B8A6',
          dark: '#8A7E6D',
        },
        gold: {
          DEFAULT: '#B5946B',
          light: '#C9AE8A',
          dark: '#9A7B53',
        },
        charcoal: {
          DEFAULT: '#1E1D1B',
          light: '#333230',
          soft: '#4A4844',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'kicker': '0.24em',
        'label': '0.22em',
        'wide-label': '0.32em',
        'ultra-wide': '0.4em',
      },
      maxWidth: {
        'spa': '77.5rem', // 1240px
        '8xl': '90rem',
        '9xl': '100rem',
      },
      transitionDuration: {
        '400': '400ms',
        '700': '700ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
