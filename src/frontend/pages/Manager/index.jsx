import { Box, Grid, Typography } from "@mui/material";
import { Container, } from "@mui/system";
import Image from "mui-image"
import { ManagerHeader } from "../../components/managerHeader";
import { ProjectCardInfos } from "../../components/projectCard";
import { ContainerPending } from "../../components/containerPending";
import { ContainerApproved } from "../../components/containerApproved";
import { ContainerDennied } from "../../components/containerDennied";
import {AlertDialogSlide} from "../../components/confirmModal";


export function Manager() {
  const array = [{ status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Javasdadakdnajdhaudhaudaudaudau"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] },]


  return (
    <Container >
      <ManagerHeader />


      <Grid container spacing={2}>


        <Grid item lg={12} sx={{ display: "flex", justifyContent: "center", marginLeft: 6 }}>

          <Container>
            <Typography variant="title2">
              Pending
            </Typography>
            <ContainerPending />
          </Container>
        </Grid>

        <AlertDialogSlide>

        </AlertDialogSlide>


        <Box sx={{ display: "flex", marginLeft: 8, marginTop: 8 }}>

          <Grid item lg={6} >
            <Container>
              <Typography variant="title2">
                Approved
              </Typography>
              <ContainerApproved />
            </Container>

          </Grid>

          <Grid item lg={6}>
            <Container>
              <Typography variant="title2">
                Dennied
              </Typography>
              <ContainerDennied />
            </Container>
          </Grid>

        </Box>

      </Grid>
    </Container>




  );
}