import React from "react"
import projectList from "../assets/projectList"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import * as layouts from "../layouts"
import { ContainerProps } from "../layouts/style"
import  pics from "../photos/grass4.jpg"
const Image = styled.img<ContainerProps>`
    height:auto;
    width:40%;
    border-radius:20px;
    padding:5px;
    
`
const StyledLink = styled(Link) <ContainerProps>`
    text-decoration:none;
    color:blue;
    padding:0px;
`


const Gallary = (props: { isMobile: boolean }) => {
    if (props.isMobile) {
        return (
            <>
                <layouts.DIV>

                    Click to learn what I have worked on
                    {projectList.map((project, key) => (
                        <layouts.DIV key={key}>
                            <StyledLink to={`/project/${project.name}`} > < h2 >{project.title}</h2> </StyledLink>
                            <layouts.statement mt="0px">{project.overview}</layouts.statement>
                            {project.icons.map((Icon, key) => (
                                <Icon height="40px" width="40px" key={key} />
                            ))}
                        </layouts.DIV>

                    ))}
                </layouts.DIV>
            </>)
    }
    return (
        <>
            <layouts.DIV ml="20px">

                {/* Click to learn what I have worked on */}
                {/* {projectList.map((project, key) => ( */}
                {/* <layouts.flex key={key}> */}
                <layouts.grid alignContent="center" width="100vh">
                    <Image src={pics} alt="" width="90px" p="5" />
                    <Image src={pics} alt="" width="90px"/>

                    <Image src={pics} alt="" width="90px"/>

                    <Image src={pics} alt="" width="90px"/>
                    <Image src={pics} alt="" width="200px"/>

                    {/* <StyledLink to={`/project/${project.name}`} > < h2 color="black">{project.title}</h2> </StyledLink> */}
                    {/* <p>{project.overview}</p>
                        {project.icons.map((Icon, key) => (
                            <Icon height="40px" width="40px" key={key} />
                        ))} */}
                </layouts.grid>

                {/* ) */}
                {/* )} */}
            </layouts.DIV>
        </>)
}


export default Gallary