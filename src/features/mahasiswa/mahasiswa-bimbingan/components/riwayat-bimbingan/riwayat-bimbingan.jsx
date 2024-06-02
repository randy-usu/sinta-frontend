import {
  Cancel as CancelIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const ROWS = [
  {
    tanggal: "02 Juni 2024",
    topik: "Mencari ...",
    catatan: "Minimal Q2",
    tahapanTujuan: "Seminar Pra-Proposal",
    status: "In Review",
  },
  {
    tanggal: "02 Juni 2024",
    topik: "Mencari ...",
    catatan: "Minimal Q2",
    tahapanTujuan: "Seminar Pra-Proposal",
    status: "In Review",
  },
  {
    tanggal: "02 Juni 2024",
    topik: "Mencari ...",
    catatan: "Minimal Q2",
    tahapanTujuan: "Seminar Pra-Proposal",
    status: "In Review",
  },
  {
    tanggal: "02 Juni 2024",
    topik: "Mencari ...",
    catatan: "Minimal Q2",
    tahapanTujuan: "Seminar Pra-Proposal",
    status: "In Review",
  },
  {
    tanggal: "02 Juni 2024",
    topik: "Mencari ...",
    catatan: "Minimal Q2",
    tahapanTujuan: "Seminar Pra-Proposal",
    status: "In Review",
  },
];

export const RiwayatBimbingan = (props) => (
  <Box {...props}>
    <Typography variant="h5">Riwayat Bimbingan</Typography>
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tanggal</TableCell>
            <TableCell>Topik/Saran</TableCell>
            <TableCell>Catatan</TableCell>
            <TableCell>Tahapan Tujuan</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ROWS.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tanggal}
              </TableCell>
              <TableCell>{row.topik}</TableCell>
              <TableCell>{row.catatan}</TableCell>
              <TableCell>{row.tahapanTujuan}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Stack direction="row">
                  <IconButton color="success">
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton color="error">
                    <CancelIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
