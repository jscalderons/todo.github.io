const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'rgba(0, 55, 101, 1)',
      'primary-light': 'rgba(0, 55, 101, 0.3)',
      'secondary': 'rgba(217, 217, 217, 1)',
      'secondary-light': 'rgba(217, 217, 217, 0.3)',
      'white': '#ffffff',
      'dark': '#000000',
      'red': colors.red,
      'green': colors.green,
      'blue': colors.blue,
      'transparent': 'transparent',
      'inherit': 'inherit',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
