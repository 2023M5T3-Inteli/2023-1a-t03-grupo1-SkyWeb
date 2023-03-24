import * as React from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { ProjectCardInfos } from "../projectCard";
import { flexbox, typography } from "@mui/system";

export function ContainerRecent({ }) {
  const array = [
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java"],
      id: 1,
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
      id: 2,
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
      id: 3,
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
      id: 4,
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
      id: 5,
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
      id: 6,
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
      id: 7,
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
      id: 8,
    },
  ];
  return (
    <Container sx={{ background: "rgba(215, 215, 215, 0.45)", width: 500, height: 255 }}>
      <Grid item sx={{ overflowY: "auto", height: "100%" }}>
        <Box sx={{ display: "grid", marginTop: 3 }}>
          {array.map((item) => {
            return (
              <div key={item.id}>
                < ProjectCardInfos
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
