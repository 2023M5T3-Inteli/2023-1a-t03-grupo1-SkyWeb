import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";

export function Landing() {
    return (
        <Container>
            <Box sx={{}}>
                <Typography variant="h1" sx={{ fontFamily: "Poppins", fontWeight: 700, lineHeight: 1.3 }}>
                    Welcome to Dell Heroes
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: "Poppins", fontWeight: 400, lineHeight: 1.3, marginTop:2, marginBottom:4 }}>
                    Participate on the development of great ideas inside Dell.
                </Typography>
            </Box>

            <Link to="/login" style={{ textDecoration: "none" }}><Button className="home-join" color="cardBackground" sx={{backgroundColor: "dellBlue.main", height: 55, width: 170, padding: 3, fontFamily: "Poppins", fontWeight: 600, fontSize: 12, borderRadius: 1.5, boxShadow:2,  }}>Join a project</Button></Link>
        </Container>
    )
}