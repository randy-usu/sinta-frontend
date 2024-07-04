import {
  AccessTime as AccessTimeIcon,
  Add as AddIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Button,
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

const PengajuanJudul = () => (
  <>
    <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
      Pengajuan Judul
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
            <TableCell>NIM</TableCell>
            <TableCell>Nama Mahasiswa</TableCell>
            <TableCell>Judul</TableCell>
            <TableCell>Dosen Pembimbing 1</TableCell>
            <TableCell>Dosen Pembimbing 2</TableCell>
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[{}].map((row, index) => (
            <TableRow key={index}>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Button variant="contained">Upload SK Doping</Button>
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

export default PengajuanJudul;
