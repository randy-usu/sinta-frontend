import { Box, Typography } from "@mui/material";

import { MahasiswaUjianTable } from "../../features/mahasiswa";

const MahasiswaUjian = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
        <Typography component="h1" variant="h4">
          Mahasiswa Ujian
        </Typography>
        <MahasiswaUjianTable sx={{ mt: 3 }} />
      </Box>
    </>
  );
};

export default MahasiswaUjian;
