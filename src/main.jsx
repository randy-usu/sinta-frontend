import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import SignIn from "./pages/sign-in";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006633",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  </StrictMode>
);
