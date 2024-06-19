import { Search as SearchIcon } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
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

const Dashboard = () => (
  <>
    <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
      Dashboard
    </Typography>
    <Typography component="h2" variant="h5" sx={{ mt: 3 }}>
      Seminar Literatur
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
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            {
              date: "01 Jan 2024",
              nim: "237038020",
              name: "Bob",
            },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.nim}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Button variant="contained">Detail</Button>
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
      Seminar Pra Proposal
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
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            {
              date: "01 Jan 2024",
              nim: "237038020",
              name: "Bob",
            },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.nim}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Button variant="contained">Detail</Button>
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

export default Dashboard;
