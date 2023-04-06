import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { flexbox, typography } from "@mui/system";
import { ProjectCardInfosManager } from "../projectCardManager";
import api from "../../api";
import { Navigate, redirect, useNavigate } from "react-router-dom";



export function ContainerPending({ }) {

  // TODO fazer requisição os projetos do manager logado

  const [dataProject, setDataProject] = useState([])

  const { idManager } = JSON.parse(sessionStorage.getItem("user"))

  const navigate = useNavigate()

  async function reqProjectbyManager() {

    await api.get(`/projectsowner/${idManager}`).then((item) => {
      const filter = item.data.filter(item => item.isApproved === null)
      setDataProject(filter)
    }).catch((e) => {
      return navigate("/login")
    })

  }

  useEffect(() => {
    reqProjectbyManager()
  }, [])



  console.log(dataProject)


  return (

    <Container sx={{ background: "rgba(215, 215, 215, 0.45)" }}>
      <Grid item sx={{ overflowX: "auto" }} >
        <Box sx={{ display: "flex", marginTop: 5 }}>
          {dataProject.map((item) => {
            return (
              <div key={item.id}>
                < ProjectCardInfosManager
                  isApproved={item.isApproved}
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

              </div>
            );
          })}
        </Box>
      </Grid>
    </Container>
  );
}
