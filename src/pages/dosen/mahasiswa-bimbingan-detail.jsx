import { Typography, Box } from "@mui/material";

import { InformasiUmum, RiwayatBimbingan } from "../../features/mahasiswa";

const MahasiswaBimbinganDetail = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
        <Typography component="h1" variant="h4">
          Rincian Mahasiswa Bimbingan
        </Typography>
        <InformasiUmum sx={{ mt: 3 }} />
        <RiwayatBimbingan sx={{ mt: 3 }} />
      </Box>
    </>
  );
};

export default MahasiswaBimbinganDetail;
