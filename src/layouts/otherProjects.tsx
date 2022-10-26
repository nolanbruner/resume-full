import projectList from "../assets/projectList"
import { Link } from "react-router-dom"
import * as layouts from "../layouts"

const otherProjs = (props: { name?: string }) => {
    const otherProjects = projectList.filter(project => project.name !== props.name);
    if (window.innerWidth <= 500) return (
        <>
            <layouts.center><h3 style={{color:"white"}}>Other Projects</h3></layouts.center>

            <layouts.Bod m="0px" p="auto" width="auto">
            <layouts.grid>
                    {otherProjects.map((project, key) => (
                        <div key={key}>
                            <Link to={`/project/${project.name}`}> < h2 >{project.title}</h2> </Link>
                            <p>{project.overview}</p>
                        </div>
                    ))}
                </layouts.grid>
            </layouts.Bod>


        </>
    )
    return (

        <>
            <layouts.center><h3 style={{color:"white"}}>Other Projects</h3></layouts.center>

            <layouts.Bod m="5px" p="auto" width="97vw">
                <layouts.flex>
                    {otherProjects.map((project, key) => (
                        <layouts.DIV key={key} p="15px" width="20vw">
                            <Link to={`/project/${project.name}`}> < h2 >{project.title}</h2> </Link>
                            <p>{project.overview}</p>
                        </layouts.DIV>
                    ))}
                </layouts.flex>
            </layouts.Bod>


        </>
    )
}


export default otherProjs