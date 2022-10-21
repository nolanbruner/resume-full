import * as system from "styled-system"
import styled from "@emotion/styled"

export interface SVGProps extends system.PositionProps, system.SpaceProps {

    fill?: string

    stroke?: string

    className?: string

    height?: string | number | undefined

    width?: string | number | undefined

    verticalAlign?: string | undefined

    color?: string | undefined


}


export const SVG = styled.svg<SVGProps>`
    
    ${system.layout}
    
    ${system.space}
    
    ${system.position}
    
    ${system.color}
    `