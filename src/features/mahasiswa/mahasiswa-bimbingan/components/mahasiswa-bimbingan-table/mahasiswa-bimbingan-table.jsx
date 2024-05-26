import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ROWS = [
  {
    number: 2,
    nim: 237038038,
    name: "Rima Susanti",
    dosenPembimbing1: "Suha",
    dosenPembimbing2: "Suhi",
    dosenPenguji1: "Suha",
    dosenPenguji2: "Suhi",
    tglTerakhirBimbingan: "30 Mar 2024",
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
    tglTerakhirBimbingan: "26 Mar 2024",
    tahapanTerakhir: "Seminar Proyek",
  },
];

const FontSizeInheritedTypography = styled(Typography)(() => ({
  fontSize: "inherit",
}));

export const MahasiswaBimbinganTable = (props) => (
  <TableContainer component={Paper} {...props}>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>No.</TableCell>
          <TableCell>NIM</TableCell>
          <TableCell>Nama</TableCell>
          <TableCell>Dosen Pembimbing</TableCell>
          <TableCell>Dosen Penguji</TableCell>
          <TableCell>Tgl. Terakhir Bimbingan</TableCell>
          <TableCell>Tahapan Terakhir</TableCell>
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
            <TableCell>{row.tglTerakhirBimbingan}</TableCell>
            <TableCell>{row.tahapanTerakhir}</TableCell>
            <TableCell>
              <Link
                component={RouterLink}
                to={`/mahasiswa-bimbingan/${row.nim}`}
              >
                Detail
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
