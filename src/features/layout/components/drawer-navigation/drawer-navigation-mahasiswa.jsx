import { 
    Logout as LogoutIcon,
  } from "@mui/icons-material";
  import {
    Avatar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
  import { Link as RouterLink } from "react-router-dom";
  
  export const DrawerNavigationMahasiswa = ( navigationsMahasiswa ) => (
    <Drawer
    sx={{
      width: 220,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: 220,
        boxSizing: "border-box",
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Box>
      <Avatar sx={{ bgcolor: '#2196F3', width: 100, height: 100 }}>NM</Avatar>
      <Typography>Nama Mahasiswa</Typography>
    </Box>
    <List>
      {navigationsMahasiswa.map(({ text, Icon, to }) => (
        <ListItem key={text} disablePadding>
          <ListItemButton LinkComponent={RouterLink} to={to}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Box
      sx={{
        mt: "auto",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexShrink: 1, minWidth: 0 }}>
        <Typography variant="subtitle1" noWrap>
          Log Out
        </Typography>
      </Box>
      <IconButton component={RouterLink} to="/">
        <LogoutIcon />
      </IconButton>
    </Box>
  </Drawer>
  );