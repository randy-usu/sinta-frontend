import { Search as SearchIcon } from "@mui/icons-material";
import {
  Button,
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
            <TableCell>Nama</TableCell>
            <TableCell>Judul</TableCell>
            <TableCell>Tanggal & Waktu Pengajuan</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            {
              date: "24 Feb 2024 13:29",
              nama: "Sudirman",
              judul: "Optimisasi ...",
              nim: "237038019",
            },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.nim}</TableCell>
              <TableCell>{row.nama}</TableCell>
              <TableCell>{row.judul}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Chip label="Diajukan" color="warning" />
              </TableCell>
              <TableCell>
                <Stack direction="row" spacing={1}>
                  <Button variant="contained">Menilai</Button>
                  <Button variant="contained">Detail</Button>
                </Stack>
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
