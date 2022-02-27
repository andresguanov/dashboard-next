/* eslint-disable global-require */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
