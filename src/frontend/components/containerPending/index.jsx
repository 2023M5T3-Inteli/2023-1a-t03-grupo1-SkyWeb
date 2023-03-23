import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { flexbox, typography } from "@mui/system";
import { ProjectCardInfosManager } from "../projectCardManager";
import api from "../../api";


export function ContainerPending({ datas }) {

  // TODO fazer requisição os projetos do manager logado

  console.log(datas)




  return (

    <Container sx={{ background: "rgba(215, 215, 215, 0.45)" }}>
      <Grid item sx={{ overflowX: "auto" }} >
        <Box sx={{ display: "flex", marginTop: 5 }}>
          {/* {array.map((item) => {
            return (
              <div key={item.id}>
                < ProjectCardInfosManager
                  status={item.status}
                  name={item.nome}
                  area={item.area}
                  deadLine={item.deadline}
                  duration={item.duration}
                  tags={item.tags}
                />

              </div>
            );
          })} */}
        </Box>
      </Grid>
    </Container>
  );
}
