import {
  ArrowDropDown as ArrowDropDownIcon,
  Add as AddIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
  InputAdornment,
  MenuItem,
  MenuList,
  Popper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef, useState} from "react";

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

  const listItems = [
    "Edit", "Hapus"
  ];

  const arRef = useRef(null);
  const [popperOpen, setPopperOpen] = useState(false);
  const [selId, setSelId] = useState(1);

  const handleItemPress = (e, index) => {
    setSelId(index);
    setPopperOpen(false);
  };

  const handleCloseItem = (e) => {
    if (arRef.current && arRef.current.contains(e.target)) {
      return;
    }
    setPopperOpen(false);
  };

  const handleOpenItem = () => {
    setPopperOpen((prevOpen) => !prevOpen);
  };

  function changeHover(e) {
    e.target.style.background = '#9e9e9e';
  };

  function changeNormal(e) {
    e.target.style.background = '#E0E0E0'
  };

  return (
    <>
    <Box sx={{ flexGrow: 1, background: '#fafafa' }}>
      <Stack direction="row">
        <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
          Pengajuan Judul
        </Typography>
        <React.Fragment>
          <Button sx={{ borderRadius: 5, color: 'black', background: '#E0E0E0'}} variant="contained" onClick={handleClickOpen} onMouseEnter={changeHover} onMouseLeave={changeNormal} endIcon={<AddIcon />}>
            Ajukan
          </Button>
        </React.Fragment>
        <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
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
      <TextField
        sx={{ mt: 3 }}
        placeholder="Search..."
        size="small"
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Judul</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Catatan</TableCell>
              <TableCell>Tanggal</TableCell>
              <TableCell>Nama PIC</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                date: "Senin, 24 Feb 2024",
                picName: "Elon Musk",
              },
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell>Title Judul</TableCell>
                <TableCell>
                  <Chip label="Sudah mengajukan" color="success" />
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.picName}</TableCell>
                <TableCell>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                      }}>
                        <ButtonGroup
                        variant="contained"
                        color="primary"
                        ref={arRef}>
                          <Button>{listItems[selId]}</Button>
                          <Button
                          size="small"
                          onClick={handleOpenItem}>
                            <ArrowDropDownIcon />
                          </Button>
                        </ButtonGroup>
                        <Popper
                        transition
                        open={popperOpen}
                        anchorEl={arRef.current}>
                          {({ TransitionProps }) => (
                            <Grow
                            {...TransitionProps}
                            >
                              <div style={{backgroundColor: 'green', color: 'white'}}>
                                <ClickAwayListener onClickAway={handleCloseItem}>
                                  <MenuList id="split-button-menu">
                                    {listItems.map((item, i) => (
                                      <MenuItem
                                      key={item}
                                      onClick={(e) => handleItemPress(e, i)}>
                                        {item}
                                      </MenuItem>
                                    ))}
                                  </MenuList>
                                </ClickAwayListener>
                              </div>
                            </Grow>
                          )}
                        </Popper>
                    </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={13}
        rowsPerPage={5}
        page={0}
        onPageChange={() => {}}
      />
      </Box>
    </>
  );
}