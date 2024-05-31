import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

export const PenilaianMahasiswaDialog = ({
  onClose,
  properties = [],
  ...props
}) => (
  <Dialog onClose={onClose} {...props}>
    <DialogTitle>Penilaian Mahasiswa</DialogTitle>
    <DialogContent>
      {properties.map(([key, value], index) => (
        <DialogContentText key={index}>
          {key}: {value}
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
      <Button type="submit" onClick={onClose}>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);
