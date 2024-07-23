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
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { PageContainer } from "./features/layout";
import {
  PortalAdmin,
  PortalDosen,
  PortalKaprodi,
  PortalMahasiswa,
} from "./pages";
import {
  Dashboard,
  SignIn as DosenSignIn,
  SignUp as DosenSignUp,
  MahasiswaBimbingan,
  MahasiswaBimbinganDetail,
  MahasiswaUjian,
  UsulanSeminarProyek,
} from "./pages/dosen";
import {
  Dashboard as KaprodiDashboard,
  PengajuanJudul as KaprodiPengajuanJudul,
  SeminarHasil as KaprodiSeminarHasil,
  SeminarLiteratur as KaprodiSeminarLiteratur,
  SeminarPraProposal as KaprodiSeminarPraProposal,
  SeminarProposal as KaprodiSeminarProposal,
  SidangMejaHijau as KaprodiSidangMejaHijau,
  SignIn as KaprodiSignIn,
  SignUp as KaprodiSignUp,
  SitIn as KaprodiSitIn,
} from "./pages/kaprodi";
import {
  Dashboard as MahasiswaDashboard,
  SignIn as MahasiswaSignIn,
  SignUp as MahasiswaSignUp,
  PengajuanJudul,
  SeminarHasil,
  SeminarLiteratur,
  SeminarPraProposal,
  SeminarProposal,
  SeminarProyek,
  SidangMejaHijau,
  SitIn,
} from "./pages/mahasiswa";
import {
  Dashboard as PegawaiDashboard,
  PengajuanJudul as PegawaiPengajuanJudul,
  SeminarPraProposal as PegawaiSeminarPraProposal,
  SignIn as PegawaiSignIn,
  SignUp as PegawaiSignUp,
} from "./pages/pegawai";
import { configure } from "axios-hooks";
import Axios from "axios";
import { AuthProvider } from "./auth-context";
import { RequireAuth } from "./require-auth";

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

const PEGAWAI_NAVS = [
  { text: "Dashboard", Icon: SpaceDashboardIcon, to: "/pegawai/dashboard" },
  {
    text: "Pengajuan Judul",
    Icon: UploadFileIcon,
    to: "/pegawai/pengajuan-judul",
  },
  {
    text: "Seminar Pra Proposal",
    Icon: ReceiptIcon,
    to: "/pegawai/seminar-pra-proposal",
  },
  {
    text: "Seminar Proposal",
    Icon: ReceiptIcon,
    to: "/pegawai/seminar-proposal",
  },
  {
    text: "Seminar Proyek",
    Icon: LayersIcon,
    to: "/pegawai/seminar-proyek",
  },
  {
    text: "Seminar Hasil",
    Icon: ReceiptIcon,
    to: "/pegawai/seminar-hasil",
  },
  {
    text: "Sidang Meja Hijau",
    Icon: ReceiptIcon,
    to: "/pegawai/sidang-meja-hijau",
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
    path: "/",
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
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
              <RequireAuth>
                <PageContainer navigations={MHS_NAVS}>
                  <Outlet />
                </PageContainer>
              </RequireAuth>
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
      {
        path: "pegawai",
        children: [
          {
            index: true,
            Component: PegawaiSignIn,
          },
          {
            path: "sign-up",
            Component: PegawaiSignUp,
          },
          {
            element: (
              <PageContainer navigations={PEGAWAI_NAVS}>
                <Outlet />
              </PageContainer>
            ),
            children: [
              {
                path: "dashboard",
                Component: PegawaiDashboard,
              },
              // {
              //   path: "seminar-proyek",
              //   Component: PegawaiSeminarProyek,
              // },
              {
                path: "pengajuan-judul",
                Component: PegawaiPengajuanJudul,
              },
              {
                path: "seminar-pra-proposal",
                Component: PegawaiSeminarPraProposal,
              },
              // {
              //   path: "seminar-proposal",
              //   Component: PegawaiSeminarProposal,
              // },
              // {
              //   path: "seminar-hasil",
              //   Component: PegawaiSeminarHasil,
              // },
              // {
              //   path: "sidang-meja-hijau",
              //   Component: PegawaiSidangMejaHijau,
              // },
              {
                path: "*",
                element: <></>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const axios = Axios.create({
  baseURL: "http://localhost:8000/api",
});

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("mahasiswa_token");

    if (token) {
      config.headers = {
        authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

configure({
  axios,
  defaultOptions: { useCache: false, ssr: false },
});

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
