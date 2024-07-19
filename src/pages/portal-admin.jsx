import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MenuList from '@mui/material/List';
import MenuItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';

import { 
  Link as RouterLink,
} from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div style={{ background: '#f8f8f8' }}>
      <Toolbar />
      <Divider />
      <MenuList>
          <MenuItem sx={{ color: 'black', fontWeight: 'bold' }} component={RouterLink} to="/" >
          Mahasiswa
          </MenuItem>
          <MenuItem sx={{ color: 'black', fontWeight: 'bold' }} component={RouterLink} to="/portal-dosen">
          Dosen
          </MenuItem>
          <MenuItem sx={{ color: 'black', fontWeight: 'bold' }} component={RouterLink} to="/portal-kaprodi" >
          Kepala Program Studi
          </MenuItem>
          <MenuItem sx={{ color: 'black', fontWeight: 'bold' }} component={RouterLink} to="#">
          Admin/Pegawai
          </MenuItem>
        </MenuList>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Sistem Informasi Tugas Akhir
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography margin={5} variant='h4' fontWeight={'bold'}>
          Admin/Pegawai
        </Typography>
        <Typography paragraph align='justify' width={700} height={100}>
        Sistem informasi tugas akhir untuk admin digunakan untuk mengatur dan 
        manajemen proses pemantauan terhadap proses pengerjaan tugas akhir 
        mahasiswa, proses bimbingan mahasiswa dengan dosen, penginformasian 
        dokumen administrasi terkait penjadwalan, SK dan undangan setiap tahapan 
        seminar dan sidang.
        </Typography>
        <Typography margin={10}>
          <Fab
            sx={{ width: 250, height: 40 }}
            variant="extended"
            color='primary'
            size="medium"
            component={RouterLink}
            to="/admin"
          >
            Admin/Pegawai
          </Fab>
        </Typography>
        <Typography paragraph variant='h6' width={450} height={100} marginTop={21} fontWeight={'bold'}>
          Program Studi Magister Teknik Informatika
          Fakultas Ilmu Komputer dan Teknologi Informasi
          Universitas Sumatera Utara 
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;