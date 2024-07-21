import {
  Add as AddIcon,
  RemoveOutlined as RemoveIcon,
} from "@mui/icons-material";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useAxios from "axios-hooks";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import React, { Fragment, useState } from "react";
import Literatur from "../../features/layout/components/literatur/literatur";

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
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [document, setDocument] = useState(["1"]);
  const [documentNames, setDocumentNames] = useState([
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ]);
  function addComponent() {
    if (documentNames.length > 0) {
      setDocument([...document, documentNames[0]]);
      documentNames.splice(0, 1);
    }
  }

  const handleDeleteInput = (index) => {
    const newArray = [...document];
    newArray.splice(index, 1);
    setDocument(newArray);
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
      accessorKey: "pic",
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
      <Box sx={{ flexGrow: 1, background: "#fafafa" }}>
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
              <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
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
                    // name="check_in_proof"
                  />
                  {document.map((item, i) => (
                    <Fragment key={i}>
                      <DialogContentText>Literatur {i + 1}</DialogContentText>
                      <TextField
                        required
                        type="file"
                        size="small"
                        // inputProps={{ accept: ".ppt,.pptx" }}
                        // name="check_in_proof"
                      />
                    </Fragment>
                  ))}
                  <div>
                    <Fab
                      onClick={addComponent}
                      size="small"
                      color="info"
                      aria-label="add"
                    >
                      <AddIcon />
                    </Fab>
                    <Fab
                      onClick={handleDeleteInput}
                      size="small"
                      color="error"
                      aria-label="add"
                    >
                      <RemoveIcon />
                    </Fab>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus variant="contained" onClick={handleClose}>
                    OK
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
