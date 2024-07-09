import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

import { PenilaianMahasiswaDialog } from "../../../ui";
import { PemilihanTanggalWaktuSeminarProyekDialog } from "../pemilihan-tanggal-waktu-seminar-proyek-dialog";

const ROWS = [
  {
    number: 2,
    nim: 237038038,
    name: "Rima Susanti",
    tglTerakhirBimbingan: "30 Mar 2024",
    tglPengajuan: "01 Apr 2024",
    sudahSeminar: false,
  },
  {
    number: 1,
    nim: 237038019,
    name: "Roma Susanto",
    tglTerakhirBimbingan: "26 Mar 2024",
    tglPengajuan: "01 Apr 2024",
    sudahSeminar: true,
  },
];

const PROPERTIES = [
  ["NIM", 237038038],
  ["Nama", "Rima Susanti"],
  ["Tgl. Terakhir Bimbingan", "30 Mar 2024"],
  ["Tgl. Pengajuan", "01 Apr 2024"],
];

export const UsulanSeminarProyekTable = (props) => {
  const [tanggalDialogOpen, setTanggalDialogOpen] = useState(false);
  const [penilaianDialogOpen, setPenilaianDialogOpen] = useState(false);

  const handleTanggalDialogClose = () => setTanggalDialogOpen(false);
  const handlePenilaianDialogClose = () => setPenilaianDialogOpen(false);

  const handlePilihTglClick = () => setTanggalDialogOpen(true);
  const handlePenilaianClick = () => setPenilaianDialogOpen(true);

  return (
    <>
      <TableContainer component={Paper} {...props}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>NIM</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Tgl. Terakhir Bimbingan</TableCell>
              <TableCell>Tgl. Pengajuan</TableCell>
              <TableCell>Tgl Seminar Proyek</TableCell>
              <TableCell>Input Nilai</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell>{row.nim}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.tglTerakhirBimbingan}</TableCell>
                <TableCell>{row.tglPengajuan}</TableCell>
                <TableCell>
                  <Link component="button" onClick={handlePilihTglClick}>
                    Pilih Tgl
                  </Link>
                </TableCell>
                <TableCell>
                  <Link component="button" onClick={handlePenilaianClick}>
                    Input Nilai
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PemilihanTanggalWaktuSeminarProyekDialog
        open={tanggalDialogOpen}
        onClose={handleTanggalDialogClose}
      />
      <PenilaianMahasiswaDialog
        properties={PROPERTIES}
        open={penilaianDialogOpen}
        onClose={handlePenilaianDialogClose}
      />
    </>
  );
};
