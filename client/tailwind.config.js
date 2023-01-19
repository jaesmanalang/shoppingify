/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screen: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
    extend: {
      colors: {
        accent: '#F9A109',
        dark: '#34333A',
        primarySurface: '#FAFAFE',
        secondarySurface: '#FFF0DE',
      },
      fontFamily: {
        sans: ['var(--font-quicksand)', fontFamily],
      },
      boxShadow: {
        customShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
