import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006633",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: SignIn,
  },
  {
    path: "/sign-up",
    Component: SignUp,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
