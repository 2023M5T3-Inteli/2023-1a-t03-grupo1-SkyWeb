import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import FormHelperText from '@mui/material/FormHelperText';





export function ModalCreateProject({ nameProject, tags, description, status, leader, startDate, duration, _open }) {

    const [open, setOpen] = useState(false)
    
    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }
    
    const projectStatus =  [
        {label: 'New Project'},
        {label: 'Ongoing'},
        
    ]

    
    const projectTags = [
        { label: 'Phyton' },
        { label: 'Java' },
        { label: 'HTML' },
        { label: 'React' },
        { label: 'MySQL' },
        { label: 'React' },
        { label: 'NodeJS' },
        { label: 'NoSQL' },
        { label: 'DevOps' },

    ]

    const projectAreas = [
        { label: 'Product' },
        { label: 'Designer' },
        { label: 'Developer' },
        { label: 'DevOps' },
        { label: 'QA' },
        { label: 'Shadow' },
        { label: 'Finance' },
        { label: 'Testing' },

    ]
    

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                
                <Grid container sx={{ display: "flex", justifyContent: "center", marginTop: "10%", position: "relative" }}>
                    <Box sx={{ display: "flex", flexDirection:"column", width: 600, height:"100%", backgroundColor: "#EDEDED", padding: 5, borderRadius: 3 }}>
                    
                        <Typography variant="title2" color="dellBlue.main">
                            Project Registration
                        </Typography>

                        <Typography variant="subtitle2">
                            Are you going to register your project? Fill in the fields below with the data to send your project to the platform.
                        </Typography>

                        <Typography variant="title3" sx={{ paddingTop:3}}>
                            Project Infos
                        </Typography>

                        <Box sx={{ flexGrow: 1}}>
                                <Grid container rowSpacing={1} columnSpacing={2} sx={{ height: "100% !important", marginTop: 1 }}>
                                
                                {/* Project name */}
                                <Grid item xs={6}>
                                    <Box
                                        component="form"
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <FormHelperText id="component-helper-text" sx={{typography:"text4"}}>
                                            Create a name for your project:
                                        </FormHelperText>
                                        <div>
                                                <TextField sx={{ width: "100%" }} label="Project Name" id="outlined-size-normal"/>
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
                                                <TextField sx={{ width: "100%" }} label="Duration" id="outlined-size-normal" />
                                            </div>
                                        </Box>
                                </Grid>


                                {/* Project start date */}
                                <Grid item xs={3}>
                                    <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                        Define the start date:
                                    </FormHelperText>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker />
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
                                        renderInput={(params) => <TextField {...params} label="Project Status" />}
                                    />
                                </Grid>


                                {/* Project tags */}
                                <Grid item xs={6}>
                                        <FormHelperText id="component-helper-text" sx={{ typography: "text4" }}>
                                            Select the project important tags:
                                        </FormHelperText>
                                        <Stack spacing={3} sx={{ width: "100%" }}>
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
                                            <TextField sx={{ width: "100%" }} label="Project Description" id="outlined-multiline-flexible" multiline maxRows={4} />
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
                                        <DatePicker />
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

                        <Stack sx={{ display:"flex", marginTop:4, alignItems: "center", justifyContent:"center"}}>
                            <Button variant="contained" size="large">Contained</Button>
                        </Stack>

                        </Box>

                    </Box>

                </Grid>
                
            </Modal>
        </div>
    )
}


