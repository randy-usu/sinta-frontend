import {
  ArrowDropDown as ArrowDropDownIcon,
  Add as AddIcon,
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

const PengajuanJudul = () => (
  <>
    <Stack direction="row">
      <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
        Pengajuan Judul
      </Typography>
      <Button variant="contained" endIcon={<AddIcon />}>
        Ajukan
      </Button>
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
              date: "Senin, 24 Feb 2024 14:00",
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

export default PengajuanJudul;
