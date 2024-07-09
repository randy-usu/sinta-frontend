import {
  ArrowDropDown as ArrowDropDownIcon,
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
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
import React, { useRef, useState } from "react";

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

export default function SeminarProyek() {
  const [openBimbingan, setOpenBimbingan] = useState(false);
  const [openProyek, setOpenProyek] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenBimbingan = () => {
    setOpenBimbingan(true);
  }

  const handleCloseBimbingan = () => {
    setOpenBimbingan(false);
  }

  const handleOpenProyek = () => {
    setOpenProyek(true);
  }

  const handleCloseProyek = () => {
    setOpenProyek(false);
  }

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
  
  return(
    <>
    <Box sx={{ flexGrow: 1, background: '#fafafa' }}>
    <Stack direction="row">
      <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
        Seminar Proyek
      </Typography>
      <React.Fragment>
        <Button variant="contained" onClick={handleOpenBimbingan} endIcon={<AddIcon />} sx={{ borderRadius: 5 }}>
          Bimbingan
        </Button>
        <Dialog
        fullScreen={fullScreen}
        open={openBimbingan}
        onClose={handleCloseBimbingan}
        aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title">
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
      </React.Fragment>
      <React.Fragment>
        <Button variant="contained" endIcon={<AddIcon />} onClick={handleOpenProyek} sx={{ ml: 3, borderRadius: 5, color: 'black', background: '#E0E0E0' }} onMouseEnter={changeHover} onMouseLeave={changeNormal}>
          Ajukan
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={openProyek}
          onClose={handleCloseProyek}
          aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Formulir Seminar Proyek"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Dokumen Persetujuan Seminar Proyek
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
            <Button autoFocus variant="contained" onClick={handleCloseProyek}>
                SIMPAN
              </Button>
            </DialogActions>
        </Dialog>
      </React.Fragment>
    </Stack>
    <Typography component="h2" variant="h5" sx={{ mt: 3 }}>
      Bimbingan
    </Typography>
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
            <TableCell>Tanggal</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Pembahasan</TableCell>
            <TableCell>Catatan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            {
              date: "Senin, 01 Jan 2024",
            },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <CheckCircleIcon fontSize="large" color="success" />
              </TableCell>
              <TableCell>Pembahasan</TableCell>
              <TableCell>Catatan</TableCell>
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
    <Typography component="h2" variant="h5">
      Pengajuan Seminar
    </Typography>
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