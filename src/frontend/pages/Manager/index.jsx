import { Box, Typography } from "@mui/material";
import { Container, } from "@mui/system";
import Image from "mui-image"
import { ManagerHeader } from "../../components/managerHeader";
import { ActionAreaCard } from "../../components/projectCard";
import { ContainerPending } from "../../components/containerPending";
import { ContainerApproved } from "../../components/containerApproved";
import { ContainerDennied } from "../../components/containerDennied";
import { Menu } from "../../components/menu/menu";


export function Manager() {
    const array = [{ status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Javasdadakdnajdhaudhaudaudaudau"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] },]

    
    return (
      <div>
        <Menu userName="Chloe Price " userRole="Developer" />
        <ManagerHeader />
        <Box sx={{ marginLeft: 50 }}>
          <Typography
            component="p"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 800,
              fontSize: 30,
              marginTop: 2,
              marginBottom: 2,
              color: "#C2A746",
            }}
          >
            Pending
          </Typography>
        </Box>

        <ContainerPending />
        <Box
          sx={{ display: "flex", flexDirection: "column", flexFlow: "wrap" }}
        >
          <Box sx={{}}>
            <Box sx={{ marginLeft: 50 }}>
              <Typography
                component="p"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: 30,
                  marginTop: 2,
                  marginBottom: 2,
                  color: "green",
                }}
              >
                Approved
              </Typography>
            </Box>
            <ContainerApproved />
          </Box>
          <Box sx={{ flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", marginLeft: 33 }}>
              <Typography
                component="p"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: 30,
                  marginTop: 2,
                  marginBottom: 2,
                  color: "red",
                }}
              >
                Dennied
              </Typography>
            </Box>
            <Box sx={{ marginLeft: -20 }}>
              <ContainerDennied />
            </Box>
          </Box>
        </Box>
      </div>
    );
}