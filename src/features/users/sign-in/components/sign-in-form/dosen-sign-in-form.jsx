import { Box, Button, Container, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const DosenSignInForm = () => (
  <Box component="form" noValidate sx={{ textAlign: "center" }}>
    <TextField
      margin="dense"
      size="small"
      required
      fullWidth
      id="email"
      label="Alamat Surel"
      name="email"
      autoComplete="email"
      autoFocus
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
      autoComplete="current-password"
    />
    <Button
      type="submit"
      variant="contained"
      sx={{ mt: 3 }}
      component={RouterLink}
      to="dashboard"
    >
      Masuk
    </Button>
    <Container sx={{ mt: 2 }}>
      <Link component={RouterLink} to="sign-up">
        Buat Akun
      </Link>
    </Container>
  </Box>
);
