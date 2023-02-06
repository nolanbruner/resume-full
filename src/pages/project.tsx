import { useParams, Link } from "react-router-dom"

import projectList from "../assets/projectList"
import styled from "styled-components"
import * as layouts from "../layouts"
import NotFoundPage from "./NotFoundPage"
import Toolbar from "../layouts/Toolbar"
import React, { useEffect, useState } from "react"
import CommentsList from "../layouts/commentsList"
import AddCommentForm from "../layouts/addComment"
import { ContainerProps } from "../layouts/style"
import * as system from "styled-system"
import * as icons from "../icons"

const ProjectBlock = styled.div<ContainerProps>`
    font-size:20px;
   ${system.space}

`

const Project = (props: { isMobile: boolean }) => {
    const { name } = useParams()
    const project = projectList.find(project => project.name === name);
    const [projectInfo, setProjectInfo] = useState({ upvotes: 0, comments: [{ username: "", text: "" }] });
    const [commentformBool, setCommentformBool] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        // setCommentformBool(false)
        const fetchData = async () => {
            
            const result = await fetch(`/api/projects/${name}`)
        //     .then((result)=> setProjectInfo(result.body.json()))
        //   result.body?  console.log(result.body):console.log("no body")
            // const body = await result.json();
            const body = await result.text()
            console.log("body")
            console.log(body)

            // setProjectInfo(body);
        }
        fetchData();

    }, [name]);
    if (!project) return <NotFoundPage />
    //mobile
    if (window.innerWidth <= 500) return (
        <>
            <layouts.Splash>
                <layouts.Bod m=" auto"  >
                    <Link to="/projects">Go Back</Link>
                    <ProjectBlock pl="5vw" pr="5vw">
                        <layouts.center><h1>{project.title}</h1></layouts.center>
                        <b>{project.overview}</b>
                        {project.tech.map((part, key) => (
                            <p key={key}>{part}</p>
                        ))}

                    </ProjectBlock>
                    {(project.link !== "") ? <a href={project.link}> Click Here to see in action</a> : <></>}
                    {(project.gitLink !== "") ? <a href={project.gitLink}><icons.github /></a> : <></>}
                </layouts.Bod>

                <layouts.otherProjs name={name} />
            </layouts.Splash>
        </>)
    //PC
    return (<>
        <layouts.Splash>
            <Toolbar />

            <layouts.Bod m=" auto" mr="10vw" >
                <Link to="/projects">Go Back</Link>
                <ProjectBlock pl="15vw" pr="15vw">
                    <layouts.center><h1>{project.title}</h1></layouts.center>
                    <b>{project.overview}</b>
                    {project.tech.map((part, key) => (
                        <p key={key}>{part}</p>
                    ))}
                    {(project.link !== "") ? <a href={project.link}> Click Here to See in Action</a> : <></>

                    }
                    {(project.gitLink !== "") ? <a href={project.gitLink}><layouts.flex m="auto"><icons.github height="3vh" /> Click to View Repository</layouts.flex></a> : <></>
                    }
                    <CommentsList comments={projectInfo.comments}/>
                    <AddCommentForm></AddCommentForm>
                </ProjectBlock>
            </layouts.Bod>

            <layouts.otherProjs name={name} />
        </layouts.Splash>
    </>)
}
export default Project