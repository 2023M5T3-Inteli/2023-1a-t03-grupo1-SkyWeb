import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ModalProjectInfo } from '../modalProjectInfo';
import { Box, Container } from '@mui/material';
import { useState } from 'react';


export function ProjectCardInfos({ name, deadLine, area, duration, tags, status }) {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    console.log(open)

    return (
        <Card sx={{ minWidth: 340, maxWidth: 340, marginLeft: 5, marginBottom: 5 }}>

            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ModalProjectInfo
                    nameProject={name}
                    tags={tags}
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga. Veritatis nemo maiores pariatur illum quidem voluptates, suscipit nobis dolore porro rerum molestiae consequuntur error explicabo culpa? Dicta, odio accusamus."

                    status={status}
                    leader="Abner Silva"
                    duration={duration}
                    startDate="29/03/2023"
                    isOpen={open}
                    handleClose={handleClose} />
            </Container>

            <CardActionArea onClick={handleOpen}>

                <CardContent>

                    <Box component="div" sx={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
                        <Typography variant="title3" sx={{ display: "inline-flex", alignItems: 'center' }}>
                            {name}
                        </Typography>
                        <Typography variant="title4" sx={{ marginRight: 1.3, color: "white.main", display: "inline-flex", alignItems: 'center', height: 32, width: 70, justifyContent: "center", borderRadius: 1.5, backgroundColor: "tagOpen.main", boxShadow: 2 }}>
                            {status}
                        </Typography>
                    </Box>

                    <Typography variant="subtitle2" sx={{ color: "deadlinePending.main", lineHeight: 2, marginTop: 1.5 }}>
                        <strong>Deadline: {deadLine} </strong>
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "black.main", lineHeight: 2 }}>
                        <p><strong>Area:</strong> {area} </p>

                        <p><strong>Duration:</strong> {duration} </p>
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3, alignItems: "center" }}>

                        {tags.map((item) => {
                            return (
                                <Typography variant="subtitle2" key={item} sx={{ color: "white.main", display: "flex", alignItems: "center", justifyContent: "center", height: 26, width: 70, textAlign: 'center', borderRadius: 1.5, marginBottom: 0.1, marginTop: 1, backgroundColor: "inteliPurple.main" }}>
                                    {item}
                                </Typography>

                            )
                        })}
                    </Box>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}