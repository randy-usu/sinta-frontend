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
import { Portal } from "./pages";
import {
  Dashboard,
  MahasiswaBimbingan,
  MahasiswaBimbinganDetail,
  MahasiswaUjian,
  SignIn as DosenSignIn,
  SignUp as DosenSignUp,
  UsulanSeminarProyek,
} from "./pages/dosen";
import {
  SignIn as MahasiswaSignIn,
  SignUp as MahasiswaSignUp,
} from "./pages/mahasiswa";

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
    Component: Portal,
  },
  {
    path: "mahasiswa",
    children: [
      {
        index: true,
        Component: MahasiswaSignIn,
      },
      {
        path: "sign-up",
        Component: MahasiswaSignUp,
      },
    ],
  },
  {
    path: "dosen",
    children: [
      {
        index: true,
        Component: DosenSignIn,
      },
      {
        path: "sign-up",
        Component: DosenSignUp,
      },
      {
        element: (
          <PageContainer>
            <Outlet />
          </PageContainer>
        ),
        children: [
          {
            path: "dashboard",
            Component: Dashboard,
          },
          {
            path: "mahasiswa-bimbingan",
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
            path: "mahasiswa-ujian",
            Component: MahasiswaUjian,
          },
          {
            path: "usulan-seminar-proyek",
            Component: UsulanSeminarProyek,
          },
        ],
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
