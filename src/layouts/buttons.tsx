import styled from "@emotion/styled"
import * as system from "styled-system"
export interface ContainerProps extends system.PositionProps, system.LayoutProps, system.TypographyProps, system.SpaceProps { }

const toolbar = styled.div<system.LayoutProps>`
    text-decoration:none;
    padding:10px;
    text-align:center;
    border:none;
    font-weight:bold;
    &:hover{
        background:lightBlue;
        border-radius:15px;
    }
    &:active{
        background:lightBlue;
        border-radius:15px;
    }

    ${system.color}

    ${system.width}
    ${system.height}
    ${system.background}
`
const primary = styled.button<ContainerProps>`
    background:blue;
    color:white;
    border-radius:25px;
    opacity:.8;
    &:hover{
        background:lightblue;
        color:black;
    }
    ${system.fontWeight}
    ${system.fontSize}
    ${system.padding}
    ${system.height}
    ${system.margin}
`
export { toolbar, primary }