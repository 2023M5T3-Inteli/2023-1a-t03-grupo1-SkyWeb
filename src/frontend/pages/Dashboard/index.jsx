import { Box, Grid, Typography } from "@mui/material";
import { Container, } from "@mui/system";
import { DashboardHeader } from "../../components/dashboardHeader";
import { ContainerPending } from "../../components/containerPending";
import { ContainerApproved } from "../../components/containerApproved";
import { ContainerDennied } from "../../components/containerDennied";
import { ContainerLeading } from "../../components/DashboardContainerLeading";
import { ContainerMyProjects } from "../../components/DashboardContainerMyProjects";
import { ContainerRecent } from "../../components/DashboardContainerRecent";
import { ContainerSaved } from "../../components/DashboardContainerSaved";




export function Dashboard() {

    return (
        <Container >

            <Grid container spacing={2} sx={{ marginLeft: "7%" }}>

                <Box sx={{ marginLeft: "4%", padding: 2 }}>
                    <DashboardHeader />
                </Box>


                {/* <Grid item lg={12} sx={{ display: "flex", justifyContent: "center", marginLeft: 6 }}>

                    <Container>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                            <Typography variant="title2">
                                Pending
                            </Typography>
                            <Box component="div" sx={{ width: 345, height: 7, backgroundColor: "deadlinePending.main", borderRadius: 6 }} />
                        </Box>


                        <ContainerPending />
                    </Container>
                </Grid> */}

                <Box sx={{ display: "flex", marginLeft: 8, marginTop: 1, justifyContent: "center", gap: 7 }}>

                    <Grid item lg={6} >
                        <Container>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                                <Typography variant="title2" sx={{}}>
                                    My Projects
                                </Typography>
                            </Box>
                            <ContainerMyProjects />
                        </Container>

                    </Grid>

                    <Grid item lg={6}>
                        <Container>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                                <Typography variant="title2">
                                    Saved Projects
                                </Typography>
                            </Box>
                            <ContainerSaved />
                        </Container>
                    </Grid>

                </Box>



                <Box sx={{ display: "flex", marginLeft: 8, marginTop: 8, justifyContent: "center", gap: 7 }}>

                    <Grid item lg={6} >
                        <Container>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                                <Typography variant="title2" sx={{}}>
                                    Recent Applications
                                </Typography>
                            </Box>
                            <ContainerRecent/>
                        </Container>

                    </Grid>

                    <Grid item lg={6}>
                        <Container>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                                <Typography variant="title2">
                                    Leading
                                </Typography>
                            </Box>
                            <ContainerLeading />
                        </Container>
                    </Grid>

                </Box>

            </Grid>
        </Container>




    );
}