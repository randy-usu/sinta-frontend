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

const CheckOutDialog = ({ open, onClose, onSubmit, sitInId }) => {
  const [{ loading: checkingOutMahasiswa }, checkOutMahasiswa] = useAxios(
    {
      url: `mahasiswa/sitin/checkout/${sitInId}`,
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
          await checkOutMahasiswa({ data: formData });
          onSubmit();
        },
      }}
    >
      <DialogTitle align="center">Formulir Keluar Sit-In</DialogTitle>
      <DialogContent>
        <DialogContentText>Bukti/Laporan Sit In</DialogContentText>
        <TextField
          required
          type="file"
          size="small"
          name="check_out_document"
        />
        <DialogContentText>Swafoto Keluar</DialogContentText>
        <TextField
          required
          type="file"
          size="small"
          inputProps={{ accept: ".png,.jpg,.jpeg" }}
          name="check_out_proof"
        />
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={checkingOutMahasiswa}
          variant="contained"
          type="submit"
        >
          OK
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

  const [sitInId, setSitInId] = useState(null);

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

  const handleCheckOutClick = (sitInId) => {
    setSitInId(sitInId);
  };
  const handleClockOutDialogClose = () => {
    setSitInId(null);
  };
  const handleClockOutDialogSubmit = () => {
    setSitInId(null);
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
      Cell: ({ cell }) => `${cell.getValue()} menit`,
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
    enableRowActions: true,
    positionActionsColumn: "last",
    displayColumnDefOptions: {
      "mrt-row-actions": {
        header: "Aksi",
      },
    },
    renderRowActions: ({ row }) =>
      row.original.status === 0 && (
        <Button
          variant="contained"
          onClick={() => handleCheckOutClick(row.original.id)}
          startIcon={<AccessTimeIcon />}
          color="error"
        >
          Clock Out
        </Button>
      ),
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
      <CheckOutDialog
        open={!!sitInId}
        sitInId={sitInId}
        onClose={handleClockOutDialogClose}
        onSubmit={handleClockOutDialogSubmit}
      />
    </>
  );
}
