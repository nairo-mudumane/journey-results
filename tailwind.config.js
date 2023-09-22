/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lora", "serif"],
      },
      colors: {
        dark: "#121214",
        primary: "#8257e5",
        primaryHover: "#9466ff",
        secondary: "#ffcd1e",
        secondaryHover: "#fba94c",
        tertiary: "#ffcd1e",
        shadowDark: "#3c3c42",
        shadowLight: "#737380",
        primaryGradient:
          "linear-gradient(to right, #8257e5, #9466ff, #ffcd1e, #fba94c)",
      },
    },
  },
  plugins: [],
};
