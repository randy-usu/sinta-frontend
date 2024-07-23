import { LoadingButton } from "@mui/lab";
import { Box, Container, Link, TextField, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../auth-context";
import { useContext } from "react";

export const MahasiswaSignInForm = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [{ loading: authenticationLoading }, authenticateMahasiswa] = useAxios(
    {
      url: "mahasiswa/login",
      method: "POST",
    },
    { manual: true }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const authenticationResponse = await authenticateMahasiswa({
      data: new FormData(event.target),
    });
    localStorage.setItem(
      "mahasiswa_token",
      authenticationResponse.data.data.token
    );
    auth.setUser({
      type: "mahasiswa",
      user: authenticationResponse.data.data.user,
    });
    navigate("dashboard", { replace: true });
  };

  return (
    <>
      <Typography>Mahasiswa</Typography>
      <Box
        component="form"
        sx={{ textAlign: "center" }}
        onSubmit={handleSubmit}
      >
        <TextField
          margin="dense"
          size="small"
          required
          fullWidth
          id="nim"
          label="NIM"
          name="nim"
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
        <LoadingButton
          loading={authenticationLoading}
          type="submit"
          variant="contained"
          sx={{ mt: 3 }}
        >
          Masuk
        </LoadingButton>
        <Container sx={{ mt: 2 }}>
          <Link component={RouterLink} to="sign-up">
            Buat Akun
          </Link>
        </Container>
      </Box>
    </>
  );
};
