import React from "react";
import * as system from "styled-system"
import styled from "@emotion/styled"
import gradPhoto from "../assets/gradphoto2.jpg"
import * as layouts from "."
import * as icons from "./icons"

import { download } from "../pages/resume";
import { ContainerProps } from "./style";
const Name = styled.h3<ContainerProps>`
    ${system.fontSize}
    ${system.space}
`
const Role = styled.div<ContainerProps>`
    border-radius:10px;
    background:lightgray;
    padding:5px;
    text-align:center;
    font-weight:500;
    ${system.space}
    ${system.layout}
`
const Image = styled.img`
    height:auto;
    width:100%;
    border-radius:20px;
`
const Side = styled.div<ContainerProps>`
    // background:#F0F0F0;
    background-color:rgba(255,255,255,.8);
    border-radius:20px;
    padding:20px;
    ${system.width}
    ${system.space}
    ${system.layout}
`
const ResumeButton = styled.button<ContainerProps>`
    position: relative;
    color:white;
    font-width:bold;
    z-index: 0;
    height:10vh;
    width: 60%;
    border-radius: 10px;
    overflow: hidden;
    border-radius:15px;

  &:hover{
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        border-radius:15px;
        background-image:transparent;
    }
    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }
    &::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -80%;
		top: -90%;
		width: 250%;
		height: 320%;
		background-repeat: no-repeat;
        background-position:center;
		background-image: linear-gradient(orange,purple,blue);
		animation: rotate 2s linear infinite;
	}
    &::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
        background-image: radial-gradient(ellipse at center, #443501 0%, black 100%);
		border-radius:10px;
	}
    ${system.width}
`

const Hyperlink = styled.a`
    text-decoration:none;
    color:black;
    &:hover{
        color:blue;
    }
`

const Sidebar = (props: { width: string, m: string }) => {

    return (
        <Side width={props.width} m={props.m}>
            <layouts.center>
                <Name fontSize="40px" mt="0px" mb="2vh">Nolan Bruner</Name>
                <Image src={gradPhoto} alt="Profile Picture" />
                <Role mt="3vh">Front-End Developer</Role>
            </layouts.center>
            {/* <layouts.center pt="10px">
                <icons.college width="30px" height="30px" p="5px" />
                <icons.degree width="30px" height="30px" p="5px" stroke="black" />
                <icons.gradebook width="30px" height="30px" p="5px" />
            </layouts.center> */}
            {/* <layouts.center pt="5px">
                <layouts.flex p="3px" pl="10px" pr="0px" > <icons.college width="20px" height="20px" p="0"  /> B.S. CS from University of Kentucky</layouts.flex>
                <layouts.flex p="5px" pl="10px"> <icons.degree  width="20px" height="20px" p="0" pr="5px"stroke="black"/> B.S. Computer Science</layouts.flex>
                <layouts.flex p="5px" pl="10px"> <icons.gradebook  width="20px" height="20px" p="0" pr="5px"/>GPA: 3.31</layouts.flex>
            </layouts.center> */}
            <layouts.statement pt="15px">Get connected</layouts.statement>
            <layouts.center >
                <a href="https://github.com/nolanbruner/" ><icons.github height="30px" width="30px" /></a><a href="https://linkedin.com/in/nolanbruner"><icons.linkedin height="30px" width="30px" /></a><a href="https://facebook.com/nolan.bruner/"><icons.facebook height="30px" width="30px" /></a>
            </layouts.center>
            <Hyperlink href="mailto:nbruner056@gmail.com" > <layouts.flex p="5px" ><icons.mail width="20px" height="20px" /><layouts.DIV pl="4px"> nbruner056@gmail.com</layouts.DIV></layouts.flex></Hyperlink>
            <Hyperlink href="tel:5026813983"> <layouts.flex p="5px"><icons.phone width="20px" height="20px" /><layouts.DIV pl="4px">502-681-3983 </layouts.DIV></layouts.flex></Hyperlink>
            <layouts.flex p="5px"><icons.pin width="20px" height="20px" /><layouts.DIV pl="4px">Louisville, KY</layouts.DIV></layouts.flex>
            <layouts.center pt="30px"><ResumeButton onClick={() => download()}> Download Resume</ResumeButton></layouts.center>

        </Side>
    )


}
export default Sidebar