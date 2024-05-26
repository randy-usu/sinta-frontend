import { Typography } from "@mui/material";

import { MahasiswaUjianTable } from "../features/mahasiswa";

const MahasiswaUjian = () => {
  return (
    <>
      <Typography component="h1" variant="h4">
        Mahasiswa Ujian
      </Typography>
      <MahasiswaUjianTable sx={{ mt: 3 }} />
    </>
  );
};

export default MahasiswaUjian;
