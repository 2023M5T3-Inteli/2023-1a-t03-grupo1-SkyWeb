import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export function InfoProfile() {
    const { fullName, job, email, location, mobileNumber, phoneNumber } = JSON.parse(sessionStorage.getItem("user"))
    return (
        <Box sx={{}}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: 650 }}>
                <Typography variant="title3">Full Name: <Typography variant="title3" sx={{ fontWeight: 300 }}>{fullName}</Typography> </Typography>
                <Typography variant="title3">Email: <Typography sx={{ fontWeight: 300 }} variant="title3">{email}</Typography> </Typography>
                <Typography variant="title3">Phone: <Typography sx={{ fontWeight: 300 }} variant="title3">{phoneNumber}</Typography> </Typography>
                <Typography variant="title3">Mobile: <Typography sx={{ fontWeight: 300 }} variant="title3">{mobileNumber}</Typography> </Typography>
                <Typography variant="title3">Location: <Typography sx={{ fontWeight: 300 }} variant="title3">{location}</Typography> </Typography>
                <Typography variant="title3">Manager: <Typography sx={{ fontWeight: 300 }} variant="title3"> Pedro Castro</Typography></Typography>
            </Box>
        </Box>
    )
}