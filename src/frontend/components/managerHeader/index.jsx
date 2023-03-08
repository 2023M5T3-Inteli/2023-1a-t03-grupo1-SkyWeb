import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export function ManagerHeader() {
    return (
        <Container sx={{ marginLeft: 50}}> 
            <Box sx={{}}>
                <Typography component="h1" sx={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 70, lineHeight: 1.3,marginTop:10}}>
                    Manager Pannel
                </Typography>
                <Typography component="p" sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, marginTop: 2, marginBottom: 3 }}>
                   Approve or Deny projects.
                </Typography>
            </Box>

        </Container>
    )
}