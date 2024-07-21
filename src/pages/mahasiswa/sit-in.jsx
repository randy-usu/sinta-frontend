import {
  AccessTime as AccessTimeIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import useAxios from "axios-hooks";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")`
clip: 'rect(0 0 0 0)',
clipPath: 'inset(50%)',
height: 1px,
overflow: 'hidden',
position: 'absolute',
bottom: 0,
left: 0,
whiteSpace: 'nowrap',
width: 1,
`;

export default function SitIn() {
  const [{ data: sitInResponseData, loading: sitInRequestLoading }] = useAxios({
    url: "mahasiswa/sitin",
  });

  const [clockOut, setClockOut] = useState(false);

  const handleOpenClockOut = () => {
    setClockOut(true);
  };
  const handleCloseClockOut = () => {
    setClockOut(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      accessorFn: (dataRow) => new Date(dataRow.date),
      header: "Tanggal",
      filterVariant: "date-range",
      Cell: ({ cell }) => cell.getValue().toLocaleDateString("id"),
    },
    {
      accessorKey: "checkIn",
      header: "Waktu Masuk",
      filterVariant: "time-range",
    },
    {
      accessorKey: "checkOut",
      header: "Waktu Keluar",
      filterVariant: "time-range",
    },
    {
      accessorKey: "duration",
      header: "Durasi",
      filterVariant: "text",
      Cell: ({ cell }) => `${cell.getValue()} jam`,
    },
    {
      accessorKey: "status",
      header: "Aksi",
      Cell: ({ cell }) =>
        cell.getValue() === 0 && (
          <>
            <Tooltip title="Clock Out">
              <Button
                variant="contained"
                onClick={handleOpenClockOut}
                startIcon={<AccessTimeIcon />}
                color="error"
              >
                Clock Out
              </Button>
            </Tooltip>
            <Dialog open={clockOut} onClose={handleCloseClockOut}>
              <DialogTitle align="center">Formulir Keluar Sit-In</DialogTitle>
              <DialogContent>
                <DialogContentText>Bukti/Laporan Sit In</DialogContentText>
                <Button
                  component="label"
                  role={undefined}
                  variant="outlined"
                  tabIndex={-1}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
                <DialogContentText>Swafoto Keluar</DialogContentText>
                <Button
                  component="label"
                  role={undefined}
                  variant="outlined"
                  tabIndex={-1}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  variant="contained"
                  onClick={handleCloseClockOut}
                >
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </>
        ),
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data: sitInResponseData?.data ?? [],
    enableGlobalFilter: false,
    enableSorting: false,
    enableColumnFilters: false,
    state: {
      isLoading: sitInRequestLoading,
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="row">
              <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
                Sit In
              </Typography>
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleOpen}
                sx={{ borderRadius: 5, color: "black", marginBottom: 5 }}
                color="inherit"
              >
                Check In
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle align="center">Formulir Masuk Sit-In</DialogTitle>
                <DialogContent>
                  <DialogContentText>Swafoto Masuk</DialogContentText>
                  <Button
                    component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                  >
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus variant="contained" onClick={handleClose}>
                    SIMPAN
                  </Button>
                </DialogActions>
              </Dialog>
            </Stack>
            <MaterialReactTable table={table} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
