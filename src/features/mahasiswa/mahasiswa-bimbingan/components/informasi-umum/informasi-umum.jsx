import { Box, Typography, styled } from "@mui/material";

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
    <Typography variant="h5">Informasi Umum</Typography>
    <MarginTopTypography>Nama: {MAHASISWA.name}</MarginTopTypography>
    <MarginTopTypography>NIM: {MAHASISWA.nim}</MarginTopTypography>
    <MarginTopTypography>
      Dosen Pembimbing 1: {MAHASISWA.dosenPembimbing1}
    </MarginTopTypography>
    <MarginTopTypography>
      Dosen Pembimbing 2: {MAHASISWA.dosenPembimbing2}
    </MarginTopTypography>
    <MarginTopTypography>
      Dosen Penguji 1: {MAHASISWA.dosenPenguji1}
    </MarginTopTypography>
    <MarginTopTypography>
      Dosen Penguji 2: {MAHASISWA.dosenPenguji2}
    </MarginTopTypography>
    <MarginTopTypography>
      Judul Tesis: {MAHASISWA.judulTesis}
    </MarginTopTypography>
    <MarginTopTypography>
      Tgl. Terakhir Bimbingan: {MAHASISWA.tglTerakhirBimbingan}
    </MarginTopTypography>
    <MarginTopTypography>
      Tahap Terakhir: {MAHASISWA.tahapanTerakhir}
    </MarginTopTypography>
  </Box>
);
