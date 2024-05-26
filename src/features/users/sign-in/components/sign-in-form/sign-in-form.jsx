import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import logoUrl from "../../assets/logo.jpg";

export const SignInForm = () => (
  <Stack alignItems="center" spacing={4}>
    <Avatar src={logoUrl} sx={{ width: 100, height: 100 }} />
    <Typography component="h1" variant="h5" textAlign="center">
      Sistem Informasi Tugas Akhir (SInTA)
    </Typography>
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
      <Button type="submit" variant="contained" sx={{ mt: 3 }}>
        Masuk
      </Button>
      <Container sx={{ my: 2 }}>
        <Link href="#">Buat Akun</Link>
      </Container>
    </Box>
  </Stack>
);
