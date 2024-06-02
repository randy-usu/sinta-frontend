import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/id";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { PageContainer } from "./features/layout";
import {
  Dashboard,
  MahasiswaBimbingan,
  MahasiswaBimbinganDetail,
  MahasiswaUjian,
  SignIn,
  SignUp,
  UsulanSeminarProyek,
} from "./pages";

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
      {
        path: "/mahasiswa-bimbingan",
        children: [
          {
            index: true,
            Component: MahasiswaBimbingan,
          },
          {
            path: "*",
            Component: MahasiswaBimbinganDetail,
          },
        ],
      },
      {
        path: "/mahasiswa-ujian",
        Component: MahasiswaUjian,
      },
      {
        path: "/usulan-seminar-proyek",
        Component: UsulanSeminarProyek,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="id">
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);
