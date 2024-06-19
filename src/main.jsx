import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Layers as LayersIcon,
  Monitor as MonitorIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  Receipt as ReceiptIcon,
  SpaceDashboard as SpaceDashboardIcon,
  UploadFile as UploadFileIcon,
} from "@mui/icons-material";
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
  PengajuanJudul,
  SeminarLiteratur,
  SignIn as MahasiswaSignIn,
  SignUp as MahasiswaSignUp,
  SitIn,
  SeminarPraProposal,
  SeminarProposal,
  SeminarHasil,
  SeminarProyek,
  SidangMejaHijau,
  Dashboard as MahasiswaDashboard,
} from "./pages/mahasiswa";

const DOSEN_NAVS = [
  { text: "Dashboard", Icon: SpaceDashboardIcon, to: "/dosen/dashboard" },
  {
    text: "Mahasiswa Bimbingan",
    Icon: PeopleIcon,
    to: "/dosen/mahasiswa-bimbingan",
  },
  {
    text: "Mahasiswa Ujian",
    Icon: PersonIcon,
    to: "/dosen/mahasiswa-ujian",
  },
  {
    text: "Usulan Seminar Proyek",
    Icon: UploadFileIcon,
    to: "/dosen/usulan-seminar-proyek",
  },
];

const MHS_NAVS = [
  { text: "Dashboard", Icon: SpaceDashboardIcon, to: "/mahasiswa/dashboard" },
  {
    text: "Sit In",
    Icon: MonitorIcon,
    to: "/mahasiswa/sit-in",
  },
  {
    text: "Seminar Literatur",
    Icon: PeopleIcon,
    to: "/mahasiswa/seminar-literatur",
  },
  {
    text: "Pengajuan Judul",
    Icon: UploadFileIcon,
    to: "/mahasiswa/pengajuan-judul",
  },
  {
    text: "Seminar Pra Proposal",
    Icon: ReceiptIcon,
    to: "/mahasiswa/seminar-pra-proposal",
  },
  {
    text: "Seminar Proposal",
    Icon: ReceiptIcon,
    to: "/mahasiswa/seminar-proposal",
  },
  {
    text: "Seminar Proyek",
    Icon: LayersIcon,
    to: "/mahasiswa/seminar-proyek",
  },
  {
    text: "Seminar Hasil",
    Icon: ReceiptIcon,
    to: "/mahasiswa/seminar-hasil",
  },
  {
    text: "Sidang Meja Hijau",
    Icon: ReceiptIcon,
    to: "/mahasiswa/sidang-meja-hijau",
  },
];

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
      {
        element: (
          <PageContainer navigations={MHS_NAVS}>
            <Outlet />
          </PageContainer>
        ),
        children: [
          {
            path: "sit-in",
            Component: SitIn,
          },
          {
            path: "seminar-literatur",
            Component: SeminarLiteratur,
          },
          {
            path: "pengajuan-judul",
            Component: PengajuanJudul,
          },
          {
            path: "seminar-pra-proposal",
            Component: SeminarPraProposal,
          },
          {
            path: "seminar-proposal",
            Component: SeminarProposal,
          },
          {
            path: "seminar-proyek",
            Component: SeminarProyek,
          },
          {
            path: "seminar-hasil",
            Component: SeminarHasil,
          },
          {
            path: "sidang-meja-hijau",
            Component: SidangMejaHijau,
          },
          {
            path: "dashboard",
            Component: MahasiswaDashboard,
          },
          {
            path: "*",
            element: <></>,
          },
        ],
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
          <PageContainer navigations={DOSEN_NAVS}>
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
