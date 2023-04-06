import { Box, Button, Grid, Modal, Typography, Autocomplete, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

export function ModalProjectAplly({ nameProject, tags, description, status, leader, startDate, duration, _open }) {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
    ]



    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }



    return (
        <div>
            <Button onClick={handleOpen}>modal apllication </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >

                <Grid container sx={{ display: "flex", justifyContent: "center", marginTop: "10%", position: "relative" }}>
                    <Box sx={{ display: "flex", width: 550, height: 400, backgroundColor: "#EDEDED", padding: 2, borderRadius: 3, height: "100%" }}>



                        <Grid item lg={6}>
                            <Container sx={{ padding: 2 }}>
                                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 2 }}>
                                    <Typography variant="title3" sx={{ color: "#ffffff", backgroundColor: "tagOpen.main", width: 70, height: 35, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
                                        {/*Fazer isso com o campo isOpen do projeto*/}
                                        New!
                                    </Typography>
                                    <Typography variant="title2">
                                        {nameProject}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 3, marginTop: 2, marginBottom: 2 }}>
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

                                </Box>

                                <Box sx={{ width: 250, display: "flex", flexDirection: "column", gap: 1.2 }}>
                                    <Typography variant="title4">
                                        Project Description:
                                    </Typography>

                                    <Typography variant="text4">
                                        {description}
                                    </Typography>

                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography variant="title4">
                                            Project Status: <Typography variant="text4">{status}</Typography>
                                        </Typography>

                                        <Typography variant="title4">
                                            Project Leader: <Typography variant="text4">{leader}</Typography>
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: "flex", gap: 5 }}>
                                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                                            <Typography variant="title4">Start date</Typography>
                                            <Typography variant="text4">{startDate}</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                                            <Typography variant="title4">Duration:</Typography>
                                            <Typography variant="text4">{duration}</Typography>
                                        </Box>
                                    </Box>
                                </Box>


                                <Grid container spacing={2} style={{ borderRadius: "5px", width: "500px", paddingTop:"5px"}}>
                                    <Grid item xs={12} sm={12} md={12} style={{ display: "flex", justifyContent: "center" }}>
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={top100Films}
                                            sx={{ width: 300, padding: "10px" }}
                                            renderInput={(params) => <TextField {...params} label="Movie" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} style={{ display: "flex", justifyContent: "center" }}>
                                        My manager is aware and according to my participation in the project
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} style={{ display: "flex", justifyContent: "center" }}>
                                        <Button variant="outlined">Apply Now</Button>
                                    </Grid>
                                </Grid>



                            </Container>
                        </Grid>


                        <Grid item lg={6} sx={{ marginTop: "10%", }}>

                            <Box sx={{ position: "absolute", top: "5%", right: "36%" }}>
                                <Button onClick={handleClose} sx={{ fontSize: 18 }}>X</Button>
                            </Box>

                            <Container>
                                <Box sx={{ marginLeft: "20%" }}>
                                    <Typography variant="title4" >Team:</Typography>

                                    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "3%" }}>
                                        <Typography variant="text3"><Typography variant="text3" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text3"><Typography variant="text3" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text3"><Typography variant="text3" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text3"><Typography variant="text3" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text3"><Typography variant="text3" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text3"><Typography variant="text3" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                    </Box>
                                </Box>
                            </Container>

                        </Grid>




                    </Box>
                </Grid>

            </Modal>
        </div>
    )
}