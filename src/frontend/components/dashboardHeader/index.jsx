import { Button, Typography, useThemeProps } from "@mui/material";
import { Box, Container } from "@mui/system";

export function DashboardHeader(props) {
    return (
        <Container sx={{ marginBottom: 5 }}>

            <Typography variant="title1">
                Welcome, Chloe!
            </Typography>
            <Typography variant="subtitle2">
                This is your dashboard.
            </Typography>


        </Container>
    )
}