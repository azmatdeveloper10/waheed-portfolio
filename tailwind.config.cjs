/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#5FF1D0',
        secondryColor: '#0A192F',
        color: '#102546',
      },
    },
  },
  plugins: [],
};
