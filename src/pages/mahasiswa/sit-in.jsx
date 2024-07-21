import {
  AccessTime as AccessTimeIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
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
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import useAxios from "axios-hooks";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useState } from "react";

const CheckInDialog = ({ open, onClose, onSubmit }) => {
  const [{ loading: checkingInMahasiswa }, checkInMahasiswa] = useAxios(
    {
      url: "mahasiswa/sitin/checkin",
      method: "POST",
    },
    { manual: true }
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          await checkInMahasiswa({ data: formData });
          onSubmit();
        },
      }}
    >
      <DialogTitle align="center">Formulir Masuk Sit-In</DialogTitle>
      <DialogContent>
        <DialogContentText>Swafoto Masuk</DialogContentText>
        <TextField
          required
          type="file"
          size="small"
          inputProps={{ accept: ".png,.jpg,.jpeg" }}
          name="check_in_proof"
        />
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={checkingInMahasiswa}
          variant="contained"
          type="submit"
        >
          SIMPAN
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default function SitIn() {
  const [
    { data: sitInResponseData, loading: sitInRequestLoading },
    refetchSitIn,
  ] = useAxios({
    url: "mahasiswa/sitin",
  });

  const [clockOut, setClockOut] = useState(false);

  const handleOpenClockOut = () => {
    setClockOut(true);
  };
  const handleCloseClockOut = () => {
    setClockOut(false);
  };

  const [clockInDialogOpen, setClockInDialogOpen] = useState(false);
  const handleCheckInClick = () => {
    setClockInDialogOpen(true);
  };
  const handleClockInDialogClose = () => {
    setClockInDialogOpen(false);
  };
  const handleClockInDialogSubmit = () => {
    setClockInDialogOpen(false);
    refetchSitIn();
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
                  <TextField type="file" size="small" />
                </Button>
                <DialogContentText>Swafoto Keluar</DialogContentText>
                <Button
                  component="label"
                  role={undefined}
                  variant="outlined"
                  tabIndex={-1}
                >
                  <TextField type="file" size="small" />
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
                onClick={handleCheckInClick}
                sx={{ borderRadius: 5, color: "black", marginBottom: 5 }}
                color="inherit"
              >
                Check In
              </Button>
            </Stack>
            <MaterialReactTable table={table} />
          </Grid>
        </Grid>
      </Box>
      <CheckInDialog
        open={clockInDialogOpen}
        onClose={handleClockInDialogClose}
        onSubmit={handleClockInDialogSubmit}
      />
    </>
  );
}
