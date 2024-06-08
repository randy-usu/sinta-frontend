import { Box } from "@mui/material";

import { DrawerNavigation } from "../components";

export const PageContainer = ({ navigations, children }) => (
  <Box sx={{ display: "flex" }}>
    <DrawerNavigation navigations={navigations} />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {children}
    </Box>
  </Box>
);
