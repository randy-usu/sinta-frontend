import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { PageContainer } from "./features/layout";
import { Dashboard, SignIn, SignUp } from "./pages";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006633",
    },
  },
});

const router = createBrowserRouter([
  {
    index: true,
    Component: SignIn,
  },
  {
    path: "/sign-up",
    Component: SignUp,
  },
  {
    element: (
      <PageContainer>
        <Outlet />
      </PageContainer>
    ),
    children: [
      {
        path: "/dashboard",
        Component: Dashboard,
      },
    ],
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
