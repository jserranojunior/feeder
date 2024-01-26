const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const daisy = require("daisyui");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  variants: {
    screens: {
      print: { raw: 'print' },
      xs:'1px',
      tab: '576px',
      lap: '1024px',
      des: '1900px',
      ult: '2400px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [daisy],
};
