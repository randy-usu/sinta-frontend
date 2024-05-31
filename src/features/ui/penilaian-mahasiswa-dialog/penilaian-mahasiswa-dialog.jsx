import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

export const PenilaianMahasiswaDialog = ({ onClose, ...props }) => {
  return (
    <Dialog onClose={onClose} {...props}>
      <DialogTitle>Penilaian Mahasiswa</DialogTitle>
      <DialogContent>
        <DialogContentText>Nama: Rima Susanti</DialogContentText>
        <DialogContentText>NIM: 237038038</DialogContentText>
        <DialogContentText>
          Tgl. Terakhir Bimbingan: 30 Mar 2024
        </DialogContentText>
        <DialogContentText>Tgl. Pengajuan: 01 Apr 2024</DialogContentText>
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
        <Button type="submit" onClick={onClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
