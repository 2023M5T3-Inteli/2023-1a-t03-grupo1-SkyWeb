import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { ProjectCardInfosManager } from "../projectCardManager";
import api from "../../api";
import { Navigate, redirect, useNavigate } from "react-router-dom";


export function ContainerDennied({ }) {

  const [dataProject, setDataProject] = useState([])

  const { idManager } = JSON.parse(sessionStorage.getItem("user"))

  const navigate = useNavigate()

  async function reqProjectbyManager() {

    await api.get(`/projectsowner/${idManager}`).then((item) => {
      const filter = item.data.filter(item => item.isApproved === false)
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
    <Container sx={{ background: "rgba(215, 215, 215, 0.45)", width: 500, height: 255 }}>
      <Grid item sx={{ overflowY: "auto", height: "100%" }}>
        <Box sx={{ display: "grid", marginTop: 3 }}>
          {dataProject.map((item) => {
            return (
              <div key={item.id}>
                < ProjectCardInfosManager
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
