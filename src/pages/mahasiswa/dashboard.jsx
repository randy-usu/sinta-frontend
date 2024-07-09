import {
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Button,
  Grid,
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
  Box
} from "@mui/material";

import { useState } from "react";
import { useTableSearch } from "../../features/layout/components/tabel-mahasiswa/tabel-dashboard";

const { Search } = Input;

const data = [
  {
    id: "1",
    agenda: "Seminar Praproposal",
    tanggal: "20 Juni s.d. 30 Juni 2024",
  },
  {
    id: "2",
    agenda: "Seminar Hasil",
    tanggal: "20 Juni s.d. 30 Juni 2024",
  },
];

export default function Dashboard() {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers
  });

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `download.txt`;
    link.href = "./download.txt";
    link.click();
  };

  return (
    <>
    <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
            Dashboard
          </Typography>
          <div>
            <Search
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search"
            enterButton
            style={{
              position: "sticky",
              top: "0",
              left: "0",
              width: "200px",
              marginTop: "2vh"
            }}
          />
          <br /> <br />
          <Table
            rowKey="name"
            dataSource={filteredData}
            columns={userColumns}
            loading={loading}
            pagination={false}
          />
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={13}
            rowsPerPage={5}
            page={0}
            onPageChange={() => {}}
          />
          </Grid>
      </Grid>
      </Box>
    </>
  );
}