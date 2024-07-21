import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Paper,
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
import React, { useState } from "react";

import { PenilaianMahasiswaDialog } from "../../../ui";
import { PemilihanTanggalWaktuSeminarProyekDialog } from "../pemilihan-tanggal-waktu-seminar-proyek-dialog";

export const UsulanSeminarProyekTable = (props) => {
  const [data, setData] = useState([
    {
      number: 1,
      nim: "237038019",
      name: "Roma Susanto",
      tglTerakhirBimbingan: "26 Mar 2024",
      tglPengajuan: "01 April 2024",
      sudahSeminar: true,
    },
    {
      number: 2,
      nim: "237038038",
      name: "Rima Susanti",
      tglTerakhirBimbingan: "30 Mar 2024",
      tglPengajuan: "01 April 2024",
      sudahSeminar: false,
    },
  ]);

  const PROPERTIES = [
    ["NIM", 237038038],
    ["Nama", "Rima Susanti"],
    ["Tgl. Terakhir Bimbingan", "30 Mar 2024"],
    ["Tgl. Pengajuan", "01 Apr 2024"],
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.nim.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tglTerakhirBimbingan
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.tglPengajuan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [tanggalDialogOpen, setTanggalDialogOpen] = useState(false);
  const [penilaianDialogOpen, setPenilaianDialogOpen] = useState(false);

  const handleTanggalDialogClose = () => setTanggalDialogOpen(false);
  const handlePenilaianDialogClose = () => setPenilaianDialogOpen(false);

  const handlePilihTglClick = () => setTanggalDialogOpen(true);
  const handlePenilaianClick = () => setPenilaianDialogOpen(true);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h4"
              sx={{ flex: 1, marginBottom: 5 }}
            >
              Usulan Seminar Proyek
            </Typography>
            <div>
              <Paper>
                <TextField
                  label="Search"
                  variant="outlined"
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{ margin: "16px", width: 300 }}
                />
                <Divider />
                <TableContainer component={Paper}>
                  <Table size="medium">
                    <TableHead>
                      <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>NIM</TableCell>
                        <TableCell>Nama</TableCell>
                        <TableCell>Tgl. Terakhir Bimbingan</TableCell>
                        <TableCell>Tgl. Pengajuan</TableCell>
                        <TableCell>Tgl Seminar Proyek</TableCell>
                        <TableCell>Input Nilai</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredData.map((item) => (
                        <TableRow
                          key={item.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {item.number}
                          </TableCell>
                          <TableCell>{item.nim}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.tglTerakhirBimbingan}</TableCell>
                          <TableCell>{item.tglPengajuan}</TableCell>
                          <TableCell>
                            <Button variant="outlined">
                              <Link
                                component="button"
                                onClick={handlePilihTglClick}
                              >
                                Pilih Tanggal
                              </Link>
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button variant="outlined">
                              <Link
                                component="button"
                                onClick={handlePenilaianClick}
                              >
                                Input Nilai
                              </Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <PemilihanTanggalWaktuSeminarProyekDialog
                  open={tanggalDialogOpen}
                  onClose={handleTanggalDialogClose}
                />
                <PenilaianMahasiswaDialog
                  properties={PROPERTIES}
                  open={penilaianDialogOpen}
                  onClose={handlePenilaianDialogClose}
                />
                <Divider />
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 50, 100]}
                  component="div"
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
