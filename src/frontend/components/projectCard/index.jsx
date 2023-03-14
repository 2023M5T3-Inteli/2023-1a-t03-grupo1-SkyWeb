import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { flexbox, Box } from '@mui/system';

export function ProjectCardInfos({ name, deadLine, area, duration, tags, status }) {
    return (
        <Card sx={{ minWidth: 345, maxWidth: 345, marginLeft: 5, marginBottom: 5 }}>
            <CardActionArea>

                <CardContent>

                    <Box sx={{ position: flexbox, height: 32, width: 40, fontFamily: "Poppins", fontWeight: 600, fontSize: 12, textAlign: 'center', borderRadius: 1.5, marginLeft: 34, marginBottom: -2, backgroundColor: "green" }}>
                        {status}
                    </Box>

                    <Typography gutterBottom variant="title3">
                        {name}
                    </Typography>
                    <Typography variant="h6" color="green" sx={{ fontFamily: "Poppins", fontWeight: 50, fontSize: 15, lineHeight: 1.3, marginTop: 1, color: "#C2A746" }}>
                        <strong>Deadline: </strong>{deadLine}
                    </Typography>
                    <Typography variant="h6" color="black" sx={{ fontFamily: "Poppins", fontWeight: 50, fontSize: 15, lineHeight: 1.3, marginTop: 1.5, marginBottom: 1 }}>
                        <p><strong>Area:</strong> {area} </p>

                        <p><strong>Duration:</strong> {duration} </p>
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3, alignItems: "center" }}>

                        {tags.map((item) => {
                            return (
                                <Box key={item} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: 25, width: 70, fontFamily: "Poppins", fontWeight: 600, fontSize: 12, textAlign: 'center', borderRadius: 1.5, marginBottom: -1, backgroundColor: "#855EDE", color: 'white' }}>
                                    {item}
                                </Box>

                            )
                        })}
                    </Box>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}