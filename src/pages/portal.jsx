import { Button, Unstable_Grid2 as Grid, Stack } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const Portal = () => (
  <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
    <Grid container spacing={2}>
      <Grid xs={6}>
        <Button
          variant="contained"
          fullWidth
          component={RouterLink}
          to="mahasiswa"
        >
          Mahasiswa
        </Button>
      </Grid>
      <Grid xs={6}>
        <Button variant="contained" fullWidth component={RouterLink} to="dosen">
          Dosen
        </Button>
      </Grid>
      <Grid xs={6}>
        <Button
          variant="contained"
          fullWidth
          component={RouterLink}
          to="kaprodi"
        >
          Kaprodi
        </Button>
      </Grid>
      <Grid xs={6}>
        <Button variant="contained" fullWidth>
          Admin/Pegawai
        </Button>
      </Grid>
    </Grid>
  </Stack>
);

export default Portal;
