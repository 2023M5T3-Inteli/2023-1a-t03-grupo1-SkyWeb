import { InfoProfile } from "../../components/infoProfile";
import { ProfileHeader } from "../../components/ProfileHeader";
import { SkilsProfile } from "../../components/skilsProfile";
import { Grid, Container, Box } from "@mui/material"
import { RigthHeaderProfile } from "../../components/rigthHeaderProfile";
import { ContainerProfileCard } from "../../components/containerProfileCards";


export function Profile() {
    return (
        <div>
            <Grid container spacing={0} sx={{ width: 1400 }}>
                <Container sx={{ padding: 4.5, display: "flex" }}>
                    <Grid item lg={6.5} sx={{ marginLeft: 5, }}>
                        <Box sx={{ marginBottom: 7 }}>
                            <ProfileHeader />
                        </Box>

                        <Box sx={{ marginBottom: 13 }}>
                            <InfoProfile />
                        </Box>

                        <Box sx={{}}>
                            <SkilsProfile />
                        </Box>
                    </Grid>
                    <Grid item lg={5.5} sx={{ backgroundColor: "inactiveCard.main", borderRadius: 5, boxShadow: 5 }}>
                        <RigthHeaderProfile />
                        <ContainerProfileCard />
                    </Grid>
                </Container>
            </Grid>
        </div>
    )
}