/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#212529",
      nude: "#fbf9f5",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },

    fontFamily: {
      tangerine: ["Tangerine"],
      sportinggrotesqueregular: ["sportinggrotesqueregular"],
      sen: ["Sen"],
      "syne-regular": ["Syne Regular"],
      "syne-medium": ["Syne Medium"],
    },
  },

  plugins: [],
};