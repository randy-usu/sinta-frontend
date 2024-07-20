import { LoadingButton } from "@mui/lab";
import { Box, Container, Link, TextField, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export const MahasiswaSignUpForm = () => {
  const navigate = useNavigate();
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
        <LoadingButton
          loading={registrationLoading}
          type="submit"
          variant="contained"
          sx={{ mt: 3 }}
        >
          Daftar
        </LoadingButton>
        <Container sx={{ mt: 2 }}>
          <Link component={RouterLink} to="..">
            Login
          </Link>
        </Container>
      </Box>
    </>
  );
};
