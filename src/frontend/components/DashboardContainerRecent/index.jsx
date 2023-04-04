import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { ProjectCardInfosTest } from "../projectCardTest";
import { flexbox, typography } from "@mui/system";
import api from "../../api";

export function ContainerRecent({ }) {

  const [data, setData] = useState([])

  const user = JSON.parse(sessionStorage.getItem("user"))

  async function getCard() {
    const result = await api.get(`/projectsapplied/${user.id}`)
    setData(result.data)
  }

  useEffect(() => {
    const token = JSON.stringify(sessionStorage.getItem("token"))


    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
    }

    getCard()
  }, [])



  return (
    <Container sx={{ background: "rgba(215, 215, 215, 0.45)", width: 500, height: 255 }}>
      <Grid item sx={{ overflowY: "auto", height: "100%" }}>
        <Box sx={{ display: "grid", marginTop: 3 }}>
          {data.map((item) => {
            return (
              <div key={item.id}>
                < ProjectCardInfosTest
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
