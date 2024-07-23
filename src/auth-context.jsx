import useAxios from "axios-hooks";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [{ loading: logOutLoading }, logOutMahasiswa] = useAxios(
    {
      url: "mahasiswa/logout",
      method: "POST",
    },
    { manual: true }
  );

  const signOut = async () => {
    if (user?.type !== "mahasiswa") {
      navigate("/");
      return;
    }

    try {
      await logOutMahasiswa();
    } finally {
      localStorage.removeItem("mahasiswa_token");
      navigate("/");
    }
  };

  const value = { user, signOut, setUser, logOutLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
