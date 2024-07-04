import {
  Search as SearchIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Done as DoneIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  InputAdornment,
  Stack,
  Table,
  IconButton,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const Dashboard = () => (
  <>
    <Stack direction="row">
      <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
        Dashboard
      </Typography>
      <Button variant="contained">Upload Buku Panduan Bimbingan Tesis</Button>
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
            <TableCell>No.</TableCell>
            <TableCell>Agenda</TableCell>
            <TableCell>Tanggal</TableCell>
            <TableCell>Aksi</TableCell>
            <TableCell>Lampiran</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            {
              agenda: "Seminar Pra Proposal",
              date: " 20 Juni  s.d 30 Juni 2024",
            },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.agenda}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <ButtonGroup variant="contained">
                  <Button>Aksi</Button>
                  <Button size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
              <TableCell>
                <Button variant="contained">Upload File</Button>
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
    <Typography component="h2" variant="h5">
      ACC Login Mahasiswa
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
            <TableCell>No.</TableCell>
            <TableCell>Tanggal Daftar</TableCell>
            <TableCell>NIM</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            {
              tanggalDaftar: "01 Jan 2024",
              nim: "237038020",
              name: "Bob",
            },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.tanggalDaftar}</TableCell>
              <TableCell>{row.nim}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Button variant="contained">
                  <CloseIcon />
                </Button>
                <Button variant="contained" sx={{ ml: 2 }}>
                  <DoneIcon />
                </Button>
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
    <Typography component="h2" variant="h5">
      ACC Login Kaprodi dan Dosen
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
            <TableCell>No.</TableCell>
            <TableCell>Tanggal Daftar</TableCell>
            <TableCell>Alamat Surel</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Aktor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            {
              tanggalDaftar: "01 Jan 2024",
              email: "abcd@cdef.com",
              name: "Bob",
              aktor: "Kaprodi",
            },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.tanggalDaftar}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.aktor}</TableCell>
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

export default Dashboard;
