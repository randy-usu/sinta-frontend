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

const SitIn = () => (
  <>
    <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
      Sit In
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
            <TableCell>Tanggal</TableCell>
            <TableCell>Waktu Masuk</TableCell>
            <TableCell>Waktu Keluar</TableCell>
            <TableCell>Durasi</TableCell>
            <TableCell>Tanggal & Waktu ACC</TableCell>
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
              nama: "Sudirman",
              nim: "237038019",
              tglWaktuAcc: "27 Mei 2024 13:29",
            },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.nim}</TableCell>
              <TableCell>{row.nama}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.waktuMasuk}</TableCell>
              <TableCell>{row.waktuKeluar}</TableCell>
              <TableCell>{row.durasi}</TableCell>
              <TableCell>{row.tglWaktuAcc}</TableCell>
              <TableCell>
                <Stack direction="row" spacing={1}>
                  <Button variant="contained">ACC</Button>
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

export default SitIn;
