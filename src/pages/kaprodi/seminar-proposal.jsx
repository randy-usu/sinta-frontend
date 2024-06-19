import { Search as SearchIcon } from "@mui/icons-material";
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

const SeminarProposal = () => (
  <>
    <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
      Seminar Proposal
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
            <TableCell>Tanggal Seminar</TableCell>
            <TableCell>Tanggal & Waktu Penilaian</TableCell>
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            {
              tglSeminar: "10 Juli 2024",
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
              <TableCell>{row.tglSeminar}</TableCell>
              <TableCell>{row.date}</TableCell>
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

export default SeminarProposal;
