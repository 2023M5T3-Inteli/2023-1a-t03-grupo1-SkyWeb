import { Box, Grid, Modal, Typography } from "@mui/material";
import { Container, } from "@mui/system";
import { ManagerHeader } from "../../components/managerHeader";
import { ContainerPending } from "../../components/containerPending";
import { ContainerApproved } from "../../components/containerApproved";
import { ContainerDennied } from "../../components/containerDennied";
import { useState } from "react";
import RemovePersonModal from "../../components/modalConfirmRemove/removePerson";
import ConfirmCreateProjectModal from "../../components/modalConfirmCreation/createProject";
import { ModalCreateProject } from "../../components/modalCreateProject"
  
export function Manager() {
  const array = [{ status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Javasdadakdnajdhaudhaudaudaudau"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] },]


  const [modalVisible, setModalVisible] = useState(false);

  function handleModalVisible() {
    setModalVisible(!modalVisible);
    console.log(modalVisible)
  }


  const [modalVisibleProject, setModalVisibleProject] = useState(false);

  function handleModalVisibleProject() {
    setModalVisibleProject(!modalVisibleProject);
    console.log(modalVisibleProject)
  }



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



        <button onClick={handleModalVisible}>Modal Remove Person</button>

        {
          modalVisible &&
          <RemovePersonModal handleModalVisible={handleModalVisible} name="Livia Bonotto" />
        }



        <button onClick={handleModalVisibleProject}>Modal Confirm Project</button>

        {
          modalVisibleProject &&
          <ConfirmCreateProjectModal handleModalVisibleProject={handleModalVisibleProject} />
        }


        <ModalCreateProject>
        </ModalCreateProject>

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