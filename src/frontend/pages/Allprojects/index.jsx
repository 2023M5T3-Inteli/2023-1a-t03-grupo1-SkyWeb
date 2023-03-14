import * as React from 'react';
import { Grid, Typography } from "@mui/material";
import { Filter } from "../../components/filter"
import { ProjectCardInfos } from "../../components/projectCard"


export function Allprojects() {

    const array = [
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java"],
            id: 1,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 2,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 3,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 4,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 5,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 6,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 7,
        },
        {
            status: "Open",
            nome: "teste card",
            deadline: "02/08/23",
            area: "Finance",
            duration: "3 Months",
            tags: ["Java", "Python", "Ruby"],
            id: 8,
        },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                <div id="title" style={{ paddingLeft: "50px", paddingTop: "20px" }}>
                    <h1 style={{ fontFamily: "Poppins", }}>All projects</h1>
                    <h3>Find a project that fits to you and apply!</h3>
                </div>
                <Filter />
            </div>

            <Grid container direction="row" spacing={2}>

                {array.map((item) => {
                    return (
                        <Grid item lg={4} key={item.id}>
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