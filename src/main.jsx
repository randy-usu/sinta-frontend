import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  IcecreamOutlined,
  Layers as LayersIcon,
  Monitor as MonitorIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  Receipt as ReceiptIcon,
  SpaceDashboard as SpaceDashboardIcon,
  UploadFile as UploadFileIcon,
} from "@mui/icons-material";
import { Avatar, Box, Button, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/id";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { 
  PageContainer,
  PageContainerMahasiswa
} from "./features/layout";
import { 
  PortalMahasiswa,
  PortalDosen,
  PortalKaprodi,
  PortalAdmin,
} from "./pages";
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
import {
  SignIn as KaprodiSignIn,
  SignUp as KaprodiSignUp,
  Dashboard as KaprodiDashboard,
  SitIn as KaprodiSitIn,
  SeminarLiteratur as KaprodiSeminarLiteratur,
  PengajuanJudul as KaprodiPengajuanJudul,
  SeminarPraProposal as KaprodiSeminarPraProposal,
  SeminarProposal as KaprodiSeminarProposal,
  SeminarHasil as KaprodiSeminarHasil,
  SidangMejaHijau as KaprodiSidangMejaHijau,
} from "./pages/kaprodi";
import { DrawerNavigationMahasiswa } from "./features/layout/components";

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

const avatar = [
  {
    avatar: "<Avatar>NM</Avatar>",
    text: "Nama Mahasiswa",
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

const KAPRODI_NAVS = [
  { text: "Dashboard", Icon: SpaceDashboardIcon, to: "/kaprodi/dashboard" },
  {
    text: "Sit In",
    Icon: MonitorIcon,
    to: "/kaprodi/sit-in",
  },
  {
    text: "Seminar Literatur",
    Icon: PeopleIcon,
    to: "/kaprodi/seminar-literatur",
  },
  {
    text: "Pengajuan Judul",
    Icon: UploadFileIcon,
    to: "/kaprodi/pengajuan-judul",
  },
  {
    text: "Seminar Pra Proposal",
    Icon: ReceiptIcon,
    to: "/kaprodi/seminar-pra-proposal",
  },
  {
    text: "Seminar Proposal",
    Icon: ReceiptIcon,
    to: "/kaprodi/seminar-proposal",
  },
  {
    text: "Seminar Hasil",
    Icon: ReceiptIcon,
    to: "/kaprodi/seminar-hasil",
  },
  {
    text: "Sidang Meja Hijau",
    Icon: ReceiptIcon,
    to: "/kaprodi/sidang-meja-hijau",
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
    Component: PortalMahasiswa,
  },
  {
    path: "portal-dosen",
    Component: PortalDosen,
  },
  {
    path: "portal-kaprodi",
    Component: PortalKaprodi,
  },
  {
    path: "portal-admin",
    Component: PortalAdmin,
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
          <>
          <PageContainer navigations={MHS_NAVS}>
              <Outlet />
          </PageContainer>
          </>
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
          {
            path: "*",
            element: <></>,
          },
        ],
      },
    ],
  },
  {
    path: "kaprodi",
    children: [
      {
        index: true,
        Component: KaprodiSignIn,
      },
      {
        path: "sign-up",
        Component: KaprodiSignUp,
      },
      {
        element: (
          <PageContainer navigations={KAPRODI_NAVS}>
            <Outlet />
          </PageContainer>
        ),
        children: [
          {
            path: "dashboard",
            Component: KaprodiDashboard,
          },
          {
            path: "sit-in",
            Component: KaprodiSitIn,
          },
          {
            path: "seminar-literatur",
            Component: KaprodiSeminarLiteratur,
          },
          {
            path: "pengajuan-judul",
            Component: KaprodiPengajuanJudul,
          },
          {
            path: "seminar-pra-proposal",
            Component: KaprodiSeminarPraProposal,
          },
          {
            path: "seminar-proposal",
            Component: KaprodiSeminarProposal,
          },
          {
            path: "seminar-hasil",
            Component: KaprodiSeminarHasil,
          },
          {
            path: "sidang-meja-hijau",
            Component: KaprodiSidangMejaHijau,
          },
          {
            path: "*",
            element: <></>,
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
