import {
  ArrowDropDown as ArrowDropDownIcon,
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React, { useMemo, useState } from "react";
import { data_bimbingan } from "../../features/layout/components/tabel-mahasiswa/seminar-proposal/tabel-bimbingan";
import { data_pengajuan_seminar } from "../../features/layout/components/tabel-mahasiswa/seminar-proposal/tabel-pengajuan-seminar";

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

export default function SeminarProposal() {
  const [openBimbingan, setOpenBimbingan] = useState(false);
  const [openProposal, setOpenProposal] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenBimbingan = () => {
    setOpenBimbingan(true);
  }

  const handleCloseBimbingan = () => {
    setOpenBimbingan(false);
  }

  const handleOpenProposal = () => {
    setOpenProposal(true);
  }

  const handleCloseProposal = () => {
    setOpenProposal(false);
  }

  const [action, setAction] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const listItems = ['Edit', 'Hapus'];
  
  const handleOpenAction = () => {
    window.alert(`You clicked ${listItems[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAction(false);
  };

  const handleToggle = () => {
    setAction((prevOpen) => !prevOpen);
  };

  const handleCloseAction = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setAction(false);
  };

  const columns_bimbingan = useMemo(
    () => [
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
        filterVariant: 'text',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'pembahasan',
        header: 'Pembahasan',
        filterVariant: 'text',
      },
      {
        accessorKey: 'catatan',
        header: 'Catatan',
        filterVariant: 'text',
      },
    ],
  );

  const columns_pengajuan_seminar = useMemo(
    () => [
      {
        accessorKey: 'judul',
        header: 'Judul',
        filterVariant: 'text',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
        filterVariant: 'text',
      },
      {
        accessorKey: 'nama_pic',
        header: 'Nama PIC',
        filterVariant: 'text',
      },
      {
        id: 'aksi',
        header: 'Aksi',
        Cell: () => (
          <Box>
            <div>
            <ButtonGroup
              variant="contained"
              color="primary"
              ref={anchorRef}>
              <Button onClick={handleOpenAction}>{listItems[selectedIndex]}</Button>
              <Button
                size="small"
                onClick={handleToggle}>
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
              }}
              transition
              open={action}
              anchorEl={anchorRef.current}>
              {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
              >
                <div style={{backgroundColor: 'green', color: 'white'}}>
                  <Paper>
                  <ClickAwayListener onClickAway={handleCloseAction}>
                    <MenuList id="split-button-menu">
                      {listItems.map((item, i) => (
                        <MenuItem
                          key={item}
                          disabled={i === 2}
                          selected={i === selectedIndex}
                          onClick={(e) => handleMenuItemClick(e, i)}>
                          {item}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                  </Paper>
                </div>
              </Grow>
              )}
            </Popper>
          </div>
          </Box>
        ),
      },
    ],
  );

  return(
    <>
    <Box sx={{ flexGrow: 1, background: '#fafafa' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="row">
              <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
                Proposal
              </Typography>
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleOpenBimbingan}
                sx={{ borderRadius: 5, marginRight: 1, marginBottom: 1 }}
                color="info"
                positionActionsColumn="last"
              >
                Bimbingan
              </Button>
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleOpenProposal}
                sx={{ borderRadius: 5, color: 'black', marginBottom: 1 }}
                color="inherit"
                positionActionsColumn="last"
              >
                Ajukan
              </Button>
            </Stack>
            <Dialog
        fullScreen={fullScreen}
        open={openBimbingan}
        onClose={handleCloseBimbingan}
        aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title" align="center">
            {"Formulir Bimbingan untuk Seminar Proposal"}
          </DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m:1, width: '50ch' },
              }}
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
            <Button autoFocus variant="contained" onClick={handleCloseBimbingan}>
              SIMPAN
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          fullScreen={fullScreen}
          open={openProposal}
          onClose={handleCloseProposal}
          aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title" align="center">
              {"Formulir Proposal"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Draft Proposal
              </DialogContentText>
              <Button
                  component="label"
                  role="undefined"
                  variant="outlined"
                  tabIndex={-1}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
                <DialogContentText>
                  Dokumen Power Point
                </DialogContentText>
                <Button
                  component="label"
                  role="undefined"
                  variant="outlined"
                  tabIndex={-1}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
                <DialogContentText>
                  Dokumen Persetujuan Proposal
                </DialogContentText>
                <Button
                  component="label"
                  role="undefined"
                  variant="outlined"
                  tabIndex={-1}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
            </DialogContent>
          <DialogActions>
            <Button autoFocus variant="contained" onClick={handleCloseProposal}>
                SIMPAN
              </Button>
            </DialogActions>
        </Dialog>
                <div>
                  <Typography sx={{ marginTop: 5, fontWeight: 'bold' }}>Bimbingan</Typography>
                  <MaterialReactTable 
                    columns={columns_bimbingan}
                    data={data_bimbingan}
                    enableFacetedValues
                    initialState={{ showColumnFilter: true, showGlobalFilter: true }}
                    positionGlobalFilter="left"
                  >
                  </MaterialReactTable>
                </div>

                <div>
                <Typography sx={{ marginTop: 5, fontWeight: 'bold' }}>Pengajuan Seminar</Typography>
                  <MaterialReactTable 
                    columns={columns_pengajuan_seminar}
                    data={data_pengajuan_seminar}
                    enableFacetedValues
                    initialState={{ showColumnFilter: true, showGlobalFilter: true }}
                    positionGlobalFilter="left"
                  >
                  </MaterialReactTable>
                </div>
            </Grid>
        </Grid>
      </Box>
  </>
  );
}