import {
  ArrowDropDown as ArrowDropDownIcon,
  Add as AddIcon,
  Search as SearchIcon,
  RemoveOutlined as RemoveIcon,

} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Grow,
  InputAdornment,
  MenuItem,
  MenuList,
  Popper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Literatur } from "../../features/layout/components/literatur/literatur";

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

  const [document, setDocument] = useState(0);
  

  const listItems = [
    "Edit", "Hapus"
  ];

  const arRef = useRef(null);
  const [popperOpen, setPopperOpen] = useState(false);
  const [selId, setSelId] = useState(1);

  const handleItemPress = (e, index) => {
    setSelId(index);
    setPopperOpen(false);
  };

  const handleCloseItem = (e) => {
    if (arRef.current && arRef.current.contains(e.target)) {
      return;
    }
    setPopperOpen(false);
  };

  const handleOpenItem = () => {
    setPopperOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, background: '#fafafa' }}>
        <Stack direction="row">
          <Typography component="h1" variant="h4" sx={{ flex: 1 }}>
            Seminar Literatur
          </Typography>
          <React.Fragment>
            <Button sx={{ borderRadius: 5, color: 'black', background: '#E0E0E0' }} variant="contained" endIcon={<AddIcon />} onClick={handleClickOpen}>
              Ajukan
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
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
                  {[...Array(document)].map((e,index)=>(
                <div>
                  <DialogContentText>
                    Literatur {index+1}
                  </DialogContentText>
                  <Button
                  component="label"
                  role="undefined"
                  variant="outlined"
                  tabIndex={-1}
                  >
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </div>
              ))}
              <div>
                <Fab onClick={()=> setDocument(document+1)} size="small" color="info" aria-label="add"><AddIcon/></Fab>
                <Fab onClick={()=> setDocument(document-1)} size="small" color="error" aria-label="add"><RemoveIcon/></Fab>
              </div>
                </DialogContent>
              <DialogActions>
              <Button autoFocus variant="contained" onClick={handleClose}>
                OK
              </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </Stack>
        <TextField
          sx={{ mt: 3 }}
          placeholder="Search..."
          size="small"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Tanggal</TableCell>
                <TableCell>Nama PIC</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  date: "Senin, 24 Feb 2024 14:00",
                  picName: "Elon Musk",
                },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Chip label="Sudah mengajukan" color="success" />
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.picName}</TableCell>
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                      }}>
                        <ButtonGroup
                        variant="contained"
                        color="primary"
                        ref={arRef}>
                          <Button>{listItems[selId]}</Button>
                          <Button
                          size="small"
                          onClick={handleOpenItem}>
                            <ArrowDropDownIcon />
                          </Button>
                        </ButtonGroup>
                        <Popper
                        transition
                        open={popperOpen}
                        anchorEl={arRef.current}>
                          {({ TransitionProps }) => (
                            <Grow
                            {...TransitionProps}
                            >
                              <div style={{backgroundColor: 'green', color: 'white'}}>
                                <ClickAwayListener onClickAway={handleCloseItem}>
                                  <MenuList id="split-button-menu">
                                    {listItems.map((item, i) => (
                                      <MenuItem
                                      key={item}
                                      onClick={(e) => handleItemPress(e, i)}>
                                        {item}
                                      </MenuItem>
                                    ))}
                                  </MenuList>
                                </ClickAwayListener>
                              </div>
                            </Grow>
                          )}
                        </Popper>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={13}
          rowsPerPage={5}
          page={0}
          onPageChange={() => {}}
        />
      </Box>
    </>
  );
}