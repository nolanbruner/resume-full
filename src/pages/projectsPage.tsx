import React from "react"
import projectList from "../assets/projectList"
import styled from "@emotion/styled"
import * as system from "styled-system"
import { Link } from "react-router-dom"
import Toolbar from "../layouts/Toolbar"
import * as layouts from "../layouts"

const Projects = () => {
    return (
        <>

            <ul>
               Click to learn what I have worked on
                {projectList.map((project, key) => (
                    <li key={key}>
                        <Link to={`/project/${project.name}`} > < h2 color="black">{project.title}</h2> </Link>
                        <p>{project.overview}</p>
                    </li>

                ))}
            </ul>
        </>)
}


export default Projects