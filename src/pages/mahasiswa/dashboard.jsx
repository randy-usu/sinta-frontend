import { Search as SearchIcon } from "@mui/icons-material";
import { Grid, Typography, Box } from "@mui/material";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";
import { data } from "../../features/layout/components/tabel-mahasiswa/tabel-dashboard";

export default function Dashboard() {
  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "No.",
    },
    {
      accessorKey: "agenda",
      header: "Agenda",
      filterVariant: "text",
    },
    {
      accessorKey: "tanggal",
      header: "Tanggal",
      filterVariant: "text",
    },
    {
      accessorKey: "lampiran",
      header: "Lampiran",
    },
  ]);

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      showColumnFilter: true,
      showGlobalFilter: true,
    },
    positionGlobalFilter: "left",
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h4"
              sx={{ flex: 1, marginBottom: 5 }}
            >
              Dashboard
            </Typography>
            <div>
              <MaterialReactTable table={table}></MaterialReactTable>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
