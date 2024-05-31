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

export const UsulanSeminarProyekTable = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogClose = () => setDialogOpen(false);

  const handlePilihTglClick = () => setDialogOpen(true);

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
              <TableCell>Aksi</TableCell>
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
                  {row.sudahSeminar ? (
                    <Link component="button">Input Nilai</Link>
                  ) : (
                    <Link component="button" onClick={handlePilihTglClick}>
                      Pilih Tgl
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PemilihanTanggalWaktuSeminarProyekDialog
        open={dialogOpen}
        onClose={handleDialogClose}
      />
    </>
  );
};
