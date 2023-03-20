import { Grid, Typography, Box } from "@mui/material";

function BallsSkils({ qntBall }) {

    if (qntBall == 1) {
        return (
            <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
            </Box>
        )
    }

    if (qntBall == 2) {
        return (
            <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
            </Box>
        )
    }

    if (qntBall == 3) {
        return (
            <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
            </Box>
        )
    }

    if (qntBall == 4) {

        return (
            <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
            </Box>
        )
    }

    if (qntBall == 5) {
        return (
            <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "inteliPurple.main", width: 15, height: 15 }}></Box>
            </Box>
        )
    }

    if (qntBall == 0) {
        return (
            <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
                <Box sx={{ borderRadius: 10, backgroundColor: "doneInactive.main", width: 15, height: 15 }}></Box>
            </Box>
        )
    }



}

export function SkilsProfile() {


    const data = [{ tag: "python", level: 5 }, { tag: "CSS", level: 4 }, { tag: "HTML", level: 3 }, { tag: "JAVA", level: 2 }, { tag: "SCRUM", level: 0 }]

    return (
        <Box>
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="title2">Skills</Typography>
            </Box>
            <Box>
                <Grid container spacing={0.2}>
                    {data.map((item) => {
                        return (
                            <Grid sx={{ display: "flex", marginBottom: 3 }} item lg={6} key={item.tag}>
                                <Box sx={{ width: 50 }}>
                                    <Typography variant="text1" sx={{}}>{item.tag}</Typography>
                                </Box>
                                <BallsSkils qntBall={item.level} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
    )
}