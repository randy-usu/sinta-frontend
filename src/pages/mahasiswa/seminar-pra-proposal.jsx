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
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useState } from "react";
import { data_bimbingan } from "../../features/layout/components/tabel-mahasiswa/seminar-praproposal/tabel-bimbingan";
import useAxios from "axios-hooks";
import { LoadingButton } from "@mui/lab";

const AjukanSeminarPraProposalDialog = ({ open, onClose, onSubmit }) => {
  const [{ loading: isAjukanSeminarPraPro }, ajukanSeminarPraPro] = useAxios(
    {
      url: `mahasiswa/seminar-praproposal`,
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
          await ajukanSeminarPraPro({ data: formData });
          onSubmit();
        },
      }}
    >
      <DialogTitle align="center">Formulir Pra Proposal</DialogTitle>
      <DialogContent>
        <DialogContentText>Draft Pra Proposal</DialogContentText>
        <TextField
          required
          type="file"
          size="small"
          inputProps={{ accept: ".doc,.docx,.pdf" }}
          name="draf_pra_pro"
        />
        <DialogContentText>Dokumen Power Point</DialogContentText>
        <TextField
          required
          type="file"
          size="small"
          inputProps={{ accept: ".ppt,.pptx" }}
          name="pra_pro_ppt"
        />
        <DialogContentText>Dokumen Persetujuan Pra Proposal</DialogContentText>
        <TextField
          required
          type="file"
          size="small"
          inputProps={{ accept: ".doc,.docx,.pdf" }}
          name="dok_persetujuan_pra_pro"
        />
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={isAjukanSeminarPraPro}
          variant="contained"
          type="submit"
        >
          SIMPAN
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default function SeminarPraProposal() {
  const [openBimbingan, setOpenBimbingan] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenBimbingan = () => {
    setOpenBimbingan(true);
  };

  const handleCloseBimbingan = () => {
    setOpenBimbingan(false);
  };

  const [
    ajukanSeminarPraProposalDialogOpen,
    setAjukanSeminarPraProposalDialogOpen,
  ] = useState(false);

  const handleClickOpen = () => {
    setAjukanSeminarPraProposalDialogOpen(true);
  };

  const handleAjukanSeminarPraProposalDialogClose = () => {
    setAjukanSeminarPraProposalDialogOpen(false);
  };
  const handleAjukanSeminarPraProposalDialogSubmit = () => {
    setAjukanSeminarPraProposalDialogOpen(false);
    refetchSeminarPraProposal();
  };

  const [
    {
      data: seminarPraProposalResponseData,
      loading: seminarPraProposalRequestLoading,
    },
    refetchSeminarPraProposal,
  ] = useAxios({
    url: "mahasiswa/seminar-praproposal",
  });

  const columns_bimbingan = [
    {
      accessorKey: "tanggal",
      header: "Tanggal",
      filterVariant: "text",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "pembahasan",
      header: "Pembahasan",
      filterVariant: "text",
    },
    {
      accessorKey: "catatan",
      header: "Catatan",
      filterVariant: "text",
    },
  ];

  const pengajuanSeminarColumns = [
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

  const pengajuanSeminarTable = useMaterialReactTable({
    columns: pengajuanSeminarColumns,
    data: seminarPraProposalResponseData?.data ?? [],
    enableGlobalFilter: false,
    enableSorting: false,
    enableColumnFilters: false,
    state: {
      isLoading: seminarPraProposalRequestLoading,
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="row">
              <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
                Pra Proposal
              </Typography>
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleOpenBimbingan}
                sx={{ borderRadius: 5, marginRight: 1, marginBottom: 1 }}
                color="info"
              >
                Bimbingan
              </Button>
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleClickOpen}
                sx={{ borderRadius: 5, color: "black", marginBottom: 1 }}
                color="inherit"
              >
                Ajukan
              </Button>
            </Stack>
            <Dialog
              fullScreen={fullScreen}
              open={openBimbingan}
              onClose={handleCloseBimbingan}
            >
              <DialogTitle align="center">
                Formulir Bimbingan untuk Seminar Pra Proposal
              </DialogTitle>
              <DialogContent>
                <Box
                  component="form"
                  sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Saran"
                      multiline
                      fullWidth
                      rows={2}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Catatan"
                      multiline
                      fullWidth
                      rows={2}
                    />
                  </div>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  variant="contained"
                  onClick={handleCloseBimbingan}
                >
                  SIMPAN
                </Button>
              </DialogActions>
            </Dialog>
            <Typography sx={{ marginTop: 5, fontWeight: "bold" }}>
              Bimbingan
            </Typography>
            <MaterialReactTable
              columns={columns_bimbingan}
              data={data_bimbingan}
              enableFacetedValues
              initialState={{
                showColumnFilter: true,
                showGlobalFilter: true,
              }}
              positionGlobalFilter="left"
            ></MaterialReactTable>
            <Typography sx={{ marginTop: 5, fontWeight: "bold" }}>
              Pengajuan Seminar
            </Typography>
            <MaterialReactTable table={pengajuanSeminarTable} />
          </Grid>
        </Grid>
      </Box>
      <AjukanSeminarPraProposalDialog
        open={ajukanSeminarPraProposalDialogOpen}
        onClose={handleAjukanSeminarPraProposalDialogClose}
        onSubmit={handleAjukanSeminarPraProposalDialogSubmit}
      />
    </>
  );
}
