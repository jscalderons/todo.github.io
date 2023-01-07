const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': colors.indigo,
      'secondary': colors.zinc,
      'success': colors.green,
      'danger': colors.red,
      'info': colors.blue,
      'warning': colors.yellow,
      ...colors
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
