import { Box, Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import api from "../../api";
import ConfirmApplyProjectModal from "../modalConfirmApplyProject/confirmApply"

export function ModalProjectInfo({ nameProject, tags, description, status, leader, startDate, duration, isOpen, handleClose, idUser, roles, idProject, userApplyProject }) {

    const [isApply, setIsApply] = useState(true)
    const [modalVisibleApply, setModalVisibleApply] = useState(false);
    const [errorSameApply, setErrorSameApply] = useState(false)
    const refSelect = useRef(null)

    const { id } = JSON.parse(sessionStorage.getItem("user"))



    useEffect(() => {

        if (idUser === id) {
            setIsApply(false)
        }
    }, [])

    function handleModalVisibleApply() {
        setModalVisibleApply(!modalVisibleApply);
    }

    async function applyUser() {

        await api.post("/applyProject", { idProject: idProject, idUser: id, idRole: refSelect.current.value }).then(() => {
            handleModalVisibleApply()
            handleClose()

        }).catch((e) => {
            if (e.response.status === 300) {
                setErrorSameApply(true)

                setTimeout(() => {
                    setErrorSameApply(false)
                }, 3000)
            }
        })

    }



    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >

                <Grid container sx={{ display: "flex", justifyContent: "center", marginTop: "10%", position: "relative" }}>
                    <Box sx={{ display: "flex", width: 670, height: 460, backgroundColor: "#EDEDED", padding: 2, borderRadius: 3 }}>
                        <Grid item lg={7}>
                            <Container sx={{ padding: 2 }}>
                                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 1.5 }}>

                                    {status === "Open" &&
                                        <Box component="div" sx={{ backgroundColor: "tagOpen.main", padding: 1, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
                                            <Typography variant="title3" sx={{ marginRight: 1.3, color: "white.main", display: "inline-flex", alignItems: 'center', height: 32, width: 70, justifyContent: "center" }}>
                                                {status}
                                            </Typography>
                                        </Box>}

                                    {status === "Closed" &&
                                        <Box component="div" sx={{ backgroundColor: "tagClosed.main", padding: 1, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
                                            <Typography variant="title3" sx={{ marginRight: 1.3, color: "white.main", display: "inline-flex", alignItems: 'center', height: 32, width: 70, justifyContent: "center" }}>
                                                {status}
                                            </Typography>
                                        </Box>}

                                    {status === "Done" &&
                                        <Box component="div" sx={{ backgroundColor: "doneInactive.main", padding: 1, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2, textAlign: "center" }}>
                                            <Typography variant="title3" sx={{ marginRight: 1.3, color: "white.main", display: "inline-flex", alignItems: 'center', height: 32, width: 70, justifyContent: "center" }}>
                                                {status}
                                            </Typography>
                                        </Box>}

                                    <Typography variant="title2">
                                        {nameProject}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", gap: 3, marginTop: 2, marginBottom: 2 }}>
                                    <Grid container spacing={10}>
                                        {tags.map((item) => {
                                            return (
                                                <Grid key={item} item lg={2}>
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

                                    <Grid container>


                                        <Typography variant="title4">
                                            Project Description:
                                        </Typography>

                                        <Typography variant="text4">
                                            {description}
                                        </Typography>
                                    </Grid>

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

                                {status === "Done" &&
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 592, height: 200 }}>
                                        <Typography variant="title3">This project is already finished</Typography>
                                    </Box>}

                                {status === "Closed" &&
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 592, height: 200 }}>
                                        <Typography variant="title3">This project is no longer receiving applications</Typography>
                                    </Box>}

                                {status === "Open" && isApply && <Box sx={{ backgroundColor: "#e3e1e1", width: 572, marginTop: 5, padding: 2, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    {errorSameApply && <Typography variant="title4" color="error.main">You already applied to this project!</Typography>}
                                    <FormControl sx={{ backgroundColor: "#ffffff", width: 400 }}>
                                        <InputLabel id="">Areas</InputLabel>
                                        <Select
                                            inputRef={refSelect}
                                            label="Areas"
                                        >
                                            {roles.map((item) => {
                                                return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                            })}
                                        </Select>
                                    </FormControl>

                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Checkbox />
                                        <Typography variant="text4">My manager is aware and according to my participation in the project</Typography>
                                    </Box>

                                    <Box>
                                        <Button onClick={applyUser} sx={{ color: "doneInactive.main", backgroundColor: "inactiveCard.main" }}>Apply Now</Button>
                                    </Box>
                                </Box>}


                            </Container>
                        </Grid>

                        <Grid item lg={5} sx={{ display: "flex", alignItems: "center", marginBottom: 22 }}>

                            <Box sx={{ position: "absolute", top: "5%", right: "35%" }}>
                                <Button onClick={handleClose} sx={{ fontSize: 18 }}>X</Button>
                            </Box>

                            <Container>
                                <Box sx={{ marginLeft: "10%" }}>
                                    <Typography variant="title4" >Team:</Typography>

                                    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "3%" }}>
                                        <Typography variant="text4"><Typography variant="text4" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text4"><Typography variant="text4" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text4"><Typography variant="text4" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text4"><Typography variant="text4" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text4"><Typography variant="text4" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                        <Typography variant="text4"><Typography variant="text4" color="dellBlue.main">Chloe Price</Typography> - Product Owner</Typography>
                                    </Box>
                                </Box>
                            </Container>
                        </Grid>


                    </Box>


                </Grid>

            </Modal >

            {modalVisibleApply && <ConfirmApplyProjectModal handleModalVisibleApply={handleModalVisibleApply} />
            }

        </div >
    )
}