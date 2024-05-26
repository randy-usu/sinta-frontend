import {
  Logout as LogoutIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  SpaceDashboard as SpaceDashboardIcon,
  UploadFile as UploadFileIcon,
} from "@mui/icons-material";
import {
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

export const DrawerNavigation = () => (
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
    <List>
      {[
        { text: "Dashboard", Icon: SpaceDashboardIcon, to: "/dashboard" },
        {
          text: "Mahasiswa Bimbingan",
          Icon: PeopleIcon,
          to: "/mahasiswa-bimbingan",
        },
        { text: "Mahasiswa Ujian", Icon: PersonIcon, to: "/mahasiswa-ujian" },
        {
          text: "Usulan Seminar Proyek",
          Icon: UploadFileIcon,
          to: "/usulan-seminar-proyek",
        },
      ].map(({ text, Icon, to }) => (
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
          Nama
        </Typography>
      </Box>
      <IconButton component={RouterLink} to="/">
        <LogoutIcon />
      </IconButton>
    </Box>
  </Drawer>
);
