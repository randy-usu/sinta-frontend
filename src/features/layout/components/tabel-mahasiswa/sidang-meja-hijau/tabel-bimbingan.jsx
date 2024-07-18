import CheckIcon from '@mui/icons-material/Check';
import { Fab } from '@mui/material';

export const data_bimbingan = [
    {
        isActive: true,
        tanggal: "Senin, 1 Januari 2024",
        status: <Fab size='small' color='success'><CheckIcon /></Fab>,
        pembahasan: "Pembahasan",
        catatan: "Catatan",
    },
    {
        isActive: false,
        tanggal: "Senin, 1 Januari 2024",
        status: <Fab size='small' color='success'><CheckIcon /></Fab>,
        pembahasan: "Pembahasan",
        catatan: "Catatan",
    },
];