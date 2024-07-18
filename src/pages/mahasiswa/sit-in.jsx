import {
  AccessTime as AccessTimeIcon,
  Add as AddIcon,
} from "@mui/icons-material"

import { 
  MaterialReactTable, 
  useMaterialReactTable,
} from "material-react-table";

import { useMemo, useState } from "react";
import { data } from "../../features/layout/components/tabel-mahasiswa/tabel-sit-in";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, styled, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";

const VisuallyHiddenInput = styled('input')`
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
  const [clockOut, setClockOut] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenClockOut = () => {
    setClockOut(true);
  }
  const handleCloseClockOut = () => {
    setClockOut(false);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
        filterVariant: 'text',
      },
      {
        accessorKey: 'waktu_masuk',
        header: 'Waktu Masuk',
        filterVariant: 'text',
      },
      {
        accessorKey: 'waktu_keluar',
        header: 'Waktu Keluar',
        filterVariant: 'text',
      },
      {
        accessorKey: 'durasi',
        header: 'Durasi',
        filterVariant: 'text',
      },
      {
        id: 'aksi',
        header: 'Aksi',
        Cell: () => (
          <Box>
            <Tooltip title="Clock Out">
              <Button
                variant="contained"
                onClick={handleOpenClockOut}
                startIcon={<AccessTimeIcon />}
                color='error'
                >
                  Clock Out
              </Button>
            </Tooltip>
            <Dialog
              fullScreen={fullScreen}
              open={clockOut}
              onClose={handleCloseClockOut}
              aria-labelledby="responsive-dialog-title"
            >
            <DialogTitle id="responsive-dialog-title" align='center'>
              {"Formulir Keluar Sit-In"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Bukti/Laporan Sit In
              </DialogContentText>
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
              >
                                
                <VisuallyHiddenInput type="file" />
              </Button>
              <DialogContentText>
                Swafoto Keluar
              </DialogContentText>
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
              <Button autoFocus variant="contained" onClick={handleCloseClockOut}>
                OK
              </Button>
            </DialogActions>
            </Dialog>
          </Box>
        ),
      },
    ],
  );

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
      <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row">
          <Typography component="h1" variant="h4" sx={{ flex: 1, }}>
              Sit In
            </Typography>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              onClick={handleOpen}
              sx={{ borderRadius: 5, color: 'black', marginBottom: 5 }}
              color="inherit"
              positionActionsColumn="last"
            >
              Check In
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title" align='center'>
                  {"Formulir Masuk Sit-In"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Swafoto Masuk
                  </DialogContentText>
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
            <div>
            <MaterialReactTable table={table}></MaterialReactTable>
          </div>
          </Grid>
      </Grid>
      </Box>
    </>
  );
}