
import * as layouts from "./"

import * as icons from "../icons"
const about = (props:{color:string}) => {
    return (

        <layouts.DIV width="90%" ml="3vw">
            <layouts.statement p="10px" color={props.color} fontWeight="" fontSize="25px" >
                <h3 >About Me</h3>
                <div>I am a recent graduate of the University of Kentucky where I achieved a B.S. in Computer Science, and minors in Philosophy and Mathmatics.
                    My development experience includes, but is not limited to, creating applications with react, java, and swift. I am currently residing in Louisville, Kentucky and open to relocate.
                </div>
                <h4>Software experience</h4>
            </layouts.statement>
                <layouts.grid width="100%" p="20px">
                    <icons.swift width="150px" height="150px" p="10px" />
                    <icons.js width="150px" height="150px"  p="10px"/>
                    <icons.java width="150px" height="150px" p="10px" />
                    <icons.jira   color={props.color} width="150px" height="150px"  p="10px"/>
                    <icons.mongo width="150px" height="150px"  p="10px"/>
                    <icons.php width="150px" height="150px"  p="10px"/>
                    <icons.reacticon width="150px" height="150px" />
                    <icons.nodejs width="150px" height="150px"  p="10px"/>
                    <icons.html width="150px" height="150px" />

                </layouts.grid>

        </layouts.DIV>

    )
}
export default about