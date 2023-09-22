import { createTheme } from "@mui/material";

export const THEME = {
  colors: {
    dark: "#0f0f11",
    primary: "#8257e5",
    primaryHover: "#9466ff",
    secondary: "#ffcd1e",
    secondaryHover: "#fba94c",
    tertiary: "#ffcd1e",
    shadowDark: "#3c3c42",
    shadowLight: "#121214",
    shadowBorderColor: "#29292e",
    primaryGradient:
      "linear-gradient(to right, #8257e5, #9466ff, #ffcd1e, #fba94c)",
  },
};

export const MuiTheme = createTheme({
  typography: { fontFamily: ["Lora", "serif"].join(",") },
  palette: {
    primary: { main: THEME.colors.primary },
    secondary: { main: THEME.colors.secondary },
    background: { default: THEME.colors.dark, paper: THEME.colors.dark },
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: { variant: "elevation" },
          style: {
            background: `${THEME.colors.shadowLight} !important`,
            border: "1px solid",
            borderColor: THEME.colors.shadowBorderColor,
          },
        },
      ],
    },
  },
});
