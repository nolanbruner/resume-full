import React from "react"
import projectList from "../projectList"
import styled from "styled-components"
import * as layouts from "../layouts"
import { Link } from "react-router-dom"
import Toolbar from "../Toolbar"
const Pic = styled.img`
border-radius: 50px;
border:2px solid black;
`

const Projects = () => (
    <>
        <Toolbar />
        {projectList.map((project, key) => (
            <Link to={`/project/${project.name}`}>
                < h1 >{project.name}</h1>
                <p>{project.overview}</p>
            </Link>
        ))}
    </>
)


export default Projects