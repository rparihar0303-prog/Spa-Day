/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'label': '0.22em',
        'wide-label': '0.32em',
        'ultra-wide': '0.4em',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
      },
      transitionDuration: {
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
