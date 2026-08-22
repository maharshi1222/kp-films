/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080808',
          900: '#0A0A0A',
          800: '#0D0D0D',
          700: '#121212',
          600: '#1A1A1A',
          500: '#222222',
          400: '#2C2C2C',
          300: '#3A3A3A',
          200: '#555555',
          100: '#888888',
          50: '#AAAAAA',
        },
        amber: {
          DEFAULT: '#C9A66B',
          light: '#D4B87E',
          dark: '#B08F55',
          50: '#FAF6EF',
          100: '#F5EBD9',
          200: '#E8D5B0',
          300: '#D4B87E',
          400: '#C9A66B',
          500: '#B08F55',
          600: '#8F7044',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.15em',
        'widest-3': '0.25em',
        'widest-4': '0.35em',
      },
      transitionTimingFunction: {
        cinema: 'cubic-bezier(0.16, 1, 0.3, 1)',
        smooth: 'cubic-bezier(0.45, 0, 0.15, 1)',
      },
    },
  },
  plugins: [],
};
