import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

export function ModalCreateProject({ nameProject, tags, description, status, leader, startDate, duration, _open }) {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }



    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >

                <Grid container sx={{ display: "flex", justifyContent: "center", marginTop: "10%", position: "relative" }}>
                    <Box 

                    sx={{ display: "flex", flexDirection:"column", width: 550, height: 400, backgroundColor: "#EDEDED", padding: 5, borderRadius: 3 }}>
                    <Typography variant="title2" color="dellBlue.main">
                        Project Registration
                    </Typography>

                    <Typography variant="subtitle2">
                        Preenche aí com os dados lek eh isso fé tmj cria
                    </Typography>

                    <Typography variant="title3" sx={{ paddingTop:3}}>
                        Project Infos
                    </Typography>

                    <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: 'repeat(3, 1fr)',
                    gridTemplateAreas: `
                        'a a b b'
                        'c d e e'
                        'f f f f'
                    `,
                    }}>
                        <div sx={{ gridArea: 'a' }}>a</div>
                        <div sx={{ gridArea: 'b' }}>b</div>
                        <div sx={{ gridArea: 'c' }}>c</div>
                        <div sx={{ gridArea: 'd' }}>d</div>
                        <div sx={{ gridArea: 'e' }}>e</div>
                        <div sx={{ gridArea: 'f' }}>f</div>
                    </Box>


                    <Typography variant="title3" sx={{ paddingTop: 3 }}>
                        Application Infos
                    </Typography>

                    </Box>
                </Grid>
                
            </Modal>
        </div>
    )
}