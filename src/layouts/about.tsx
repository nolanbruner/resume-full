
import * as layouts from "./"

import * as icons from "../icons"
const about = (props: { color: string }) => {
    return (

        <layouts.DIV width="90%" ml="3vw">
            <layouts.statement p="10px" color={props.color} fontWeight="" fontSize="25px" >
                <h3 >About Me</h3>
                <div>I am a recent graduate of the University of Kentucky where I achieved a B.S. in Computer Science, and minors in Philosophy and Mathmatics. I am currently residing in Louisville, Kentucky and open to relocate.
                </div>
                {/* <layouts.DIV p="10px" pl = "35px" >Degree: B.S. in Computer Science</layouts.DIV>
                <layouts.DIV pl = "35px" p="10px"> College: University of Kentucky </layouts.DIV>
                <layouts.DIV pl = "35px" p="10px">Minors: Mathmatics, Philosophy</layouts.DIV>
                <layouts.DIV pl = "35px">Activities: Hiking, Snowboarding, Golfing, Fishing</layouts.DIV> */}

            </layouts.statement>
            <layouts.statement fontWeight="bold">
            Currently Working with
            </layouts.statement>
            <layouts.grid width="100%" >
                <icons.js width="100px" p="10px" />
                <icons.mongo width="100px" p="10px" />
                <icons.reacticon width="100px" height="100px" />
                <icons.nodejs width="100px" height="100px" p="10px" />
                <icons.html width="100px" p="10px" />
                <a href="https://github.com/"><icons.github width="100px" p="10px" /></a>
                <icons.styled  width="100px" p="10px" />
            </layouts.grid>
            <layouts.statement fontWeight="bold">
            Previously Used
            </layouts.statement>
            <layouts.grid>
                <icons.swift width="100px" p="10px" />
                <icons.java width="100px" p="10px" />
                <icons.php width="100px" p="10px" />
                <icons.gitlab width="100px" p="10px" />
                <icons.jira color={props.color} height="100px" p="10px" />
                <icons.python width="100px" p="10px" />
                <icons.mysql width="100px" p="10px" />
            </layouts.grid>
        </layouts.DIV>

    )
}
export default about