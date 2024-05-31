import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DesktopDateTimePicker } from "@mui/x-date-pickers";

export const PemilihanTanggalWaktuSeminarProyekDialog = ({
  onClose,
  ...props
}) => (
  <Dialog onClose={onClose} {...props}>
    <DialogTitle>Pemilihan Tanggal Waktu Seminar Proyek</DialogTitle>
    <DialogContent>
      <DialogContentText>Nama Mahasiswa: Rima Susanti</DialogContentText>
      <DialogContentText>NIM: 237038038</DialogContentText>
      <DialogContentText>
        Tgl. Terakhir Bimbingan: 30 Mar 2024
      </DialogContentText>
      <DialogContentText>Tgl. Pengajuan: 01 Apr 2024</DialogContentText>
      <DesktopDateTimePicker
        autoFocus
        disablePast
        label="Tgl. Seminar"
        slotProps={{
          textField: {
            required: true,
            margin: "normal",
          },
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
