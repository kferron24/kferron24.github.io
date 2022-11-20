/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#323E45',
        'medium-green': '#3A4E51',
        'regular-green': '#5A786F',
        'light-green': '#8BA88E',
      },
      rotate: {
        '270': '270deg',
        '360': '360deg',
        '90-': '-90deg',
        '180-': '-180deg',
        '270-': '-270deg',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      screens: {
        'topbarFull': '982px',
      },
      minWidth: {
        'content': '280px',
      },
    },
  },
  plugins: [],
}
