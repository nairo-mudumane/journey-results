/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lora", "serif"],
      },
      colors: {
        dark: "#242424",
        primary: "#4CAF50",
        secondary: "#FFC107",
        tertiary: "#FF5722",
        shadowDark: "#333333",
        shadowLight: "#009688",
      },
    },
  },
  plugins: [],
};
