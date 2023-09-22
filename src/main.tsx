import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/styles";
import { App } from "./App";
import { MuiTheme } from "./global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={MuiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
