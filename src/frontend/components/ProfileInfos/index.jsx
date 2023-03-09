import Image from "mui-image";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material"


export function ProfileInfos() {
    return (
        <div>
            <Container sx={{
                direction: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins"
            }}>
                <Grid container sx={{ paddingTop: 5, paddingLeft: 15 }}>
                    <Grid item>
                        <Image style={{ borderRadius: 300 }} src="https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg"
                            height="200px"
                            width="200px"
                            shift="left"
                            distance="100px"
                        />
                    </Grid>
                    <Grid item sx={{ alignItems: "stretch", paddingTop: 8, paddingLeft: 1.5 }}>
                        <Typography sx={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 25, lineHeight: 1.3 }}>Funcionario DELL</Typography>
                        <Typography sx={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 15, lineHeight: 1.3 }}>Software engnier</Typography>
                        <Grid item sx={{ display: "flex", justifyContent: "flex-start", alignItems: "self-start" }}>
                            <img src="https://img.freepik.com/vetores-premium/trofeu-de-ouro-brilhante-com-icone-de-desenho-animado-de-ilustracao-estrela_400474-307.jpg?w=2000" style={{ height: 20, width: 20 }}></img>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 18, lineHeight: 1.3 }}>15º Heroes Ranking</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <Container sx={{ direction: "column", alignItems: "center", justifyContent: "center", fontFamily: "Poppins" }}>

                <Grid sx={{ paddingLeft: 15, paddingTop: 3 }}>
                    <Grid container sx={{ paddingTop: 3 }}>
                        <Grid item>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, lineHeight: 1.3 }}>Full Name :</Typography>
                        </Grid>
                        <Grid item sx={{ paddingLeft: 2 }}>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, lineHeight: 1.3 }}>Aluno INTELI</Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ paddingTop: 3 }}>
                        <Grid item>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, lineHeight: 1.3 }}>Email :</Typography>
                        </Grid>
                        <Grid item sx={{ paddingLeft: 2 }}>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, lineHeight: 1.3 }}>AlunoINTELI@sou.inteli.com</Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ paddingTop: 3 }}>
                        <Grid item>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, lineHeight: 1.3 }}>Phone :</Typography>
                        </Grid>
                        <Grid item sx={{ paddingLeft: 2 }}>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, lineHeight: 1.3 }}>+55 (11) 99929-9220</Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ paddingTop: 3 }}>
                        <Grid item>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, lineHeight: 1.3 }}>Mobile :</Typography>
                        </Grid>
                        <Grid item sx={{ paddingLeft: 2 }}>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, lineHeight: 1.3 }}>+55 (11) 99929-9220</Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ paddingTop: 3 }}>
                        <Grid item>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, lineHeight: 1.3 }}>Location :</Typography>
                        </Grid>
                        <Grid item sx={{ paddingLeft: 2 }}>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, lineHeight: 1.3 }}>Remote Employe - São Paulo, Brazil</Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ paddingTop: 3 }}>
                        <Grid item>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, lineHeight: 1.3 }}>Manager :</Typography>
                        </Grid>
                        <Grid item sx={{ paddingLeft: 2 }}>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, lineHeight: 1.3 }}>Professor INTELI</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}