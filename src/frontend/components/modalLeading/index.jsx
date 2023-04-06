import { Avatar, Box, Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import api from "../../api";
import ConfirmApplyProjectModal from "../modalConfirmApplyProject/confirmApply"

export function ModalProjectLeading({ nameProject, tags, description, status, leader, startDate, duration, isOpen, handleClose, idUser, roles, idProject, userApplyProject, _users }) {

    const [isApply, setIsApply] = useState(true)
    const [_leader, setLeader] = useState(false)
    const [modalVisibleApply, setModalVisibleApply] = useState(false);
    const [errorSameApply, setErrorSameApply] = useState(false)
    const [users, setUsers] = useState([])
    const refSelect = useRef(null)

    const { id } = JSON.parse(sessionStorage.getItem("user"))



    useEffect(() => {
        if (idUser === id) {
            setIsApply(false)
            setLeader(true)
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

    async function deleteProject() {
        await api.delete(`/project/${idProject}`).then(() => {
            handleClose()
        }).catch((e) => {
            alert(e)
        })
    }


    function filtratArray(array, filtro) {
        const arrayFiltrado = array.filter(item => !filtro.some(itemObjetc => itemObjetc.idUser === item.idUser))
        return arrayFiltrado
    }

    async function acceptAplyes(idUser, idRole) {

        if (!users.filter(e => e.idUser === idUser).length > 0) {
            setUsers(item => [...item, { idUser, idRole }])
        } else {
            const newArray = filtratArray(users, [{ idUser, idRole }])
            setUsers(newArray)
        }
    }

    async function acceptUserForWorkingProject() {
        const token = JSON.stringify(sessionStorage.getItem("token"))


        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`

            const arrayUsers = users.map((item) => { return item.idUser })


            await api.post("/acceptUserForWorkinProject", { idOwnerProject: id, idProject: idProject, idUsers: arrayUsers })
                .then((item) => {
                    handleClose()
                })
        }

    }


    console.log(_users)

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
            >

                <Grid container sx={{ display: "flex", justifyContent: "center", marginTop: "10%", position: "relative" }}>
                    <Box sx={{ display: "flex", backgroundColor: "#EDEDED", padding: 2, borderRadius: 3 }}>
                        <Grid item lg={12}>
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

                                <Box sx={{ display: "flex", flexDirection: "column", padding: 2, boxShadow: 4, alignItems: "center", justifyContent: "center", width: 600, height: 255 }}>
                                    <Grid container sx={{ overflowY: "auto", height: "100%" }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                                            <Typography variant="text1">Profile</Typography>
                                            <Typography variant="text1">Application</Typography>
                                        </Box>

                                        {_users.map((item) => {
                                            return (
                                                <Grid item lg={12} sx={{ marginBottom: 1 }}>
                                                    <Box sx={{ backgroundColor: "inactiveCard.main", height: 60, display: "flex", alignItems: "center", justifyContent: "space-around", borderRadius: 3 }}>
                                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                                            <Avatar alt="lalal" src="../public/profile.png" sx={{ width: 42, height: 42, marginRight: 1.2 }} />
                                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                                <Typography variant="text1">{item.name}</Typography>
                                                                <Typography variant="text6">Develop</Typography>
                                                            </Box>
                                                        </Box>

                                                        <Box>
                                                            <Typography variant="text4">
                                                                {item.role}
                                                            </Typography>
                                                        </Box>

                                                        <Box>
                                                            <Checkbox onChange={() => { acceptAplyes(item.id, 2) }}></Checkbox>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            )
                                        })}


                                    </Grid>


                                </Box>

                                <Box sx={{ width: 580, display: "flex", justifyContent: "center", gap: 3, marginTop: 2 }}>
                                    <Button onClick={acceptUserForWorkingProject} sx={{ backgroundColor: "sucess.main", color: "white.main", width: 100, height: 40, }}>Accept Applyes</Button>

                                    {_leader &&
                                        <Button onClick={deleteProject} sx={{ backgroundColor: "error.main", color: "white.main", width: 100, height: 40, }}>Delete project</Button>
                                    }
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

                            </Container>
                        </Grid>


                    </Box>


                </Grid >

            </Modal >

            {modalVisibleApply && <ConfirmApplyProjectModal handleModalVisibleApply={handleModalVisibleApply} />
            }

        </div >
    )
}