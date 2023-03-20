import { Box, Grid, Modal, Typography } from "@mui/material";
import { Container, } from "@mui/system";
import { ManagerHeader } from "../../components/managerHeader";
import { ContainerPending } from "../../components/containerPending";
import { ContainerApproved } from "../../components/containerApproved";
import { ContainerDennied } from "../../components/containerDennied";
import { useState } from "react";
import { ModalCreateProject } from "../../components/createProjectModal/projectCreation"
import RemovePersonModal from "../../components/modalConfirmRemoveUser/confirmRemoveUser";
import ConfirmCreateProjectModal from "../../components/modalConfirmCreation/createProject";
import ConfirmDeleteProjectModal from "../../components/modalConfirmDeleteProject/confirmDeleteProject";
import ConfirmApplyProjectModal from "../../components/modalConfirmApplyProject/confirmApply";
import CancelApplyProject from "../../components/modalConfirmCancelApply/confirmCancelApply";
  
export function Manager() {
  const array = [{ status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Javasdadakdnajdhaudhaudaudaudau"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] },]


  //Remove person confirmation modal
  const [modalVisible, setModalVisible] = useState(false);

  function handleModalVisible() {
    setModalVisible(!modalVisible);
    console.log(modalVisible)
  }


  //Create project confirmation modal
  const [modalVisibleProject, setModalVisibleProject] = useState(false);

  function handleModalVisibleProject() {
    setModalVisibleProject(!modalVisibleProject);
    console.log(modalVisibleProject)
  }


  //Delete project confirmation modal
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);

  function handleModalVisibleDelete(){
    setModalVisibleDelete(!modalVisibleDelete);
    console.log(modalVisibleDelete)
  }


  //Apply project confirmation modal
  const [modalVisibleApply, setModalVisibleApply] = useState(false);

  function handleModalVisibleApply(){
    setModalVisibleApply(!modalVisibleApply);
    console.log(modalVisibleApply)
  }


  //Cancel application confirmation modal
  const [modalVisibleCancel, setModalVisibleCancel] = useState(false);

  function handleModalVisibleCancelApply(){
    setModalVisibleCancel(!modalVisibleCancel);
    console.log(modalVisibleCancel)
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



        {/* Remove person confirmation modal */}
        <button onClick={handleModalVisible}>Modal Remove Person</button>

        {
          modalVisible &&
          <RemovePersonModal handleModalVisible={handleModalVisible} name="Livia Bonotto" />
        }


        {/* Create project confirmation modal */}
        <button onClick={handleModalVisibleProject}>Modal Confirm Project</button>

        {
          modalVisibleProject &&
          <ConfirmCreateProjectModal handleModalVisibleProject={handleModalVisibleProject} />
        }


        {/* Delete project confirmation modal */}
        <button onClick={handleModalVisibleDelete}> Modal Delete Project </button>
        {
          modalVisibleDelete &&
          <ConfirmDeleteProjectModal handleModalVisibleDelete={handleModalVisibleDelete} projectName="Backoffice" />
        }


        {/* Apply project confirmation modal */}
        <button onClick={handleModalVisibleApply}> Modal Apply Project </button>
        {
          modalVisibleApply &&
          <ConfirmApplyProjectModal handleModalVisibleApply={handleModalVisibleApply}/>
        }


        {/* Cancel application confirmation modal */}
        <button onClick={handleModalVisibleCancelApply}> Modal cancel application </button>
        {
          modalVisibleCancel && 
          <CancelApplyProject handleModalVisibleCancelApply={handleModalVisibleCancelApply} projectName="Backoffice"/>
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