import { Grid, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";

export function ProfileInfos({ }) {

    const array = [
        {
            tag: "Javas",
            experiece: 20,
        },
        {
            tag: "Javas",
            experiece: 20,
        },
        {
            tag: "Javas",
            experiece: 20,
        },
        {
            tag: "Javas",
            experiece: 20,
        },
        {
            tag: "Javas",
            experiece: 20,
        },
    ]

    return (
        <Container maxWidth={ActionAreaCard} sx={{ background: "rgba(215, 215, 215, 0.45)" }}>
            <Grid item sx={{ width: "100%", overflowX: "auto" }} >
                <Box sx={{ position: flexbox, display: "flex", alignContent: "center", justifyItems: "center", width: relative, marginTop: 5 }}>
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




    // return (
    //     <Container sx={{
    //         direction: "column",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         fontFamily: "Poppins"
    //     }}>

    //     <Grid container>
    //     <Grid item></Grid>
    //     <Grid item></Grid>
    //     </Grid>


    //     </Container>
    // )
