import { Container } from "@mui/material";

import { SignInForm } from "../features/users";

const SignIn = () => (
  <Container component="main" maxWidth="xs" sx={{ pt: 8 }}>
    <SignInForm />
  </Container>
);

export default SignIn;
