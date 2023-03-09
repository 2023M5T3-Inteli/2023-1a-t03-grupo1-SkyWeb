import * as React from 'react';
import { Typography } from "@mui/material";
import { Filter } from "../../components/filter"
import { Menu } from "../../components/menu";
export function Allprojects(){

    return (
        <div style={{ display: "flex" }}>
            <Menu/>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
                <div id="title" style={{ paddingLeft:"50px", paddingTop: "20px" }}>
                    <h1 style={{ fontFamily: "Poppins",  }}>All projects</h1>
                    <h3>Find a project that fits to you and apply!</h3>
                </div>
                <Filter />
            </div>

            
        </div>
    )
}