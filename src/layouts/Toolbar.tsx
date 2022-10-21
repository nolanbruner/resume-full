import React from "react"
import { Link } from "react-router-dom"
import * as layouts from "."
import * as system from "styled-system"
import styled from "@emotion/styled"
import { ContainerProps } from "./style"
const ToolContainer = styled.div<ContainerProps>`
    width: 33vw;
    padding:20px;
    background-color:white;
    border-radius:45px 10px 0px 0px;
    padding:10px;
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
    padding:10px;
    text-align:center;
    border:none;
    font-weight:bold;
    &:hover{
        background-clip:padding-box;
        color:white;
        border-radius:15px;
    }
    ${system.space}
    ${system.width}
    ${system.layout}
`
const DropDownButton = styled.select<ContainerProps>`
    width:auto;
    padding:10px;
    color:transparent;
    text-align:center;
    border:none;
    font-weight:bold;
    background-image:linear-gradient(to bottom right,orange,purple,blue);
    background-size:200% 200%;
    background-clip:text;
    &:hover{
        background-clip:padding-box;
        color:white;
        border-radius:15px;
    }
    ${system.space}
    ${system.width}
    ${system.layout}
`
const DropDownOption = styled.option<ContainerProps>`
    text-decoration:none;
    color:blue;
    width:10vh;
    padding:10px;
    text-align:center;
    border:none;
    font-weight:bold;
    &:hover{
        background:transparent;
        color:white;
        border-radius:15px;
    }
    ${system.space}
    ${system.width}
    ${system.layout}
`
const ColorBack = styled.div`
    background-image:linear-gradient(to bottom right,orange,purple,blue);
    background-size:200% 200%;
    background-clip:text;
    &:hover{
        background-clip:padding-box;
        color:white;
        border-radius:15px;
    }
`
function toolbar(props: { color?: string }) {
    return (
        <ToolContainer mr="10vw" ml="auto" pt="20px">
            <layouts.flex >
                <ColorBack>
                    <Buttons to="/" >Home</Buttons>
                </ColorBack>
                <ColorBack>
                    <Buttons to="/resume">Resume</Buttons>
                </ColorBack>
                <ColorBack>
                    <Buttons to="/projects">Projects</Buttons>
                </ColorBack>
                {/* <Buttons to="/themes">Themes</Buttons> */}
                <DropDownButton>
                    <DropDownOption value="fruit">Default Theme</DropDownOption>
                    <DropDownOption value="vegetable">Trippy Moon</DropDownOption>
                    <DropDownOption value="meat">Meat</DropDownOption>
                </DropDownButton>

            </layouts.flex>
        </ToolContainer>
    )
}
export default toolbar