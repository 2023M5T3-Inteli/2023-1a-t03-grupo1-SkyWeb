import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import FormHelperText from '@mui/material/FormHelperText';
import api from "../../api";
import ConfirmCreateProjectModal from "../modalConfirmCreation/createProject"





export function ModalCreateProject({ _open, _handleClose }) {

    const refNameProject = useRef(null)
    const refDurationProject = useRef(null)
    const refStartDateProject = useRef(null)
    const refDeadLineProject = useRef(null)
    const refDescriptionProject = useRef(null)
    const refStatusProject = useRef(null)


    async function test() {
        const selects = document.getElementsByClassName("MuiChip-label MuiChip-labelMedium css-6od3lo-MuiChip-label")
        const tagArray = []
        const roleArray = []

        for (let index = 0; index < selects.length; index++) {
            if (selects[index].innerText === "Design UX" | selects[index].innerText === "Design UI" | selects[index].innerText === "Tech leader" | selects[index].innerText === "Front-end" | selects[index].innerText === "Back-end" | selects[index].innerText === "Shadow" | selects[index].innerText === "Finance" | selects[index].innerText === "Testing") {
                if (selects[index].innerText === "Design UX") {
                    roleArray.push(1)
                } else if (selects[index].innerText === 'Design UI') {
                    roleArray.push(2)
                } else if (selects[index].innerText === 'Tech leader') {
                    roleArray.push(3)
                } else if (selects[index].innerText === 'Front-end') {
                    roleArray.push(4)
                } else if (selects[index].innerText === 'Back-end') {
                    roleArray.push(5)
                } else if (selects[index].innerText === 'Shadow') {
                    roleArray.push(6)
                } else if (selects[index].innerText === 'Finance') {
                    roleArray.push(8)
                } else if (selects[index].innerText === 'Testing') {
                    roleArray.push(7)
                }

            } else {

                if (selects[index].innerText === "HTML") {
                    tagArray.push(1)
                } else if (selects[index].innerText === "CSS") {
                    tagArray.push(2)
                } else if (selects[index].innerText === "JavaScript") {
                    tagArray.push(3)
                } else if (selects[index].innerText === "Bootstrap") {
                    tagArray.push(4)
                } else if (selects[index].innerText === "SQL") {
                    tagArray.push(5)
                } else if (selects[index].innerText === "Java") {
                    tagArray.push(6)
                } else if (selects[index].innerText === "C#") {
                    tagArray.push(7)
                } else if (selects[index].innerText === "Python") {
                    tagArray.push(8)
                } else if (selects[index].innerText === "Node.js") {
                    tagArray.push(9)
                } else if (selects[index].innerText === "MongoDB") {
                    tagArray.push(10)
                } else if (selects[index].innerText === "React") {
                    tagArray.push(11)
                }
            }
        }
        console.log(refNameProject.current.value)
        console.log(refDurationProject.current.value)
        console.log(refStartDateProject.current.value)
        console.log(refStatusProject.current.value)
        console.log(tagArray)
        console.log(refDescriptionProject.current.value)
        console.log(refDeadLineProject.current.value)
        console.log(roleArray)

        const { id, idManager } = JSON.parse(localStorage.getItem("user"))

        // refStatusProject.current.value

        await api.post("/createProject", {
            name: refNameProject.current.value,
            description: refDescriptionProject.current.value,
            aplicationDeadLine: new Date(refDeadLineProject.current.value),
            dateStart: new Date(refStartDateProject.current.value),
            duration: refDurationProject.current.value,
            status: "Open",
            idUser: id,
            idManager: idManager,
            idTag: tagArray,
            idRole: roleArray
        }).then(() => {
            _handleClose()
            handleModalVisibleProject()
        }).catch((e) => {
            console.log(e)
        })

    }



    const projectStatus = [
        { label: 'New Project' },
        { label: 'Ongoing' },

    ]


    const projectTags = [
        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JavaScript' },
        { label: 'Bootstrap' },
        { label: 'SQL' },
        { label: 'Java' },
        { label: 'C#' },
        { label: 'Python' },
        { label: 'Node.js' },
        { label: 'MongoDB' },
        { label: 'React' },
    ]

    const projectAreas = [
        { label: 'Design UX' },
        { label: 'Design UI' },
        { label: 'Tech leader' },
        { label: 'Front-end' },
        { label: 'Back-end' },
        { label: 'Shadow' },
        { label: 'Finance' },
        { label: 'Testing' },

    ]

    const [modalVisibleProject, setModalVisibleProject] = useState(false);

    function handleModalVisibleProject() {
        setModalVisibleProject(!modalVisibleProject);
    }




    return (
        <div>
            <Modal
                open={_open}
                onClose={_handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >

                <Grid container sx={{ display: "flex", justifyContent: "center", marginTop: "10%", position: "relative" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", width: 600, height: "100%", backgroundColor: "#EDEDED", padding: 5, borderRadius: 3 }}>

                        <Typography variant="title2" color="dellBlue.main">
                            Project Registration
                        </Typography>

                        <Typography variant="subtitle2">
                            Are you going to register your project? Fill in the fields below with the data to send your project to the platform.
                        </Typography>

                        <Typography variant="title3" sx={{ paddingTop: 3 }}>
                            Project Infos
                        </Typography>

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container rowSpacing={1} columnSpacing={2} sx={{ height: "100% !important", marginTop: 1 }}>

                                {/* Project name */}
                                <Grid item xs={6}>
                                    <Box
                                        component="form"
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                            Create a name for your project:
                                        </FormHelperText>
                                        <div>
                                            <TextField sx={{ width: "100%" }} label="Project Name" id="outlined-size-normal" inputRef={refNameProject} />
                                        </div>


                                    </Box>
                                </Grid>


                                {/* Project duration */}
                                <Grid item xs={6}>
                                    <Box
                                        component="form"
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                            Define the project duration:
                                        </FormHelperText>
                                        <div>
                                            <TextField sx={{ width: "100%" }} label="Duration" id="outlined-size-normal" inputRef={refDurationProject} />
                                        </div>
                                    </Box>
                                </Grid>


                                {/* Project start date */}
                                <Grid item xs={3}>
                                    <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                        Define the start date:
                                    </FormHelperText>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker inputRef={refStartDateProject} />
                                    </LocalizationProvider>
                                </Grid>


                                {/* Project status */}
                                <Grid item xs={3}>
                                    <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                        Select the project status:
                                    </FormHelperText>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={projectStatus}
                                        sx={{ width: "100%" }}
                                        renderInput={(params) => <TextField {...params} label="Project Status" inputRef={refStatusProject} />}
                                    />
                                </Grid>


                                {/* Project tags */}
                                <Grid item xs={6}>
                                    <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                        Select the project important tags:
                                    </FormHelperText>
                                    <Stack spacing={3} sx={{ width: "100%" }} >
                                        <Autocomplete
                                            multiple
                                            id="tags-outlined"
                                            options={projectTags}
                                            getOptionLabel={(option) => option.label}
                                            multiline
                                            maxRows={1}
                                            filterSelectedOptions
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Project Tags"
                                                    placeholder="Select Tag"
                                                />
                                            )}


                                        />
                                    </Stack>
                                </Grid>


                                {/* Project description */}
                                <Grid item xs={12}>
                                    <Box
                                        component="form"
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                            Create the project description with the main infos:
                                        </FormHelperText>
                                        <div>
                                            <TextField sx={{ width: "100%" }} label="Project Description" id="outlined-multiline-flexible" multiline maxRows={4} inputRef={refDescriptionProject} />
                                        </div>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>

                        <Typography variant="title3" sx={{ marginTop: 4 }}>
                            Application Infos
                        </Typography>

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1} sx={{ height: "100% !important", marginTop: 1 }}>

                                <Grid item xs={3}>
                                    <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                        Define the deadline:
                                    </FormHelperText>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker inputRef={refDeadLineProject} />
                                    </LocalizationProvider>
                                </Grid>

                                <Grid item xs={9}>
                                    <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                        Select the areas available for the project:
                                    </FormHelperText>
                                    <Stack spacing={3} sx={{ width: "100%" }}>
                                        <Autocomplete
                                            multiple
                                            id="tags-outlined"
                                            options={projectAreas}
                                            getOptionLabel={(option) => option.label}
                                            filterSelectedOptions
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Project Available Areas"
                                                    placeholder="Select all areas available"
                                                />
                                            )}
                                        />
                                    </Stack>
                                </Grid>

                            </Grid>

                            <Stack sx={{ display: "flex", marginTop: 4, alignItems: "center", justifyContent: "center" }}>
                                <Button onClick={test} variant="contained" size="large">Contained</Button>
                            </Stack>

                        </Box>

                    </Box>

                </Grid>

            </Modal>


            {
                modalVisibleProject &&
                <ConfirmCreateProjectModal handleModalVisibleProject={handleModalVisibleProject} />
            }
        </div>
    )
}


