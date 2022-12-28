/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '680px',

        '1xl': '1282px',

        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
