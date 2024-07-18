import { 
  Box,
  Button,
  Grid,
  Typography 
} from "@mui/material";

import { MahasiswaBimbinganTable } from "../../features/mahasiswa";
import { useMemo, useState } from "react";
import { MaterialReactTable, MRT_ActionMenuItem, useMaterialReactTable } from "material-react-table";
import { Link } from "react-router-dom";

export default function MahasiswaBimbingan() {

  const data = [
    {
      number: "1",
      nim: "237038019",
      name: "Roma Susanto",
      dosenPembimbing1: "Suha",
      dosenPembimbing2: "Suhi",
      dosenPenguji1: "Suha",
      dosenPenguji2: "Suhi",
      tglTerakhirBimbingan: "26 Mar 2024",
      tahapanTerakhir: "Seminar Proyek",
    },
  ];

  /* const data2 = [
    {
      number: 1,
      nim: "237038019",
      name: "Roma Susanto",
      dosenPembimbing1: "Suha",
      dosenPembimbing2: "Suhi",
      dosenPenguji1: "Suha",
      dosenPenguji2: "Suhi",
      tglTerakhirBimbingan: "26 Mar 2024",
      tahapanTerakhir: "Seminar Proyek",
    },
  ]; */

  const columns = useMemo(
    () => [
      {
        accessorKey: 'number',
        header: 'No.',
        size: '5',
      },
      {
        accessorKey: 'nim',
        header: 'NIM',
        filterVariant: 'text',
      },
      {
        accessorKey: 'name',
        header: 'Nama',
        filterVariant: 'text',
      },
      {
        header: 'Dosen Pembimbing',
        Cell: (props) => (
          <>
            <Typography>{props.row.original.dosenPembimbing1}</Typography>
            <Typography>{props.row.original.dosenPembimbing2}</Typography>
          </>
        ),
      },
      {
        header: 'Dosen Penguji',
        Cell: (props) => (
          <>
            <Typography>{props.row.original.dosenPembimbing1}</Typography>
            <Typography>{props.row.original.dosenPembimbing2}</Typography>
          </>
        ),
      },
      {
        accessorKey: 'tglTerakhirBimbingan',
        header: 'Tgl. Terakhir Bimbingan',
        filterVariant: 'text',
      },
      {
        accessorKey: 'tahapanTerakhir',
        header: 'Tahapan Terakhir',
        filterVariant: 'text',
      },
      {
        id: 'aksi',
        header: 'Aksi',
        Cell: () => (
          <Box>
            {data.map((item) => (
              <Button variant="outlined"><Link component={Link} to={item.nim}>Detail</Link></Button>
            ))}
          </Box>
        ),
      },
    ]
  ); 

  return (
    <>
      <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4" sx={{ flex: 1, marginBottom: 5 }}>
              Mahasiswa Bimbingan
            </Typography>
            <div>
              <MaterialReactTable
                columns={columns}
                data={data}
                enableGlobalFilterModes
                initialState={{
                  showGlobalFilter: true,
                }}
                positionGlobalFilter="left"
                positionActionsColumn="last"
                muiSearchTextFieldProps={{
                  placeholder: `Search`,
                  sx: { minWidth: '300px' },
                  variant: 'outlined',
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}