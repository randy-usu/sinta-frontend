import { 
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography 
} from "@mui/material";

import { MahasiswaBimbinganTable } from "../../features/mahasiswa";
import { Link } from "react-router-dom";
import { FontSizeInheritedTypography } from "../../features/ui";
import React, { useState } from "react";

export default function MahasiswaBimbingan() {

  const [data, setData] = useState([
    {
      number: 1,
      agenda: "Seminar Proposal",
      tanggal: "26 Maret 2024",
      
    },
    {
      number: 2,
      agenda: "Seminar Proyek",
      tanggal: "26 Maret 2024",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.agenda.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tanggal.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <>
      <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4" sx={{ flex: 1, marginBottom: 5 }}>
              Dashboard
            </Typography>
            <div>
            <Paper>
              <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearch}
                style={{ margin: '16px', width: 300 }}
                
              />
              <Divider />
              <TableContainer component={Paper}>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      <TableCell>No.</TableCell>
                      <TableCell>Agenda</TableCell>
                      <TableCell>Tanggal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredData.map((item) => (
                      <TableRow key={item.number}>
                        <TableCell>{item.number}</TableCell>
                        <TableCell>{item.agenda}</TableCell>
                        <TableCell>{item.tanggal}</TableCell>
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
    </>
  )
}