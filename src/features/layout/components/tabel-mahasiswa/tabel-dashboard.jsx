import { Button } from "@mui/material";

const onDownload = () => {
  const link = document.createElement("a");
  link.download = `download.txt`;
  link.href = "./download.txt";
  link.click();
};

export const data = [
  {
    isActive: true,
    id: "1",
    agenda: "Seminar Praproposal",
    tanggal: "20 Juni s.d. 30 Juni 2024",
    lampiran: <Button variant="contained" onClick={onDownload} sx={{ borderRadius:5 }}>Download File</Button>,
  },
  {
    isActive: false,
    id: "2",
    agenda: "Seminar Hasil",
    tanggal: "20 Juni s.d. 30 Juni 2024",
    lampiran: <Button variant="contained" onClick={onDownload} sx={{ borderRadius:5 }}>Download File</Button>,
  },
];