import {
  Add as AddIcon,
  RemoveOutlined as RemoveIcon,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
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
import { Fragment, useState } from "react";

const AjukanSeminarLiteraturDialog = ({ open, onClose, onSubmit }) => {
  const [{ loading: isAjukanSeminar }, ajukanSeminar] = useAxios(
    {
      url: `mahasiswa/seminar-literatur`,
      method: "POST",
    },
    { manual: true }
  );

  const [literatureFiles, setLiteratureFiles] = useState([0]);

  const handleAddClick = () =>
    setLiteratureFiles((files) => [...files, files.length]);
  const handleRemoveClick = () =>
    setLiteratureFiles((files) => files.slice(0, -1));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          await ajukanSeminar({ data: formData });
          onSubmit();
        },
      }}
    >
      <DialogTitle align="center">
        Formulir Pengusulan Seminar Literatur
      </DialogTitle>
      <DialogContent>
        <DialogContentText>File Power Point</DialogContentText>
        <TextField
          required
          type="file"
          size="small"
          inputProps={{ accept: ".ppt,.pptx" }}
          name="file_ppt"
        />
        {literatureFiles.map((fileIndex) => (
          <Fragment key={fileIndex}>
            <DialogContentText>Literatur {fileIndex + 1}</DialogContentText>
            <TextField
              required
              type="file"
              size="small"
              inputProps={{ accept: ".pdf" }}
              name="file_literatur[]"
            />
          </Fragment>
        ))}
        <div>
          <Fab onClick={handleAddClick} size="small" color="info">
            <AddIcon />
          </Fab>
          {literatureFiles.length > 1 && (
            <Fab onClick={handleRemoveClick} size="small" color="error">
              <RemoveIcon />
            </Fab>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={isAjukanSeminar}
          variant="contained"
          type="submit"
        >
          OK
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default function SeminarLiteratur() {
  const [
    {
      data: seminarLiteraturResponseData,
      loading: seminarLiteraturRequestLoading,
    },
    refetchSeminarLiteratur,
  ] = useAxios({
    url: "mahasiswa/seminar-literatur",
  });
  const [
    ajukanSeminarLiteraturDialogOpen,
    setAjukanSeminarLiteraturDialogOpen,
  ] = useState(false);

  const handleClickOpen = () => {
    setAjukanSeminarLiteraturDialogOpen(true);
  };

  const handleAjukanSeminarLiteraturDialogClose = () => {
    setAjukanSeminarLiteraturDialogOpen(false);
  };
  const handleAjukanSeminarLiteraturDialogSubmit = () => {
    setAjukanSeminarLiteraturDialogOpen(false);
    refetchSeminarLiteratur();
  };

  const columns = [
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
      accessorFn: (dataRow) => new Date(dataRow.date),
      header: "Tanggal",
      filterVariant: "date-range",
      Cell: ({ cell }) => cell.getValue().toLocaleDateString("id"),
    },
    {
      accessorKey: "pic.name",
      header: "Nama PIC",
      filterVariant: "text",
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data: seminarLiteraturResponseData?.data ?? [],
    enableGlobalFilter: false,
    enableSorting: false,
    enableColumnFilters: false,
    state: {
      isLoading: seminarLiteraturRequestLoading,
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="row">
              <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
                Seminar Literatur
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
            <MaterialReactTable table={table} />
          </Grid>
        </Grid>
      </Box>
      <AjukanSeminarLiteraturDialog
        open={ajukanSeminarLiteraturDialogOpen}
        onClose={handleAjukanSeminarLiteraturDialogClose}
        onSubmit={handleAjukanSeminarLiteraturDialogSubmit}
      />
    </>
  );
}
