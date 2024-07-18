import {
  ArrowDropDown as ArrowDropDownIcon,
  Add as AddIcon,
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
import { useMemo, useState } from 'react';
import React from "react";
import { data } from "../../features/layout/components/tabel-mahasiswa/tabel-pengajuan-judul";

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

export default function PengajuanJudul() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const columns = useMemo(
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
        accessorKey: 'catatan',
        header: 'Catatan',
        filterVariant: 'text',
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
      }
    ],
  );
  
  const science = [
    {
      value: 'ML',
      label: 'Machine Learning', 
    },
    {
      value: 'NS',
      label: 'Network Security',
    },
    {
      value: 'IoT',
      label: 'Internet of Things',
    },
  ];

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
    <Box sx={{ flexGrow: 1, background: '#fafafa' }}>
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
                sx={{ borderRadius: 5, color: 'black', marginBottom: 5 }}
                color="inherit"
                positionActionsColumn="last"
              >
                Ajukan
              </Button>
              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title" align="center">
                  {"Formulir Pengusulan Seminar Literatur"}
                </DialogTitle>
                <DialogContent>
                  <TextField
                    margin="dense"
                    size="small"
                    required
                    fullWidth
                    id="judul"
                    label="Judul"
                    name="judul"
                    autoFocus
                  />
                  <DialogContentText>
                    Dokumen Pengajuan Judul
                  </DialogContentText>
                <Button
                  component="label"
                  role="undefined"
                  variant="outlined"
                  tabIndex={-1}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
                <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m:1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                  <div>
                    <TextField
                      id="konsentrasi-ilmu"
                      select
                      label="Konsentrasi Ilmu"
                      defaultValue="Pilih Konsentrasi Ilmu"
                      placeholder="Pilih Konsentrasi Ilmu"
                      SelectProps={{
                        native: true,
                      }}
                      variant="standard"
                    >
                      {science.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </Box>
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