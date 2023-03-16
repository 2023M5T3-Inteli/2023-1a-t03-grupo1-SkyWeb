import * as React from 'react';
import { Container, Grid, Typography } from "@mui/material";
import { Filter } from "../../components/filter"
import { ProjectCardInfos } from "../../components/projectCard"
import { ModalProjectInfo } from '../../components/modalProjectInfo';
import { Box } from '@mui/system';


export function Allprojects() {

    const array = [
        {
            status: "Open",
            nome: "projectName",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java"],
            id: 1,
        },
        {
            status: "Open",
            nome: "teste card 2",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 2,
        },
        {
            status: "Open",
            nome: "teste card 3",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 3,
        },
        {
            status: "Open",
            nome: "teste card 4",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 4,
        },
        {
            status: "Open",
            nome: "teste card 5",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 5,
        },
        {
            status: "Open",
            nome: "teste card 6",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 6,
        },
        {
            status: "Open",
            nome: "teste card 7",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 7,
        },
        {
            status: "Open",
            nome: "teste card 8",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 8,
        },

        {
            status: "Open",
            nome: "teste card 8",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 9,
        },
    ];

    return (
        <div>
            <Box sx={{ marginLeft: "13.5%", padding: 1 }}>

                <Typography variant='title1'>All projects</Typography>
                <Typography variant='subtitle2'>Find a project that fits to you and apply!</Typography>

            </Box>

            <Box sx={{ marginLeft: "12%" }}>
                <Filter />
            </Box>

            <Grid container sx={{ display: "flex", justifyContent: "center" }} direction="row" spacing={1} columnSpacing={0}>


                {array.map((item) => {
                    return (
                        <Grid item lg={3.1} key={item.id}>
                            < ProjectCardInfos
                                status={item.status}
                                name={item.nome}
                                area={item.area}
                                deadLine={item.deadline}
                                duration={item.duration}
                                tags={item.tags}
                            />
                        </Grid>
                    );
                })}

            </Grid>


        </div>
    )
}