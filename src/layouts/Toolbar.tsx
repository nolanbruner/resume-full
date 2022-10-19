import React from "react"
import { Link } from "react-router-dom"
import * as layouts from "."
import * as system from "styled-system"
import styled from "@emotion/styled"
import { ContainerProps } from "./style"
const ToolContainer = styled.div<ContainerProps>`
width: 50vw;
background-color:white;
border-radius:45px 10px 0px 0px;
padding:10px;
opacity:.8;


${system.space}
${system.width}
${system.layout}
${system.backgroundImage}
`
const Buttons = styled.div<ContainerProps>`
    text-decorations:none;
    // background-image:linear-gradient(to bottom right,orange,purple,blue);
    // background-clip:text;
    // color:transparant;
    font-size:3rem;
    &:hover{
        background:(linear-gradient(to bottom right,orange,purple,blue),.3);
        color:white;
        border-radius:15px;
    }
`
function toolbar(props: { color?: string }) {
    return (
        <ToolContainer mr="10vw" ml="auto">

            <layouts.flex >
                <Buttons><Link to="/" style={{ textDecoration: "inherit" }} >Home</Link></Buttons>
                <layouts.buttons.toolbar color={props.color} width="10vw"><Link to="/resume">Resume</Link></layouts.buttons.toolbar>
                <Link to="/projects"><layouts.buttons.toolbar color={props.color} width="10vw">Projects</layouts.buttons.toolbar></Link>
                <Link to="/themes"><layouts.buttons.toolbar color={props.color} width="10vw">Themes</layouts.buttons.toolbar></Link>

                {/* 
                 <layouts.dropdown>
                <option value="fruit">Under Water</option>
                <option value="vegetable">Trippy Moon</option>
                <option value="meat">Meat</option>
            </layouts.dropdown>  */}

            </layouts.flex>

        </ToolContainer>
    )
}
export default toolbar