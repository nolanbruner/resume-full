import React from "react"
import { Link } from "react-router-dom"
import * as layouts from "."
import * as system from "styled-system"
import styled from "@emotion/styled"
import { ContainerProps } from "./style"
const ToolContainer = styled.div<ContainerProps>`
    width: 35vw;
    background-color:white;
    border-radius:45px 10px 0px 0px;
    padding:15px;
    opacity:.8;
    ${system.space}
    ${system.width}
    ${system.layout}
    ${system.backgroundImage}
`
const Buttons = styled(Link) <ContainerProps>`
    text-decoration:none;
    color:transparent;
    width:10vh;
    padding:25px;
    text-align:center;
    border:none;
    background-position:middle;
    font-weight:bold;
    &:hover{
        color:white;
        border-radius:15px;
    }
    ${system.space}
    ${system.width}
    ${system.layout}
`
// const DropDownButton = styled.select<ContainerProps>`
//     width:auto;
//     color:transparent;
//     text-align:center;

//     border:none;
//     font-weight:800;
//     background-image:linear-gradient(to bottom right,orange,purple,blue);
//     background-size:200% 200%;
//     background-clip:text;
//     &:hover{
//         background-clip:padding-box;
//         color:white;
//         border-radius:15px;
//     }
//     ${system.space}
//     ${system.width}
//     ${system.layout}
// `
// const DropDownOption = styled.option<ContainerProps>`
//     text-decoration:none;
//     background-image:linear-gradient(to bottom right,orange,purple,blue);

//     width:10vh;
//     text-align:center;
//     border:none;
//     font-weight:bold;
//     &:hover{
//         background-image:linear-gradient(to bottom right,orange,purple,blue);
//         color:white;
//         border-radius:15px;
//     }
//     ${system.space}
//     ${system.width}
//     ${system.layout}
// `
const ColorBack = styled.div`
    background-image:linear-gradient(to bottom right,orange,purple,blue);
    background-size:200% 200%;
    background-clip:text;
    background-position:middle;
    padding:5px;

    &:hover   {
        background-clip:padding-box;
        color:white;
        border-radius:15px;
    }
    
`
function toolbar(props: { color?: string }) {
    return (
        <ToolContainer mr="10vw" ml="auto">
            <layouts.flex >
                <ColorBack >
                    <Buttons to="/" >Home</Buttons>
                </ColorBack>
               
                <ColorBack>
                    <Buttons to="/projects">Projects</Buttons>
                </ColorBack>
                <ColorBack>
                    <Buttons to="/resume">Resume</Buttons>
                </ColorBack>
                {/* <ColorBack>
                    <Buttons to="/themes">Themes</Buttons>
                </ColorBack> */}
                {/* <DropDownButton p="5px">
                    <DropDownOption value="fruit">Default Theme</DropDownOption>
                    <DropDownOption value="vegetable">Trippy Moon</DropDownOption>
                    <DropDownOption value="meat">Meat</DropDownOption>
                </DropDownButton> */}

            </layouts.flex>
        </ToolContainer>
    )
}
export default toolbar