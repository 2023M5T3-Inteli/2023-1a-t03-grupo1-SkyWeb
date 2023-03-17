import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export function InfoProfile() {
    return (
        <Box sx={{}}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: 650 }}>
                <Typography variant="title3">Full Name: <Typography variant="title3" sx={{ fontWeight: 300 }}>Chloe Amber Price</Typography> </Typography>
                <Typography variant="title3">Email: <Typography sx={{ fontWeight: 300 }} variant="title3">chloe.price@dell.com</Typography> </Typography>
                <Typography variant="title3">Phone: <Typography sx={{ fontWeight: 300 }} variant="title3">(239)453-0998</Typography> </Typography>
                <Typography variant="title3">Mobile: <Typography sx={{ fontWeight: 300 }} variant="title3">(51)99757-5432</Typography> </Typography>
                <Typography variant="title3">Location: <Typography sx={{ fontWeight: 300 }} variant="title3">Remote Employee - Brazil, Rio Grande do Sul</Typography> </Typography>
                <Typography variant="title3">Manager: <Typography sx={{ fontWeight: 300 }} variant="title3"> Pedro Castro</Typography></Typography>
            </Box>
        </Box>
    )
}