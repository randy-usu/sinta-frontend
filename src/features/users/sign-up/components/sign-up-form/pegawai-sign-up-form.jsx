import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link, Link as RouterLink } from "react-router-dom";

export const PegawaiSignUpForm = () => (
  <>
    <Typography>Admin/Pegawai</Typography>
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
        id="email"
        label="Alamat Surel"
        name="email"
        autoComplete="email"
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
        to="/pegawai/dashboard"
      >
        Daftar
      </Button>
      <Container sx={{ mt: 2 }}>
        <Link component={RouterLink} to="/pegawai">
          Login
        </Link>
      </Container>
    </Box>
  </>
);