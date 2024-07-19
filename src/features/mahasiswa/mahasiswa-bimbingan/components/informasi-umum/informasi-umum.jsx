import { Box, Button, Link, Paper, Table, TableCell, TableContainer, TableRow, Typography, styled } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ArrowBackIosNew as ArrowIcon, } from '@mui/icons-material';

const MAHASISWA = {
  nim: 237038038,
  name: "Rima Susanti",
  dosenPembimbing1: "Suha",
  dosenPembimbing2: "Suhi",
  dosenPenguji1: "Suha",
  dosenPenguji2: "Suhi",
  tglTerakhirBimbingan: "30 Mar 2024",
  tahapanTerakhir: "Seminar Proposal",
  judulTesis: "Optimisasi ....",
};

const MarginTopTypography = styled(Typography)(() => ({
  marginTop: "1rem",
}));

export const InformasiUmum = (props) => (
  <Box {...props}>
    <Link component={RouterLink} to="">
      <Button autoFocus variant="contained" startIcon={<ArrowIcon />} color="info" size="small">
        Back  
      </Button>
    </Link>
    <Typography component="h1" variant="h4"  marginTop={5}>
      Rincian Mahasiswa Bimbingan
    </Typography>
    <MarginTopTypography variant="h5" sx={{ fontWeight: 'bold'}}>Informasi Umum</MarginTopTypography>
      <TableContainer sx={{ maxHeight: 500, width: 700 }}>
        <Table>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: 'bold'}}>
              Nama
            </TableCell>
            <TableCell >
              : {MAHASISWA.name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: 'bold'}}>
              NIM
            </TableCell>
            <TableCell >
              : {MAHASISWA.nim}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: 'bold'}}>
              Dosen Pembimbing 1
            </TableCell>
            <TableCell>
              : {MAHASISWA.dosenPembimbing1}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: 'bold'}}>
              Dosen Pembimbing 2
            </TableCell>
            <TableCell>
              : {MAHASISWA.dosenPembimbing2}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: 'bold'}}>
              Dosen Penguji 1
            </TableCell>
            <TableCell>
              : {MAHASISWA.dosenPenguji1}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: 'bold'}}>
              Dosen Penguji 2
            </TableCell>
            <TableCell>
              : {MAHASISWA.dosenPenguji2}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: 'bold'}}>
              Judul Tesis
            </TableCell>
            <TableCell>
              : {MAHASISWA.judulTesis}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: 'bold'}}>
              Tanggal Terakhir bimbingan
            </TableCell>
            <TableCell>
              : {MAHASISWA.tglTerakhirBimbingan}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: 'bold'}}>
              Tahapan Terakhir
            </TableCell>
            <TableCell>
              : {MAHASISWA.tahapanTerakhir}
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
  </Box>
);
