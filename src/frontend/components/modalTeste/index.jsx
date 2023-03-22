import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Avatar from '@mui/material/Avatar';
import { Close, Delete } from '@mui/icons-material/';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { Icon, Typography } from '@mui/material'
import { Box } from '@mui/material';
import { display } from '@mui/system';



export function ResponsiveDialogTeste(name, areas, application, position) {


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
                Gerenciar projeto teste
            </Button>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"


            >



                <DialogContent sx={{ backgroundColor: "cardBackground" }} >
                    <DialogContentText >

                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                <Close />
                            </Button>
                            <Button onClick={handleClose} autoFocus>
                                <Delete />
                            </Button>
                        </DialogActions>


                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
                            <div id="tags" style={{ display: "flex", justifyContent: "left", width: "100%" }}>

                                <Typography variant="title3" sx={{ color: "#ffffff", backgroundColor: "tagOpen.main", width: 70, height: 35, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
                                    New!
                                </Typography>
                                <Typography variant="title1" style={{ paddingLeft: "10px" }}>Dell IA<br /></Typography>
                            </div>

                            <div id="text" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>

                                <div id="column-1" style={{ height: "20%", width: "40%" }}>
                                    <Typography variant="title4">Project description</Typography>
                                    <br />
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                </div>

                                <div id="column-2">
                                    <Typography variant="title4">Project Status</Typography><br />
                                    New project<br />

                                    <Typography variant="title4">Team</Typography><br />
                                    2 Developers, 1 Designer, 1 QA<br />

                                </div>

                                <div id="column-3">
                                    <Typography variant="title4">Start date</Typography><br />
                                    28/08/2023<br />

                                    <Typography variant="title4">Duration:</Typography><br />
                                    3 months
                                </div>
                            </div>
                            <br />


                            <Box sx={{ display: "flex", justifyContent: "right", width: "100%", padding: "5px" }}>
                                <Box sx={{ height: "20px ", width: "100px", border: 1, borderWidth: "3px", borderColor: "black", borderRadius: "5px" }}>
                                    <SearchIcon />
                                </Box>
                            </Box>


                            <Box component={Paper} sx={{ flexGrow: 1 }} >
                                <Paper elevation={0} style={{ padding: '5px' }} >
                                    <Grid container spacing={2} style={{ display: 'flex', alignItems: "center" }}>

                                        <Grid item lg={3}>
                                            Profile
                                        </Grid>

                                        <Grid item lg={3}>
                                            Chosen Areas
                                        </Grid>

                                        <Grid item lg={3}>
                                            Application
                                        </Grid>

                                        <Grid item lg={3}>
                                            Position
                                        </Grid>


                                        <Grid container spacing={2} style={{ display: 'flex', alignItems: "center", marginLeft:"0", background:"red" }} >
                                            <Grid item lg={3}>
                                                Chloe Price
                                            </Grid>

                                            <Grid item lg={3}>
                                                UX/Developer
                                            </Grid>

                                            <Grid item lg={3}>


                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={'a'}
                                                    sx={{ width: 100 }}
                                                    size={'small'}
                                                    renderInput={(params) => <TextField {...params} label="Select" />}
                                                />

                                            </Grid>

                                            <Grid item lg={3}>
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={'a'}
                                                    sx={{ width: 100 }}
                                                    size={'small'}
                                                    renderInput={(params) => <TextField {...params} label="Select" />}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </div>
                    </DialogContentText>
                </DialogContent>



            </Dialog>
        </div>
    );
}

























{/*
                                <Typography variant="title4" sx={{ paddingLeft: "" }}> Profile </Typography>
                                <Typography variant="title4" sx={{ paddingLeft: "100px" }}> Chosen Areas </Typography>
                                <Typography variant="title4" sx={{ paddingLeft: "100px" }}> Application </Typography>
                                <Typography variant="title4" sx={{ paddingLeft: "100px" }}> Position </Typography>

                                <div style={{ width: "90%", height: "68px", borderRadius: "5px", backgroundColor: "grey", display: "flex", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="imagens\game.jpg" />
                                    <Typography variant="title4" sx={{ paddingLeft: "5px" }}>Chloe Price</Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "30px" }}>UX, Developer </Typography>
                                </div>
                                <div style={{ width: "90%", height: "68px", borderRadius: "5px", backgroundColor: "grey", display: "flex", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="imagens\game.jpg" />
                                    <Typography variant="title4" sx={{ paddingLeft: "5px" }}>Chloe Price</Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "30px" }}>UX, Developer </Typography>
                                </div>
                                <div style={{ width: "90%", height: "68px", borderRadius: "5px", backgroundColor: "grey", display: "flex", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="imagens\game.jpg" />
                                    <Typography variant="title4" sx={{ paddingLeft: "5px" }}>Chloe Price</Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "30px" }}>UX, Developer </Typography>
                                </div>
                                <div style={{ width: "90%", height: "68px", borderRadius: "5px", backgroundColor: "grey", display: "flex", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="imagens\game.jpg" />
                                    <Typography variant="title4" sx={{ paddingLeft: "5px" }}>Chloe Price</Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "30px" }}>UX, Developer </Typography>
                                </div>*/}