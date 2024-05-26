import { Typography } from "@mui/material";

import { MahasiswaBimbinganTable } from "../features/mahasiswa";

const MahasiswaBimbingan = () => (
  <>
    <Typography component="h1" variant="h4">
      Mahasiswa Bimbingan
    </Typography>
    <MahasiswaBimbinganTable sx={{ mt: 3 }} />
  </>
);

export default MahasiswaBimbingan;
