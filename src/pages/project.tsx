import React from "react"
import { useParams } from "react-router-dom"
import projectList from "../projectList"
import styled from "styled-components"
import * as layouts from "../layouts"
import NotFoundPage from "./NotFoundPage"
import Toolbar from "../Toolbar"
const Pic = styled.img`
border-radius: 50px;
border:2px solid black;
`

const Projects = () => {
    const { name } = useParams()
    const project = projectList.find(project => project.name === name);
    if (!project) return <NotFoundPage />
    return (
        <>
            <Toolbar />
            <h1>{project.title}</h1>
            <b>{project.overview}</b>
            <b>{project.tech}</b>
        </>)
}
export default Projects