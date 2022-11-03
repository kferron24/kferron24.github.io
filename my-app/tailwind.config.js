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
      // boxShadow: {
      //   'newInner': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;',
      //   'synthese': 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;',
      // }
    },
  },
  plugins: [],
}
