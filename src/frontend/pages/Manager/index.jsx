import { Box, Grid, Modal, Typography } from "@mui/material";
import { Container, } from "@mui/system";
import { ManagerHeader } from "../../components/managerHeader";
import { ContainerPending } from "../../components/containerPending";
import { ContainerApproved } from "../../components/containerApproved";
import { ContainerDennied } from "../../components/containerDennied";
import { useState, useEffect } from "react";
import api from "../../api";


export function Manager() {

  const { isManager } = JSON.parse(sessionStorage.getItem("user"))

  const [state, setState] = useState(false)


  useEffect(() => {
    if (isManager != true) {
      setState(true)
    }

    const token = JSON.stringify(sessionStorage.getItem("token"))

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
    }
    else  {
      alert("Token inválido")
    }
  })


  if (state) return <Typography variant="title1">You don't have permission to access this page.</Typography>

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


            <ContainerPending />
          </Container>
        </Grid>


        <Box sx={{ display: "flex", marginLeft: 8, marginTop: 8, justifyContent: "center", gap: 7 }}>

          <Grid item lg={6} >
            <Container>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                <Typography variant="title2" sx={{}}>
                  Approved
                </Typography>
                <Box component="div" sx={{ width: 325, height: 7, backgroundColor: "tagOpen.main", borderRadius: 6 }} />
              </Box>
              <ContainerApproved />
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
              <ContainerDennied />
            </Container>
          </Grid>

        </Box>

      </Grid>
    </Container>




  );
}