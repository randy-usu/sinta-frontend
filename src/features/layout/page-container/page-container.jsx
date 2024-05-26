import { Box } from "@mui/material";

import { DrawerNavigation } from "../components";

export const PageContainer = ({ children }) => (
  <Box sx={{ display: "flex" }}>
    <DrawerNavigation />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {children}
    </Box>
  </Box>
);
