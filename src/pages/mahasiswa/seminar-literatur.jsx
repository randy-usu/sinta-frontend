import {
  ArrowDropDown as ArrowDropDownIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  RemoveOutlined as RemoveIcon,
} from "@mui/icons-material";

import { useMemo, useState } from 'react';
import React from "react";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

import { useRef } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Grow,
  MenuList,
  MenuItem,
  Paper,
  Popper,
  styled,
  useMediaQuery,
  useTheme,
  Typography,
  Grid,
  Stack,
} from '@mui/material';

import { data } from "../../features/layout/components/tabel-mahasiswa/tabel-seminar-literatur";
import Literatur from "../../features/layout/components/literatur/literatur";

const VisuallyHiddenInput = styled('input')`
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1px,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
`;

export default function SeminarLiteratur() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [document, setDocument] = useState(["1"]);
  const [documentNames, setDocumentNames] = useState(['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']);
  function addComponent() { 
    if (documentNames.length > 0) { 
      setDocument([...document, documentNames[0]]);
      documentNames.splice(0, 1);
    };
  };

  const handleDeleteInput = (index) => {
    const newArray = [...document];
    newArray.splice(index, 1);
    setDocument(newArray);
  };
  
  const [action, setAction] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const listItems = ['Edit', 'Hapus'];
  
  const handleOpenAction = () => {
    window.alert(`You clicked ${listItems[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAction(false);
  };

  const handleToggle = () => {
    setAction((prevOpen) => !prevOpen);
  };

  const handleCloseAction = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setAction(false);
  };

  const columns = useMemo(
    () => [
    {
      accessorKey: 'status',
      header: "Status",
    },
    {
      accessorKey: 'tanggal',
      header: 'Tanggal',
      filterVariant: 'text',
    },
    {
      accessorKey: 'nama_pic',
      header: 'Nama PIC',
      filterVariant: 'text'
    },
    {
      id: 'aksi',
      header: 'Aksi',
      Cell: () => (
        <Box>
          <div>
            <ButtonGroup
              variant="contained"
              color="primary"
              ref={anchorRef}>
              <Button onClick={handleOpenAction}>{listItems[selectedIndex]}</Button>
              <Button
                size="small"
                onClick={handleToggle}>
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
              }}
              transition
              open={action}
              anchorEl={anchorRef.current}>
              {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
              >
                <div style={{backgroundColor: 'green', color: 'white'}}>
                  <Paper>
                  <ClickAwayListener onClickAway={handleCloseAction}>
                    <MenuList id="split-button-menu">
                      {listItems.map((item, i) => (
                        <MenuItem
                          key={item}
                          disabled={i === 2}
                          selected={i === selectedIndex}
                          onClick={(e) => handleMenuItemClick(e, i)}>
                          {item}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                  </Paper>
                </div>
              </Grow>
              )}
            </Popper>
          </div>
        </Box>
      ),
    }
  ],
);

const table = useMaterialReactTable({
  columns,
  data,
  initialState: {
    showColumnFilter: true, 
    showGlobalFilter: true,
  },
  positionGlobalFilter: "left",
});

return (
  <>
    <Box sx={{ flexGrow: 1, background: '#fafafa' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="row">
            <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
              Seminar Literatur
            </Typography>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              onClick={handleClickOpen}
              sx={{ borderRadius: 5, color: 'black', marginBottom: 5 }}
              color="inherit"
              positionActionsColumn="last"
            >
              Ajukan
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
              >
              <DialogTitle id="responsive-dialog-title" align="center">
                {"Formulir Pengusulan Seminar Literatur"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  File Power Point
                </DialogContentText>
              <Button
                component="label"
                role="undefined"
                variant="outlined"
                tabIndex={-1}
              >
                <VisuallyHiddenInput type="file" />
              </Button> 
                {document.map((item, i) => (
                <div>
                  <DialogContentText>
                    Literatur {i+1}
                  </DialogContentText> 
                  <Literatur text={item} /> 
                  </div>
                ))}
                  <div>
                    <Fab onClick={addComponent} size="small" color="info" aria-label="add"><AddIcon/></Fab>
                    <Fab onClick={handleDeleteInput} size="small" color="error" aria-label="add"><RemoveIcon/></Fab>
                  </div>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus variant="contained" onClick={handleClose}>
                      OK
                    </Button>
                  </DialogActions>
            </Dialog>
          </Stack>
            <div>
              <MaterialReactTable table={table}></MaterialReactTable>
            </div>
          </Grid>
      </Grid>
    </Box>
  </>
)
}