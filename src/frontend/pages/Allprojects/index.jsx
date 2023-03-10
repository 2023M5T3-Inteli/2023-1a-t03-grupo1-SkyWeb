import * as React from 'react';
import { Typography } from "@mui/material";
import { Filter } from "../../components/filter"
import { Menu } from "../../components/menu";
import { ActionAreaCard } from "../../components/projectCard"



export function Allprojects() {

    const array = [{ status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "C++ ", "PHP"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }]


    return (
        <div style={{ display: "flex" }}>
            <div style={{ height: "300px" }}>
                <Menu userName="Chloe Price " userRole="Developer" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>

                <div id="title" style={{ paddingLeft: "50px", paddingTop: "20px" }}>
                    <h1 style={{ fontFamily: "Poppins", fontSize: "30px" }}>All projects</h1>
                    <h3>Find a project that fits to you and apply!</h3>
                </div>

                <Filter />

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", overflowY: "scroll", width: "950px", height: "385px" }} >
                    {array.map((item) => {
                        return (
                            <ActionAreaCard status={item.status} name={item.nome} area={item.area} deadLine={item.deadline} duration={item.duration} tags={item.tags} />
                        )
                    })}

                </div>

            </div>

        </div>
    )
}