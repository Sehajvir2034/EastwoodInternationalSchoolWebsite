/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ltc-bodoni-175": ["ltc-bodoni-175", "serif"],
        "proxima-nova": ["proxima-nova", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
