import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

export function ResponsiveDialog() {


    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div >
            <Button variant="outlined" onClick={handleClickOpen}>
                Gerenciar projeto
            </Button>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"

            >
                <DialogTitle id="responsive-dialog-title">
                    {" Project registration"}
                </DialogTitle>

                <DialogContent >
                    <DialogContentText>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>


                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>

                                <div id="column-1" style={{ height: "20%", width: "40%" }}>
                                    <strong>Project description</strong>
                                    <br />
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                </div>

                                <div id="column-2">
                                    <strong>Project Status</strong><br />
                                    New project<br />

                                    <strong>Team</strong><br />
                                    2 Developers, 1 Designer, 1 QA<br />

                                </div>

                                <div id="column-3">
                                    <strong>Start date</strong><br />
                                    28/08/2023<br />

                                    <strong>Duration:</strong><br />
                                    3 months
                                </div>
                            </div>
                            <br/>

                            <Box sx={{display:"flex", justifyContent:"right", width:"100%", padding:"5px"}}>
                                <Box sx={{ height: "20px ", width: "100px", border: 1, borderWidth: "3px", borderColor: "black", borderRadius: "5px" }}>
                                    <SearchIcon />
                                </Box>

                            </Box>
                            
                            
                        </div>

                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Abrir
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}
