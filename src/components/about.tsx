
import styled from "@emotion/styled"
import * as layouts from "."

import * as icons from "./icons"

const about = (props: { color: string,iconWidth:string }) => {
    return (

        <layouts.DIV width="90%" ml="3vw" fontFamily="sans-serif">
            <layouts.statement p="10px" pb="0px" color={props.color} fontSize="25px" >
                <h3 >About Me</h3>
                <layouts.statement p="4px">
                    College graduate with extensive programming experience in full-stack applications and a passion for innovation and problem-solving.
                </layouts.statement>
                <layouts.statement p="3px">
                    Looking for a full-time position that will provide practical experience to grow my web-development skills.
                </layouts.statement>
            </layouts.statement>
            <layouts.statement fontWeight="bold" pt="5.4vh">
                Currently Working with
            </layouts.statement>
            <layouts.grid width="100%" >
                <icons.js width={props.iconWidth} p="10px" />
                <icons.mongo width={props.iconWidth} p="10px" />
                <icons.reacticon width={props.iconWidth} height="100px" />
                <icons.nodejs width={props.iconWidth} height="100px" p="10px" />
                <icons.html width={props.iconWidth} p="10px" />
                <a href="https://github.com/"><icons.github width={props.iconWidth} p="10px" /></a>
                <icons.styled width={props.iconWidth} p="10px" />
            </layouts.grid>
            <layouts.statement fontWeight="bold" pt="25px">
                Previously Used
            </layouts.statement>
            <layouts.grid>
                <icons.swift width={props.iconWidth} p="10px" />
                <icons.java width={props.iconWidth} p="10px" />
                <icons.php width={props.iconWidth} p="10px" />
                <icons.gitlab width={props.iconWidth} p="10px" />
                <icons.jira color={props.color} width={props.iconWidth} p="10px" />
                <icons.python width={props.iconWidth} p="10px" />
                <icons.mysql width={props.iconWidth} p="10px" />
            </layouts.grid>
        </layouts.DIV>

    )
}
export default about