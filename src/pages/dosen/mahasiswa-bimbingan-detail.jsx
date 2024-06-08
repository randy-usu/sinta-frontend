import { Typography } from "@mui/material";

import { InformasiUmum, RiwayatBimbingan } from "../../features/mahasiswa";

const MahasiswaBimbinganDetail = () => {
  return (
    <>
      <Typography component="h1" variant="h4">
        Rincian Mahasiswa Bimbingan
      </Typography>
      <InformasiUmum sx={{ mt: 3 }} />
      <RiwayatBimbingan sx={{ mt: 3 }} />
    </>
  );
};

export default MahasiswaBimbinganDetail;
