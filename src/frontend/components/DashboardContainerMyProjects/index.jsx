import * as React from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { ProjectCardInfosTest } from "../projectCardTest";
import { flexbox, typography } from "@mui/system";

export function ContainerMyProjects({ status, name, deadline, area, duration, tags, id }) {

  return (
    <Container sx={{ background: "rgba(215, 215, 215, 0.45)", width: 500, height: 255 }}>
      <Grid item sx={{ overflowY: "auto", height: "100%" }}>
        <Box sx={{ display: "grid", marginTop: 3 }}>
          return (
          <div key={id}>
            < ProjectCardInfosTest
              status={status}
              name={name}
              area={area}
              deadLine={deadline}
              duration={duration}
              tags={tags}
            />
          </div>
          );
        </Box>
      </Grid>
    </Container>
  );
}
