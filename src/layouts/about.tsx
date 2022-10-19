
import { opacity } from "styled-system"
import * as layouts from "."
import gradphoto from "../assets/gradphoto2.jpg"
import styled from "@emotion/styled";
import * as system from "styled-system"
import * as icons from "../icons"
const about = (props:{color:string}) => {
    return (

        <>
            <layouts.statement p="10px" color="red">
                <h3 >About Me</h3>
                <div>I am a recent graduate of the University of Kentucky where I achieved a B.S. in Computer Science, and min ors in philosophy and Mathmatics.
                    My development experience includes but is not limited to creating applications with react, java, and swift. I am currently residing in Louisville, Kentucky and open to relocate.
                </div>
                <h4>Software experience</h4>
                <layouts.grid>
                    {/* <icons.nodejs width="250px" height="250px" /> */}
                    <icons.swift width="150px" height="150px" />
                    <icons.js width="150px" height="150px" />
                    <icons.java width="150px" height="150px" />
                    <icons.jira width="150px" height="150px" />
                    <icons.mongo width="150px" height="150px" />
                    <icons.php width="150px" height="150px" />
                    <icons.reacticon width="150px" height="150px" />
                    <icons.nodejs width="150px" height="150px" />
                    <icons.reacticon width="150px" height="150px" />

                </layouts.grid>

            </layouts.statement>
        </>

    )
}
export default about