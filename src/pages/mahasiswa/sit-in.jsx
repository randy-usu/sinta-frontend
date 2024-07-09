import { useTheme } from "@emotion/react";
import {
  AccessTime as AccessTimeIcon,
  Add as AddIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  InputAdornment,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  Autocomplete,
} from "@mui/material";
import React from "react";

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
  const [openSitIn, setOpenSitIn] = React.useState(false);
  const [openClockOut, setOpenClockOut] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpenSitIn(true);
  };

  const handleClose = () => {
    setOpenSitIn(false);
  };

  const handleClickOpenClockOut = () => {
    setOpenClockOut(true);
  };

  const handleCloseClockOut = () => {
    setOpenClockOut(false);
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
          Sit In
        </Typography>
        <React.Fragment>
          <Button sx={{ borderRadius: 5, color: 'black', bgcolor: '#E0E0E0'}} variant="contained" endIcon={<AddIcon />} onMouseEnter={changeHover} onMouseLeave={changeNormal} onClick={handleClickOpen}>
            Check In
          </Button>
          <Dialog
            fullScreen={fullScreen}
            open={openSitIn}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
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
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
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
        >
          <Autocomplete filterOptions={(x) => x} />
        </TextField>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tanggal</TableCell>
              <TableCell>Waktu Masuk</TableCell>
              <TableCell>Waktu Keluar</TableCell>
              <TableCell>Durasi</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                date: "24 Feb 2024",
                waktuMasuk: "13:00",
                waktuKeluar: "14:00",
                durasi: "1 Jam",
              },
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.waktuMasuk}</TableCell>
                <TableCell>{row.waktuKeluar}</TableCell>
                <TableCell>{row.durasi}</TableCell>
                <TableCell>
                  <React.Fragment>
                    <Button
                      onClick={handleClickOpenClockOut}
                      color="error"
                      variant="contained"
                      startIcon={<AccessTimeIcon />}
                    >
                      Clock Out
                    </Button>
                    <Dialog
                      fullScreen={fullScreen}
                      open={openClockOut}
                      onClose={handleCloseClockOut}
                      aria-labelledby="responsive-dialog-title"
                    >
                      <DialogTitle id="responsive-dialog-title">
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

                  </React.Fragment>
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