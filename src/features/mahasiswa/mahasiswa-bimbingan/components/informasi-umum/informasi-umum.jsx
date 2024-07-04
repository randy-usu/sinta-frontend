import { Box, Button, Link, Typography, styled } from "@mui/material";
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
    <MarginTopTypography variant="h5">Informasi Umum</MarginTopTypography>
    <Typography>Nama: {MAHASISWA.name}</Typography>
    <Typography>NIM: {MAHASISWA.nim}</Typography>
    <Typography>
      Dosen Pembimbing 1: {MAHASISWA.dosenPembimbing1}
    </Typography>
    <Typography>
      Dosen Pembimbing 2: {MAHASISWA.dosenPembimbing2}
    </Typography>
    <Typography>
      Dosen Penguji 1: {MAHASISWA.dosenPenguji1}
    </Typography>
    <Typography>
      Dosen Penguji 2: {MAHASISWA.dosenPenguji2}
    </Typography>
    <Typography>
      Judul Tesis: {MAHASISWA.judulTesis}
    </Typography>
    <Typography>
      Tgl. Terakhir Bimbingan: {MAHASISWA.tglTerakhirBimbingan}
    </Typography>
    <Typography>
      Tahap Terakhir: {MAHASISWA.tahapanTerakhir}
    </Typography>
  </Box>
);
