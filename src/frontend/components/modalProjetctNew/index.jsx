import * as React from 'react';
import { Paper, Grid, TextField, IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, Avatar, useMediaQuery, useTheme, Typography, Box, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/material/styles";



export function ResponsiveDialog() {
    const GreyGrid = styled(Grid)(({ theme }) => ({

        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        padding: theme.spacing(2),
        ":first-of-type": {
            backgroundColor: theme.palette.grey[300],
        },

    }));

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [searchValue, setSearchValue] = React.useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div >
            <Button variant="outlined" onClick={handleClickOpen}>
                Gerenciar projeto novo
            </Button>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"


            >


                <DialogContent sx={{ backgroundColor: "cardBackground" }} >
                    <DialogContentText >

                        <Grid container spacing={2}>
                            <Grid item sm={12}>
                                <div id="tags" style={{ display: "flex", justifyContent: "left", width: "100%" }}>

                                    <Typography variant="title3" sx={{ color: "#ffffff", backgroundColor: "tagOpen.main", width: 70, height: 35, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
                                        New!
                                    </Typography>

                                    <Typography variant="title1" style={{ paddingLeft: "10px" }}>Dell IA<br /></Typography>

                                </div>


                            </Grid>
                            <Grid item lg={6}>
                                
                                    <Typography variant="title4">Project description</Typography>
                                    <br />
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                              
                            </Grid>

                            <Grid item lg={3}>
                                
                                    <Typography variant="title4">Project Status</Typography><br />
                                    New project<br />

                                    <Typography variant="title4">Team</Typography><br />
                                    2 Developers, 1 Designer, 1 QA<br />
                            </Grid>

                            <Grid item lg={3}>
                                <Typography variant="title4">Start date</Typography><br />
                                28/08/2023<br />

                                <Typography variant="title4">Duration:</Typography><br />
                                3 months
                            </Grid>

                            <Grid item lg={12} style={{display:"flex", justifyContent:"flex-end"}}>
                                <TextField
                                    id="search"
                                    label="Pesquisar"
                                    variant="outlined"
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item lg={12}>
                                <Paper style={{width:"100%", height:"300px"}} >
                                    <Grid container spacing={2}>
                                        <Grid item lg={3}>
                                            <Typography variant="title4" sx={{ paddingLeft: "5px" }}>Profile</Typography>
                                        </Grid>
                                        <Grid item lg={3}>
                                            <Typography variant="title4"> Chosen areas</Typography>
                                        </Grid>
                                        <Grid item lg={3}>
                                            <Typography variant="title4"> Aplication</Typography>
                                        </Grid>
                                        <Grid item lg={3}>
                                            <Typography variant="title4"> Position</Typography>
                                        </Grid>
                                        
                                        <Grid item lg={3} style={{display:"flex", alignItems:"center" }}>
                                            <Avatar src='imagens\game.jpg'></Avatar>
                                            <Typography variant="title4" sx={{ paddingLeft: "5px" }}>Chloe Price</Typography><br></br>
                                            
                                        </Grid>
                                        <Grid item lg={3} style={{ display: "flex", alignItems: "center" }}>
                                            <Typography variant="title4" sx={{ paddingLeft: "5px" }}> Ux, Developer </Typography>
                                        </Grid>
                                        <Grid item lg={3} style={{ display: "flex", alignItems: "center" }}>
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
                                </Paper>
                            </Grid>
                        </Grid>       
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
