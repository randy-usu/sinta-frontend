import {
  ArrowDropDown as ArrowDropDownIcon,
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Chip,
  InputAdornment,
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
} from "@mui/material";

const SeminarProyek = () => (
  <>
    <Stack direction="row">
      <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
        Seminar Hasil
      </Typography>
      <Button variant="contained" endIcon={<AddIcon />}>
        Bimbingan
      </Button>
      <Button variant="contained" endIcon={<AddIcon />} sx={{ ml: 3 }}>
        Ajukan
      </Button>
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
                <ButtonGroup variant="contained">
                  <Button>Aksi</Button>
                  <Button size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
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
  </>
);

export default SeminarProyek;
