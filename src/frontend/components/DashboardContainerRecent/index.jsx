import {useEffect} from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { ProjectCardInfosTest } from "../projectCardTest";
import { flexbox, typography } from "@mui/system";
import api from "../../api";

export function ContainerRecent({ }) {

  async function getCard() {
    const result = await api.get("/projectsapplied/1")
    console.log(result)
  }

  useEffect(() => {
    getCard()
  },[])


 
  return (
    <Container sx={{ background: "rgba(215, 215, 215, 0.45)", width: 500, height: 255 }}>
      <Grid item sx={{ overflowY: "auto", height: "100%" }}>
        <Box sx={{ display: "grid", marginTop: 3 }}>
          {array.map((item) => {
            return (
              <div key={item.id}>
                < ProjectCardInfosTest
                  status={item.status}
                  name={item.nome}
                  area={item.area}
                  deadLine={item.deadline}
                  duration={item.duration}
                  tags={item.tags}
                />
              </div>
            );
          })}
        </Box>
      </Grid>
    </Container>
  );
}
