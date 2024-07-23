import { Logout as LogoutIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import { AuthContext } from "../../../../auth-context";
import { LoadingButton } from "@mui/lab";

export const DrawerNavigation = ({ navigations }) => {
  const auth = useContext(AuthContext);

  return (
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
        <Avatar
          sx={{
            bgcolor: "#2196F3",
            width: 100,
            height: 100,
            marginLeft: 7.5,
            marginTop: 2,
          }}
        >
          {auth.user ? auth.user.user.name[0] : "N"}
        </Avatar>
        <Typography align="center">{auth.user?.user.name ?? "Nama"}</Typography>
      </Box>
      <List>
        {navigations.map(({ text, Icon, to }) => (
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
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <LoadingButton loading={auth.logOutLoading} onClick={auth.signOut}>
          <LogoutIcon />
        </LoadingButton>
      </Box>
    </Drawer>
  );
};
