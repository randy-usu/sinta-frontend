import { Box, Button, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const MahasiswaSignUpForm = () => (
  <>
    <Typography>Mahasiswa</Typography>
    <Box component="form" noValidate sx={{ textAlign: "center" }}>
      <TextField
        margin="dense"
        size="small"
        required
        fullWidth
        id="name"
        label="Nama Lengkap"
        name="name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        margin="dense"
        size="small"
        required
        fullWidth
        id="nim"
        label="NIM"
        name="nim"
      />
      <TextField
        margin="dense"
        size="small"
        required
        fullWidth
        name="password"
        label="Kata Sandi"
        type="password"
        id="password"
        autoComplete="new-password"
      />
      <TextField
        margin="dense"
        size="small"
        required
        fullWidth
        name="password-confirmation"
        label="Konfirmasi Kata Sandi"
        type="password"
        id="password-confirmation"
        autoComplete="new-password"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3 }}
        component={RouterLink}
        to="/mahasiswa/sit-in"
      >
        Daftar
      </Button>
    </Box>
  </>
);
