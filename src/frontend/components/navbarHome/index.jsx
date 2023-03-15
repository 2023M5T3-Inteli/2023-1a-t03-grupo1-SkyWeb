import { Box, Container } from "@mui/system"
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material"

export function NavbarHome() {
    return (
        <AppBar position="relative" sx={{ backgroundColor: "#0672CB", height: 100, display: "flex", justifyContent: "center" }}>
            <Grid container>
                <Grid item xs={12} sm={5} lg={6}>
                    <Toolbar sx={{ marginLeft: 10 }}>
                        <Typography component="h1" sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 25 }}>
                            Dell Technologies
                        </Typography>
                    </Toolbar>
                </Grid>

                <Grid item xs={12} sm={8} lg={6} >
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between", marginRight: 10 }}>
                        <Typography component="a" sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, cursor: "pointer" }}>
                            Home
                        </Typography>
                        <Typography component="a" sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, cursor: "pointer" }}>
                            About
                        </Typography>
                        <Typography component="a" sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, cursor: "pointer" }}>
                            Projects
                        </Typography>
                        <Typography component="a" sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, cursor: "pointer" }}>
                            Recognition
                        </Typography>
                        <Typography component="a" sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: 18, cursor: "pointer" }}>
                            FAQ
                        </Typography>

                        <Button variant="" sx={{ color: "white", borderColor: "white", padding: 1.3, borderRadius: 1.5 }}>
                            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, fontSize: 13 }}>
                                Start Applying
                            </Typography>
                        </Button>
                    </Toolbar>

                </Grid>


            </Grid>

        </AppBar>
    )
}