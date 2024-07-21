import { Add as AddIcon } from "@mui/icons-material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  Chip,
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
import { useState } from "react";
import useAxios from "axios-hooks";
import { LoadingButton } from "@mui/lab";

const science = [
  {
    value: "Machine Learning",
    label: "Machine Learning",
  },
  {
    value: "Network Security",
    label: "Network Security",
  },
  {
    value: "Internet of Things",
    label: "Internet of Things",
  },
];

const AjukanPengajuanJudulDialog = ({ open, onClose, onSubmit }) => {
  const [{ loading: isAjukanPengajuanJudul }, ajukanPengajuanJudul] = useAxios(
    {
      url: `mahasiswa/pengajuan-judul`,
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
          await ajukanPengajuanJudul({ data: formData });
          onSubmit();
        },
      }}
    >
      <DialogTitle align="center">
        Formulir Pengusulan Seminar Literatur
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          size="small"
          required
          fullWidth
          label="Judul"
          name="title"
          autoFocus
        />
        <DialogContentText>Dokumen Pengajuan Judul</DialogContentText>
        <TextField
          required
          type="file"
          size="small"
          inputProps={{ accept: ".doc,.docx,.ppt,.pptx,.pdf" }}
          name="dok_pengajuan_judul"
        />
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            select
            label="Konsentrasi Ilmu"
            defaultValue="Pilih Konsentrasi Ilmu"
            placeholder="Pilih Konsentrasi Ilmu"
            SelectProps={{
              native: true,
              name: "konsentrasi_ilmu",
            }}
            variant="standard"
          >
            {science.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={isAjukanPengajuanJudul}
          variant="contained"
          type="submit"
        >
          SIMPAN
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default function PengajuanJudul() {
  const [
    { data: pengajuanJudulResponseData, loading: pengajuanJudulRequestLoading },
    refetchPengajuanJudul,
  ] = useAxios({
    url: "mahasiswa/pengajuan-judul",
  });

  const [ajukanPengajuanJudulDialogOpen, setAjukanPengajuanJudulDialogOpen] =
    useState(false);

  const handleClickOpen = () => {
    setAjukanPengajuanJudulDialogOpen(true);
  };

  const handleAjukanPengajuanJudulDialogClose = () => {
    setAjukanPengajuanJudulDialogOpen(false);
  };
  const handleAjukanPengajuanJudulDialogSubmit = () => {
    setAjukanPengajuanJudulDialogOpen(false);
    refetchPengajuanJudul();
  };

  const columns = [
    {
      accessorKey: "title",
      header: "Judul",
      filterVariant: "text",
    },
    {
      accessorKey: "status_text",
      header: "Status",
      Cell: ({ cell, row }) => {
        const STATUS_COLOR_MAP = {
          proposed: "warning",
          declined: "error",
          approve: "success",
        };

        return (
          <Chip
            color={STATUS_COLOR_MAP[row.original.status]}
            label={cell.getValue()}
            variant="contained"
          />
        );
      },
    },
    {
      accessorKey: "note",
      header: "Catatan",
      filterVariant: "text",
    },
    {
      accessorFn: (dataRow) => new Date(dataRow.proposed_at),
      header: "Tanggal",
      filterVariant: "date-range",
      Cell: ({ cell }) => cell.getValue().toLocaleDateString("id"),
    },
    {
      accessorKey: "pic",
      header: "Nama PIC",
      filterVariant: "text",
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data: pengajuanJudulResponseData?.data ?? [],
    enableGlobalFilter: false,
    enableSorting: false,
    enableColumnFilters: false,
    state: {
      isLoading: pengajuanJudulRequestLoading,
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1, background: "#fafafa" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="row">
              <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
                Pengajuan Judul
              </Typography>
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleClickOpen}
                sx={{ borderRadius: 5, color: "black", marginBottom: 5 }}
                color="inherit"
              >
                Ajukan
              </Button>
            </Stack>
            <div>
              <MaterialReactTable table={table} />
            </div>
          </Grid>
        </Grid>
      </Box>
      <AjukanPengajuanJudulDialog
        open={ajukanPengajuanJudulDialogOpen}
        onClose={handleAjukanPengajuanJudulDialogClose}
        onSubmit={handleAjukanPengajuanJudulDialogSubmit}
      />
    </>
  );
}
