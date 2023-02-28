import styled from "@emotion/styled"
import * as system from "styled-system"

export interface ContainerProps extends system.PositionProps, system.LayoutProps, system.TypographyProps, system.SpaceProps { }

export interface FlexProps extends ContainerProps, system.FlexProps, system.FlexDirectionProps, system.FlexboxProps, system.BackgroundProps, system.JustifyContentProps { }

const Bod = styled.div<ContainerProps>`
    width:80vw;
    // color: rgba(0,0,0,0.7);
    background-color:rgba(255,255,255,0.85);
    border-radius:10px 0px 10px 10px;
    padding:10px;
	box-shadow: 0px 20px 10px rgba(0, 0, 0, .9);
    ${system.space}
    ${system.width}
    ${system.layout}
    ${system.backgroundImage}
`

const bubble = styled.div<ContainerProps>`
    background-color:white;
    border-radius:30px;
    border:2px solid black;
    padding:10px;
    opacity:1;
    ${system.space}
    ${system.width}
    ${system.layout}
    ${system.backgroundImage}
`
const center = styled.div<ContainerProps>`
    text-align:center;
    ${system.space}
    ${system.width}
    ${system.layout}
    ${system.fontWeight}
`
const flex = styled.div<FlexProps>`
    display:flex;
    vertical-align:center;
    ${system.space}
    ${system.width}
    ${system.layout}
`
const DIV = styled.div<ContainerProps>`
    display:comumn;
    vertical-align:center;
    ${system.space}
    ${system.width}
    ${system.layout}
    ${system.fontWeight}
`
export const grid = styled.div<system.FlexboxProps & ContainerProps>`
    ${system.space}    
    ${system.layout}
    ${system.width}
    ${system.layout}
`
const dropdown = styled.select`
    padding:10px;
    background:blue;
    color: white;
    width:20vw;
    border:none;
    &:hover{
        background:lightblue;
        border-radius:15px;
    }
`
const DropdownItem = styled.option`
    padding:10px;
    background:blue;
    color: white;
    width:20vw;
    border:none;
    &:hover{
        background:lightblue;
    }
`
const statement = styled.div<ContainerProps>`
    font-family:Josefin Sans;
    font-size:20px;
    margin:10px;
    ${system.fontFamily}
    ${system.fontWeight}
    ${system.fontSize}
    ${system.color}
    ${system.fontStyle}
    ${system.space}
 `
const expression = styled.div`
    font:13px;
    font-family:Times New Roman;
    margin:20px
`
export const absolute = styled.div<ContainerProps & system.PositionProps & system.ZIndexProps & system.BackgroundProps>`
	position: absolute;
	${system.zIndex}
	${system.position}
	${system.layout}
	${system.typography}
	${system.space}
	${system.background}
`
export interface SpanProps extends system.PositionProps, system.LayoutProps, system.TypographyProps, system.SpaceProps, system.ColorProps {
    cursor?: string
}
export const span = styled.span<SpanProps>`
	cursor: ${(props) => props.cursor || "inherit"};
	${system.position}
	${system.layout}
	${system.typography}
	${system.space}
	${system.color}
`


export { statement, expression, dropdown, DropdownItem, flex, Bod, center, bubble,DIV }