import { Container, Grid, Typography } from "@mui/material";
import { Filter } from "../../components/filter"
import { ProjectCardInfos } from "../../components/projectCard"
import { ModalProjectInfo } from '../../components/modalProjectInfo';
import { ModalProjectAplly } from '../../components/modalApllyproject'
import { Box } from '@mui/system';
import api from '../../api';
import { useState, useEffect } from "react";



export function Allprojects() {

    const [dataProject, setDataProject] = useState([])

    async function reqProject() {
        const data = await api.get("/getAllProjects")
        setDataProject(data.data)
    }

    useEffect(() => {
        const token = JSON.stringify(sessionStorage.getItem("token"))

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
        }
        reqProject()
    }, [])

    console.log(dataProject)




    return (
        <div>
            <Box sx={{ marginLeft: "13.5%", padding: 1 }}>

                <Typography variant='title1'>All projects</Typography>
                <Typography variant='subtitle2'>Find a project that fits to you and apply!</Typography>

            </Box>

            <Box sx={{ marginLeft: "12%" }}>
                <Filter />
            </Box>

            <Grid container sx={{ display: "flex", justifyContent: "center" }} direction="row" spacing={4} columnSpacing={0}>

                <ModalProjectAplly
                    nameProject="hello"
                    tags={["Python", "Java", "SCRUM"]}
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga. Veritatis nemo maiores pariatur illum quidem voluptates, suscipit nobis dolore porro rerum molestiae consequuntur error explicabo culpa? Dicta, odio accusamus."

                    status="Progress"
                    leader="Abner Silva"
                    duration="3 Months"
                    startDate="29/03/2023" 
                
                />
                
            

                {dataProject.map((item) => {
                    return (
                        <Grid item lg={3.5} key={item.id}>
                            < ProjectCardInfos
                                status={item.status}
                                name={item.name}
                                idProject={item.id}
                                area={"Tech"}
                                deadLine={item.aplicationDeadLine}
                                duration={item.duration}
                                tags={item.projectTag}
                                description={item.description}
                                leader={item.leader}
                                dateStart={item.dateStart}
                                idUser={item.idUser}
                                roles={item.projectRole}
                                userApplyProject={item.userApplyProject}

                            />
                        </Grid>
                    );
                })}

            </Grid>


        </div>
    )
}