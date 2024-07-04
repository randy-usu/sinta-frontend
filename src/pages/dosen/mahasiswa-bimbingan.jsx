import { Box, Typography } from "@mui/material";

import { MahasiswaBimbinganTable } from "../../features/mahasiswa";

const MahasiswaBimbingan = () => (
  <>
    <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
      <Typography component="h1" variant="h4">
        Mahasiswa Bimbingan
      </Typography>
      <MahasiswaBimbinganTable sx={{ mt: 3 }} />
    </Box>
  </>
);

export default MahasiswaBimbingan;
