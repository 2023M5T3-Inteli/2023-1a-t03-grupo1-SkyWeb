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
import { AlertDialogSlide } from "../../components/confirmModal";


export function Manager() {



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

  function handleModalVisibleDelete() {
    setModalVisibleDelete(!modalVisibleDelete);
    console.log(modalVisibleDelete)
  }


  //Apply project confirmation modal
  const [modalVisibleApply, setModalVisibleApply] = useState(false);

  function handleModalVisibleApply() {
    setModalVisibleApply(!modalVisibleApply);
    console.log(modalVisibleApply)
  }


  //Cancel application confirmation modal
  const [modalVisibleCancel, setModalVisibleCancel] = useState(false);

  function handleModalVisibleCancelApply() {
    setModalVisibleCancel(!modalVisibleCancel);
    console.log(modalVisibleCancel)
  }


  return (
    <Container >



      <Grid container spacing={2} sx={{ marginLeft: "7%" }}>

        <Box sx={{ marginLeft: "4%", padding: 2 }}>
          <ManagerHeader />
        </Box>


        <Grid item lg={12} sx={{ display: "flex", justifyContent: "center", marginLeft: 6 }}>

          <Container>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

              <Typography variant="title2">
                Pending
              </Typography>
              <Box component="div" sx={{ width: 345, height: 7, backgroundColor: "deadlinePending.main", borderRadius: 6 }} />
            </Box>


            {/* <ContainerPending /> */}
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
          <ConfirmApplyProjectModal handleModalVisibleApply={handleModalVisibleApply} />
        }


        {/* Cancel application confirmation modal */}
        <button onClick={handleModalVisibleCancelApply}> Modal cancel application </button>
        {
          modalVisibleCancel &&
          <CancelApplyProject handleModalVisibleCancelApply={handleModalVisibleCancelApply} projectName="Backoffice" />
        }



        <ModalCreateProject>
        </ModalCreateProject>

        {/* <AlertDialogSlide>

        </AlertDialogSlide> */}



        <Box sx={{ display: "flex", marginLeft: 8, marginTop: 8, justifyContent: "center", gap: 7 }}>

          <Grid item lg={6} >
            <Container>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                <Typography variant="title2" sx={{}}>
                  Approved
                </Typography>
                <Box component="div" sx={{ width: 325, height: 7, backgroundColor: "tagOpen.main", borderRadius: 6 }} />
              </Box>
              {/* <ContainerApproved /> */}
            </Container>

          </Grid>

          <Grid item lg={6}>
            <Container>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                <Typography variant="title2">
                  Dennied
                </Typography>
                <Box component="div" sx={{ width: 345, height: 7, backgroundColor: "tagClosed.main", borderRadius: 6 }} />
              </Box>
              {/* <ContainerDennied /> */}
            </Container>
          </Grid>

        </Box>

      </Grid>
    </Container>




  );
}