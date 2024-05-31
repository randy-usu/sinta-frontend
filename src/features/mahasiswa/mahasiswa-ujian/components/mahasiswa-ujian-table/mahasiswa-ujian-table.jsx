import { useState } from "react";

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

import {
  FontSizeInheritedTypography,
  PenilaianMahasiswaDialog,
} from "../../../../ui";

const ROWS = [
  {
    number: 2,
    nim: 237038038,
    name: "Rima Susanti",
    dosenPembimbing1: "Suha",
    dosenPembimbing2: "Suhi",
    dosenPenguji1: "Suha",
    dosenPenguji2: "Suhi",
    tglUjian: "30 Mar 2024",
    tahapanTerakhir: "Seminar Proposal",
  },
  {
    number: 1,
    nim: 237038019,
    name: "Roma Susanto",
    dosenPembimbing1: "Suha",
    dosenPembimbing2: "Suhi",
    dosenPenguji1: "Suha",
    dosenPenguji2: "Suhi",
    tglUjian: "26 Mar 2024",
    tahapanTerakhir: "Seminar Proyek",
  },
];

const PROPERTIES = [
  ["NIM", 237038038],
  ["Nama", "Rima Susanti"],
  ["Dosen Pembimbing 1", "Suha"],
  ["Dosen Pembimbing 2", "Suhi"],
  ["Dosen Penguji 1", "Suha"],
  ["Dosen Penguji 2", "Suhi"],
  ["Tgl. Ujian", "30 Mar 2024"],
  ["Tahapan Terakhir", "Seminar Proposal"],
];

export const MahasiswaUjianTable = (props) => {
  const [penilaianDialogOpen, setPenilaianDialogOpen] = useState(false);

  const handlePenilaianDialogClose = () => setPenilaianDialogOpen(false);

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
              <TableCell>Dosen Pembimbing</TableCell>
              <TableCell>Dosen Penguji</TableCell>
              <TableCell>Tahapan Terakhir</TableCell>
              <TableCell>Tgl. Ujian</TableCell>
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
                <TableCell>
                  <FontSizeInheritedTypography>
                    {row.dosenPembimbing1}
                  </FontSizeInheritedTypography>
                  <FontSizeInheritedTypography>
                    {row.dosenPembimbing2}
                  </FontSizeInheritedTypography>
                </TableCell>
                <TableCell>
                  <FontSizeInheritedTypography>
                    {row.dosenPenguji1}
                  </FontSizeInheritedTypography>
                  <FontSizeInheritedTypography>
                    {row.dosenPenguji2}
                  </FontSizeInheritedTypography>
                </TableCell>
                <TableCell>{row.tahapanTerakhir}</TableCell>
                <TableCell>{row.tglUjian}</TableCell>
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
      <PenilaianMahasiswaDialog
        properties={PROPERTIES}
        open={penilaianDialogOpen}
        onClose={handlePenilaianDialogClose}
      />
    </>
  );
};
