import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export function Landing() {
    return (
        <Container>
            <Box sx={{}}>
                <Typography component="h1" sx={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 70, lineHeight: 1.3 }}>
                    Welcome to Dell Heroes
                </Typography>
                <Typography component="p" sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, marginTop: 3, marginBottom: 3 }}>
                    Participate on the Developer of great ideas inside Dell.
                </Typography>
            </Box>

            <Button variant="contained" sx={{ height: 55, width: 170, padding: 3, fontFamily: "Poppins", fontWeight: 600, fontSize: 12, borderRadius: 1.5 }}>Join a project</Button>
        </Container>
    )
}