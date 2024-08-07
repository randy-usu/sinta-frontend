import { Box, Typography } from "@mui/material";

import { MahasiswaUjianTable } from "../../features/mahasiswa";

const MahasiswaUjian = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
        <MahasiswaUjianTable sx={{ mt: 3 }} />
      </Box>
    </>
  );
};

export default MahasiswaUjian;
