import { LoadingButton } from "@mui/lab";
import { Box, Container, Link, TextField, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../../auth-context";

export const MahasiswaSignUpForm = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [{ loading: registrationLoading }, registerMahasiswa] = useAxios(
    {
      url: "mahasiswa/register",
      method: "POST",
    },
    { manual: true }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const registrationResponse = await registerMahasiswa({
      data: new FormData(event.target),
    });
    localStorage.setItem(
      "mahasiswa_token",
      registrationResponse.data.data.token
    );
    auth.setUser({
      type: "mahasiswa",
      user: registrationResponse.data.data.user,
    });
    navigate("/mahasiswa/dashboard");
  };

  return (
    <>
      <Typography>Mahasiswa</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ textAlign: "center" }}
      >
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
          name="email"
          label="Alamat Surel"
          type="email"
          id="email"
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
        <LoadingButton
          loading={registrationLoading}
          type="submit"
          variant="contained"
          sx={{ mt: 3 }}
        >
          Daftar
        </LoadingButton>
        <Container sx={{ mt: 2 }}>
          <Link component={RouterLink} to="/mahasiswa">
            Login
          </Link>
        </Container>
      </Box>
    </>
  );
};
