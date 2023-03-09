import * as React from 'react';
import { Box, Container } from "@mui/system"
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material"


export function Menu(){

    return (
        <AppBar position="absolute" sx={{ backgroundColor: "#0672CB", height: 300, left: 0, display: "flex", justifyContent: "center", transform: "rotate(90deg)"}}>
            <Grid container>
                <Grid item xs={12} sm={5} lg={6}>
                    <Toolbar sx={{ marginLeft: 0 }}>
                        <Typography component="h1" sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 25 }}>
                            Dell Technologies
                        </Typography>
                    </Toolbar>
                </Grid>
            </Grid>

        </AppBar>
    )


}