import * as React from 'react';
import {  } from "@mui/material";
import { Filter } from "../../components/filter"
import { ImageAvatars } from "../../components/perfil";

export function Allprojects(){

    return (
        <div>
            <div id="title" style={{ paddingLeft: "300px", paddingTop:"20px", fontFamily: "Poppins" }}>
                <h1>All projects</h1>
                <h3>Find a project that fits to you and apply!</h3>
            </div>

            <Filter/>
        </div>
    )
}