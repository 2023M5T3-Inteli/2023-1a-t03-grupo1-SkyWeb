import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material'
import { Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';



export function ResponsiveDialogProgress(name, areas, application, position) {

    function createData(name, areas, application, position) {
        return { name, areas, application, position };
    }

    const rows = [
        createData('Chloe Price', 'UX/Developer', 6.0, 28),
        createData('Chloe Price', 'UX/Developer', 9.0, 37),
        createData('Chloe Price', 'UX/Developer', 16.0, 24),
        createData('Chloe Price', 'UX/Developer', 3.7, 67),
        createData('Chloe Price', 'UX/Developer', 16.0, 49),
    ];


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
                Gerenciar projeto em andamento
            </Button>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"


            >


                <DialogContent sx={{ backgroundColor: "cardBackground" }} >
                    <DialogContentText >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
                            <div id="tags" style={{ display: "flex", justifyContent: "left", width: "100%" }}>

                                <Typography variant="title3" sx={{ color: "#ffffff", backgroundColor: "tagOpen.main", width: 70, height: 35, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
                                    New!
                                </Typography>

                                <Typography variant="title1" style={{ paddingLeft: "10px" }}>Dell IA<br /></Typography>

                                {/*<Box sx={{ display: "flex", gap: 3, marginTop: 2, marginBottom: 2 }}>
                                    <Grid container spacing={2}>
                                        {tags.map((item) => {
                                            return (
                                                <Grid key={item} item lg={4}>
                                                    <Box sx={{ backgroundColor: "inteliPurple.main", padding: 0.4, borderRadius: 2, width: 60, display: "flex", justifyContent: "center" }}>
                                                        <Typography variant="text3" sx={{ color: "#ffffff" }}>
                                                            {item}
                                                        </Typography>
                                                    </Box>
                                                </Grid>)
                                        })}
                                    </Grid>
                                </Box>*/}

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
                            <Box component={Paper} style={{ background: "white", width: "600px", height: "392px", display: "flex", justifyContent: "center", flexWrap: "wrap", overflowY: "scroll" }} >
                                <div style={{width:"100%", }}>
                                    <Typography variant="title4" sx={{ paddingLeft: "" }}> Profile </Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "100px" }}> Chosen Areas </Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "100px" }}> Application </Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "100px" }}> Position </Typography>
                                </div>
                                <div style={{ width: "90%", height: "50px", borderRadius: "5px", backgroundColor: "grey", display: "flex", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="imagens\game.jpg" />
                                    <Typography variant="title4" sx={{ paddingLeft: "5px" }}>Chloe Price</Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "30px" }}>UX, Developer </Typography>
                                </div>
                                <div style={{ width: "90%", height: "50px", borderRadius: "5px", backgroundColor: "grey", display: "flex", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="imagens\game.jpg" />
                                    <Typography variant="title4" sx={{ paddingLeft: "5px" }}>Chloe Price</Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "30px" }}>UX, Developer </Typography>
                                </div>
                                <div style={{ width: "90%", height: "50px", borderRadius: "5px", backgroundColor: "grey", display: "flex", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="imagens\game.jpg" />
                                    <Typography variant="title4" sx={{ paddingLeft: "5px" }}>Chloe Price</Typography>
                                    <Typography variant="title4" sx={{ paddingLeft: "30px" }}>UX, Developer </Typography>
                                </div>

                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "right", width: "100%", padding: "5px" }}>
                                <Box sx={{ height: "20px ", width: "100px", border: 1, borderWidth: "3px", borderColor: "black", borderRadius: "5px" }}>
                                    <SearchIcon />
                                </Box>

                            </Box>
                            <Box component={Paper} style={{ background: "white", width: "728px", height: "392px", display: "flex", justifyContent: "center", flexWrap: "wrap", overflowY: "scroll" }} >
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
