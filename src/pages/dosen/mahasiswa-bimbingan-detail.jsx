import { Typography, Box } from "@mui/material";

import { InformasiUmum, RiwayatBimbingan } from "../../features/mahasiswa";

const MahasiswaBimbinganDetail = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
        <InformasiUmum />
        <RiwayatBimbingan sx={{ mt: 3 }} />
      </Box>
    </>
  );
};

export default MahasiswaBimbinganDetail;
