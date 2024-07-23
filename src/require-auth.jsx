import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./auth-context";
import useAxios from "axios-hooks";

export function RequireAuth({ children }) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [, getMahasiswa] = useAxios(
    {
      url: "mahasiswa/me",
    },
    { manual: true }
  );

  useEffect(() => {
    if (auth.user) return;

    (async () => {
      try {
        const mahasiswaResponse = await getMahasiswa();
        auth.setUser({ type: "mahasiswa", user: mahasiswaResponse.data.data });
      } catch (error) {
        if (error.code === "ERR_BAD_REQUEST") navigate("/", { replace: true });
      }
    })();
  }, [auth, getMahasiswa, navigate]);

  if (!auth.user) return <></>;

  return children;
}
