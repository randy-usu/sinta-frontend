import { Typography } from "@mui/material";

import { UsulanSeminarProyekTable } from "../features/usulan-seminar-proyek/components/usulan-seminar-proyek-table/usulan-seminar-proyek-table";

const UsulanSeminarProyek = () => {
  return (
    <>
      <Typography component="h1" variant="h4">
        Usulan Seminar Proyek
      </Typography>
      <UsulanSeminarProyekTable sx={{ mt: 3 }} />
    </>
  );
};

export default UsulanSeminarProyek;
