import React, { useState } from "react";

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

import {
  FontSizeInheritedTypography,
  PenilaianMahasiswaDialog,
} from "../../../../ui";

export const MahasiswaUjianTable = () => {
  const [data, setData] = useState([
    {
      number: 1,
      nim: "237038019",
      name: "Roma Susanto",
      dosenPembimbing1: "Suha",
      dosenPembimbing2: "Suhi",
      dosenPenguji1: "Suha",
      dosenPenguji2: "Suhi",
      tglUjian: "26 Mar 2024",
      tahapanTerakhir: "Seminar Proyek",
    },
    {
      number: 2,
      nim: "237038038",
      name: "Rima Susanti",
      dosenPembimbing1: "Suha",
      dosenPembimbing2: "Suhi",
      dosenPenguji1: "Suha",
      dosenPenguji2: "Suhi",
      tglUjian: "30 Mar 2024",
      tahapanTerakhir: "Seminar Proposal",
    },
  ]);

  const PROPERTIES = [
    ["NIM", 237038038],
    ["Nama", "Rima Susanti"],
    ["Dosen Pembimbing 1", "Suha"],
    ["Dosen Pembimbing 2", "Suhi"],
    ["Dosen Penguji 1", "Suha"],
    ["Dosen Penguji 2", "Suhi"],
    ["Tgl. Ujian", "30 Mar 2024"],
    ["Tahapan Terakhir", "Seminar Proposal"],
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.nim.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dosenPembimbing1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dosenPembimbing2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dosenPenguji1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dosenPenguji2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tahapanTerakhir.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tglUjian.toLowerCase().includes(searchTerm.toLowerCase())
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

  const [penilaianDialogOpen, setPenilaianDialogOpen] = useState(false);

  const handlePenilaianDialogClose = () => setPenilaianDialogOpen(false);

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
              Mahasiswa Ujian
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
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>NIM</TableCell>
                        <TableCell>Nama</TableCell>
                        <TableCell>Dosen Pembimbing</TableCell>
                        <TableCell>Dosen Penguji</TableCell>
                        <TableCell>Tahapan Terakhir</TableCell>
                        <TableCell>Tgl. Ujian</TableCell>
                        <TableCell>Aksi</TableCell>
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
                          <TableCell>
                            <FontSizeInheritedTypography>
                              {item.dosenPembimbing1}
                            </FontSizeInheritedTypography>
                            <FontSizeInheritedTypography>
                              {item.dosenPembimbing2}
                            </FontSizeInheritedTypography>
                          </TableCell>
                          <TableCell>
                            <FontSizeInheritedTypography>
                              {item.dosenPenguji1}
                            </FontSizeInheritedTypography>
                            <FontSizeInheritedTypography>
                              {item.dosenPenguji2}
                            </FontSizeInheritedTypography>
                          </TableCell>
                          <TableCell>{item.tahapanTerakhir}</TableCell>
                          <TableCell>{item.tglUjian}</TableCell>
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
      <PenilaianMahasiswaDialog
        properties={PROPERTIES}
        open={penilaianDialogOpen}
        onClose={handlePenilaianDialogClose}
      />
    </>
  );
};
