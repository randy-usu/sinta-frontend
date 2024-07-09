import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TextField,
} from "@mui/material";

const ROWS = [
  {
    number: 2,
    nim: 237038038,
    name: "Rima Susanti",
    dosenPembimbing1: "Suha",
    dosenPembimbing2: "Suhi",
    dosenPenguji1: "Suha",
    dosenPenguji2: "Suhi",
    tglUjian: "30 Mar 2024",
    tahapanTerakhir: "Seminar Proposal",
  },
];

export const PenilaianMahasiswaDialog = ({
  onClose,
  properties = [],
  ...props
}) => (
  <Dialog onClose={onClose} {...props}>
    <DialogTitle>Penilaian Mahasiswa</DialogTitle>
    <DialogContent>
      {ROWS.map((row) => (
        <DialogContentText>
          <Table>
            <tbody>
              <tr>
                <td>NIM</td>
                <td style={{ paddingLeft: 10 }}>: {row.nim}</td>
              </tr>
              <tr>
                <td>Nama</td>
                <td style={{ paddingLeft: 10 }}>: {row.name}</td>
              </tr>
              <tr>
                <td>Dosen Pembimbing 1</td>
                <td style={{ paddingLeft: 10 }}>: {row.dosenPembimbing1}</td>
              </tr>
              <tr>
                <td>Dosen Pembimbing 2</td>
                <td style={{ paddingLeft: 10 }}>: {row.dosenPembimbing2}</td>
              </tr>
              <tr>
                <td>Dosen Penguji 1</td>
                <td style={{ paddingLeft: 10 }}>: {row.dosenPenguji1}</td>
              </tr>
              <tr>
                <td>Dosen Penguji 2</td>
                <td style={{ paddingLeft: 10 }}>: {row.dosenPenguji2}</td>
              </tr>
              <tr>
                <td>Tanggal Ujian</td>
                <td style={{ paddingLeft: 10 }}>: {row.tglUjian}</td>
              </tr>
              <tr>
                <td>Tahapan Terakhir</td>
                <td style={{ paddingLeft: 10 }}>: {row.tahapanTerakhir}</td>
              </tr>
            </tbody>
          </Table>
        </DialogContentText>
      ))}
      <TextField
        autoFocus
        required
        margin="normal"
        label="Nilai"
        type="number"
        inputProps={{
          min: 0,
          max: 100,
        }}
      />
    </DialogContent>
    <DialogActions>
      <Button type="submit" variant="contained" onClick={onClose}>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);
