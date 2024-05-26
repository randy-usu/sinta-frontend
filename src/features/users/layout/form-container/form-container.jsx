import { Avatar, Container, Stack, Typography } from "@mui/material";

import logoUrl from "../assets/logo.jpg";

export const FormContainer = ({ children }) => (
  <Container component="main" maxWidth="xs" sx={{ mt: 8, mb: 2 }}>
    <Stack alignItems="center" spacing={4}>
      <Avatar src={logoUrl} sx={{ width: 100, height: 100 }} />
      <Typography component="h1" variant="h5" textAlign="center">
        Sistem Informasi Tugas Akhir (SInTA)
      </Typography>
      {children}
    </Stack>
  </Container>
);
