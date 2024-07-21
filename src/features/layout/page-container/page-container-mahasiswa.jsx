import { Box } from "@mui/material";

import { DrawerNavigation, DrawerNavigationMahasiswa } from "../components";

export const PageContainerMahasiswa = () => (
  <Box sx={{ display: "flex" }}>
    <DrawerNavigation navigations={ navigations } />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {children}
    </Box>
  </Box>
);