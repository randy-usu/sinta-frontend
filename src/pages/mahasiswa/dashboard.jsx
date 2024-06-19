import {
  Search as SearchIcon,
} from "@mui/icons-material";
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

const Dashboard = () => {
  return (
    <>
      <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
        Dashboard
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
              <TableCell>Agenda</TableCell>
              <TableCell>Tanggal</TableCell>
              <TableCell>Lampiran</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                agenda: "Seminar Praproposal",
                tanggal: "20 Juni s.d. 30 Juni 2024",
              },
              {
                agenda: "Seminar Hasil",
                tanggal: "20 Juni s.d. 30 Juni 2024",
              },
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.agenda}</TableCell>
                <TableCell>{row.tanggal}</TableCell>
                <TableCell>
                  <Button variant="contained">Download File</Button>
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
};

export default Dashboard;
