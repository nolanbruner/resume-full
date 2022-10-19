import React from "react";
import * as system from "styled-system"
import styled from "@emotion/styled"
import gradPhoto from "../assets/gradphoto2.jpg"
import * as layouts from "../layouts"
import * as icons from "../icons"
import { download } from "../pages/resume";
import { ContainerProps } from "./style";
const Role = styled.div<system.LayoutProps>`
    border-radius:10px;
    background:lightgray;
    padding:5px;
    text-align:center
`
const Image = styled.img`
    height:auto;
    width:100%;
    border-radius:20px;
`
const Side = styled.div<system.LayoutProps>`
    // background:#F0F0F0;
    background-color:rgba(255,255,255,.8);
    border-radius:20px;
    padding:20px;
    ${system.width}
`
const ResumeButton = styled.button<ContainerProps>`
    background-image: linear-gradient(to bottom right,orange,purple,blue);
    background-size:400% 400%;
    font-size:20px;
    color:white;
    border-radius:20px;
    padding:20px;
	animation: background 5s infinite alternate;
	@keyframes background{
		0%{background-position:middle}
		100%{background-position:bottom right}
	}
    ${system.width}
`
const Hyperlink = styled.a`
    text-decorations:none;
    color:black;
    &:onHover{
        color:blue;
    }
`
const Sidebar = (props: { width: string }) => {

    return (
        <Side width={props.width}>
            <layouts.center>
                <Image src={gradPhoto} alt="Profile Picture" />
                <h3>Nolan Bruner</h3>
                <Role>Full-Stack Developer</Role>
            </layouts.center>
            <layouts.expression>Get connected</layouts.expression>
            <layouts.center ><a href="https://github.com/nolanbruner/" ><icons.github height="30px" width="30px" /></a><a href="https://linkedin.com/in/nolanbruner"><icons.linkedin height="30px" width="30px" /></a><a href="https://facebook.com/nolan.bruner/"><icons.facebook height="30px" width="30px" /></a></layouts.center>
            <layouts.flex p="5px"><Hyperlink href="mailto:nbruner056@gmail.com" ><icons.mail width="20px" height="20px" />nbruner056@gmail.com</Hyperlink></layouts.flex>
            <layouts.flex p="5px"><Hyperlink href="tel:5026813983"><icons.phone width="20px" height="20px" />502-681-3983 </Hyperlink></layouts.flex>
            <layouts.flex p="5px"><icons.calander width="20px" height="20px" />September 22,1999</layouts.flex>
            <layouts.flex p="5px"><icons.pin width="20px" height="20px" />Louisville, KY</layouts.flex>
            <layouts.center><ResumeButton onClick={() => download()}>Download Resume</ResumeButton></layouts.center>

        </Side>
    )


}
export default Sidebar