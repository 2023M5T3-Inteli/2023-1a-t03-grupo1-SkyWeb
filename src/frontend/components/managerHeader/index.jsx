import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export function ManagerHeader() {
    return (
        <Container sx={{ marginBottom: 5 }}>

            <Typography variant="title1">
                Manager Pannel
            </Typography>
            <Typography variant="subtitle2">
                Approve or Deny projects.
            </Typography>


        </Container>
    )
}