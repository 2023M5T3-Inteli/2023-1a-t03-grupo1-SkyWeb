import { Box, Typography } from "@mui/material"

export function RigthHeaderProfile() {
    return (
        <Box>
            <Typography variant="title2" sx={{ padding: 5, }}>Projects</Typography>

            <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="subtitle2" color="inteliPurple.main">2</Typography>
                    <Typography variant="text3">Working</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="subtitle2" color="inteliPurple.main">7</Typography>
                    <Typography variant="text3">Finished</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="subtitle2" color="inteliPurple.main">5</Typography>
                    <Typography variant="text3">Applying</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="subtitle2" color="inteliPurple.main">1</Typography>
                    <Typography variant="text3">Leading</Typography>
                </Box>
            </Box>
        </Box>
    )
}