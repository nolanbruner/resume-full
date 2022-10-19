import React from "react"
import styled from "@emotion/styled"
import * as system from "styled-system"
import * as containers from "./style"

const Background = styled.img<system.LayoutProps>`
    position: asbolute;
    height: inherit;
    
	opacity: 0.5;
    
    ${system.layout}
`

export function Overlay(props: React.PropsWithChildren<{ className?: string } & containers.ContainerProps & system.FlexProps & system.FlexDirectionProps>): JSX.Element {
    const {
        children,
        ...rest
    } = props
    return (<>
        <containers.flex {...rest}>{children}</containers.flex>
        <containers.absolute zIndex={-1} top="0px" left="0px" width="100vw">
            <Background ></Background>
        </containers.absolute>
    </>)
}
