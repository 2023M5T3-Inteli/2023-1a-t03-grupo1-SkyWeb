import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "mui-image";
import profilePhoto from "../../public/profile.png"

export function ProfileHeader() {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box>
                <Image
                    src={profilePhoto}
                    width="110%"
                    shift="right"
                    shiftDuration={700}
                    distance="100px"
                >

                </Image>
            </Box>
            <Box>
                <Typography variant="title1">Chloe Price</Typography>
                <Typography variant="subtitle1">Software Engineer I</Typography>
                {/*Component de Ranking*/}
            </Box>
        </Box>
    )
}