import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

import projectList from "../assets/projectList"
import styled from "styled-components"
import * as layouts from "../layouts"
import NotFoundPage from "./NotFoundPage"
import Toolbar from "../layouts/Toolbar"
import CommentsList from "../layouts/commentsList"
import AddCommentForm from "../layouts/addComment"
import { ContainerProps } from "../layouts/style"
import * as system from "styled-system"
const Pic = styled.img`
    border-radius: 50px;
    border:2px solid black;
`
const ProjectBlock = styled.div<ContainerProps>`
    font-size:20px;
   ${system.space}

`

const Project = (props:{isMobile:boolean}) => {
    const { name } = useParams()
    const project = projectList.find(project => project.name === name);
    const [projectInfo, setProjectInfo] = useState({ upvotes: 0, comments: [{ username: "", text: "" }] });
    const [commentformBool, setCommentformBool] = useState(false);
    useEffect(() => {
        window.scrollTo(0,0);
        setCommentformBool(false)
        const fetchData = async () => {
            const result = await fetch(`/api/projects/${name}`)
            const body = await result.json();
            console.log(body);
            setProjectInfo(body);
        }
        fetchData();

    }, [name]);
    if (!project) return <NotFoundPage />
    if(window.innerWidth<=500) return (
        <>
            <layouts.Splash>
                <layouts.Bod m=" auto"  >
                    <Link to ="/projects">Go Back</Link>
                    <ProjectBlock pl="5vw" pr="5vw">
                        <layouts.center><h1>{project.title}</h1></layouts.center>
                        <b>{project.overview}</b>
                        {project.tech.map((part, key) => (
                            <p key={key}>{part}</p>
                        ))}

                    </ProjectBlock>
                    <CommentsList comments={projectInfo.comments} />
                    <layouts.buttons.primary onClick={() => setCommentformBool(true)}>Add comment</layouts.buttons.primary>
                    {commentformBool ?
                        <AddCommentForm projectName={name} setprojectInfo={setProjectInfo} /> : <></>
                    }
                </layouts.Bod>

                <layouts.otherProjs name={name} />
            </layouts.Splash>
        </>)
        return(<>
            <layouts.Splash>
                <Toolbar />

                <layouts.Bod m=" auto" mr="10vw" >
                    <Link to ="/projects">Go Back</Link>
                    <ProjectBlock pl="15vw" pr="15vw">
                        <layouts.center><h1>{project.title}</h1></layouts.center>
                        <b>{project.overview}</b>
                        {project.tech.map((part, key) => (
                            <p key={key}>{part}</p>
                        ))}

                    </ProjectBlock>
                    <CommentsList comments={projectInfo.comments} />
                    <layouts.buttons.primary onClick={() => setCommentformBool(true)}>Add comment</layouts.buttons.primary>
                    {commentformBool ?
                        <AddCommentForm projectName={name} setprojectInfo={setProjectInfo} /> : <></>
                    }
                </layouts.Bod>

                <layouts.otherProjs name={name} />
            </layouts.Splash>
        </>)
}
export default Project