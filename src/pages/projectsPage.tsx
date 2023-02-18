import React from "react"
import projectList from "../assets/projectList"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import * as layouts from "../components"
import { ContainerProps } from "../components/style"
const StyledLink = styled(Link) <ContainerProps>`
    text-decoration:none;
    color:blue;
    padding:0px;
    &:hover{
        color:purple;
    }
`


const Projects = (props: { isMobile: boolean }) => {
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

                Click to learn what I have worked on
                {projectList.map((project, key) => (
                    <layouts.DIV key={key}>
                        <StyledLink to={`/project/${project.name}`} > < h2 color="black">{project.title}</h2> </StyledLink>
                        <p>{project.overview}</p>
                        {project.icons.map((Icon, key) => (
                            <Icon height="40px" width="40px" key={key} />
                        ))}
                    </layouts.DIV>

                ))}
            </layouts.DIV>
        </>)
}


export default Projects