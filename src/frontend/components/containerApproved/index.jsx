import * as React from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { ActionAreaCard } from "../projectCard";
import { flexbox, typography } from "@mui/system";

export function ContainerApproved({}) {
  const array = [
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Javas"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
    {
      status: "Open",
      nome: "teste card",
      deadline: "02/08/23",
      area: "Finance",
      duration: "3 Months",
      tags: ["Java", "Python", "Ruby"],
    },
  ];
  return (
    <Container sx={{ background: "rgba(215, 215, 215, 0.45)", marginLeft: 45,width:500 }}>
      <Grid item sx={{ overflow: "auto" }}>
        <Box sx={{display:"grid" ,marginTop: 5 }}>
          {array.map((item) => {
            return (
              <ActionAreaCard
                status={item.status}
                name={item.nome}
                area={item.area}
                deadLine={item.deadline}
                duration={item.duration}
                tags={item.tags}
              />
            );
          })}
        </Box>
      </Grid>
    </Container>
  );
}
