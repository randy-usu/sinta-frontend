import { Box, Typography } from "@mui/material";

const Dashboard = () => (
  <>
  <Box sx={{ flexGrow: 1, background: '#fafafa'}}>
    <Typography component="h1" variant="h4">
      Dashboard
    </Typography>
    <Typography sx={{ mt: 3 }}>Jadwal/Tanggal Penting</Typography>
  </Box>
  </>
);

export default Dashboard;
