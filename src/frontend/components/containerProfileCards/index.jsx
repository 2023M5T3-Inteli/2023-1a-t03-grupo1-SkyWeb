import { Box, Container, Grid } from "@mui/material";
import { ProjectCardInfos } from "../projectCard"

export function ContainerProfileCard() {
    const array = [
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java"],
            id: 1,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 2,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 3,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 4,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 5,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 6,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 7,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 8,
        },
    ];

    return (
        <Box>
            <Container sx={{ width: 500, height: 725, padding: 2 }}>
                <Grid container sx={{ overflowY: "auto", height: "100%", WebkitScrollSnapType: "both" }}>
                    {array.map((item) => {
                        return (
                            <Grid item lg={12} key={item.id}>
                                < ProjectCardInfos
                                    status={item.status}
                                    name={item.nome}
                                    area={item.area}
                                    deadLine={item.deadline}
                                    duration={item.duration}
                                    tags={item.tags}
                                />
                            </Grid>
                        );
                    })}
                </Grid>

            </Container>
        </Box>
    )
}