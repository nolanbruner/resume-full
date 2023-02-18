import React from "react"
import styled from "@emotion/styled"
import * as system from "styled-system"
import * as containers from "./style"
import { ContainerProps } from "./style"

const Background = styled.div<ContainerProps>`
   background-image: linear-gradient(to bottom right,orange,purple,blue);
	// opacity:.9;
	background-size: 150% 150%;  
	
	animation: background 10s infinite alternate;
	@keyframes background{
		0%{background-position:top left}
		100%{background-position:bottom right}
	}
	${system.layout}
	${system.space}
	${system.width}
	`




// const Background2 = styled.div<ContainerProps>`
// 	position: absolute;
// 	// animation: mySecond 7s linear 8s infinite ;
// 	opacity:.3;
// 	background:black;
// 	mix-blend-mode: overlay;
// 	// z-index:-1;
// 	// 	@keyframes mySecond {
// 	// 	0%   {}
// 	// 	100% {transform:rotate(360deg)}
// 	//   }
// 	//   ${system.zIndex}
// `

export function Splash(props: React.PropsWithChildren<{ className?: string } & containers.ContainerProps & system.FlexProps & system.FlexDirectionProps>): JSX.Element {
	const {
		children,
	} = props

	return (<>
		<Background zIndex="-3" width="100%" pt="2vh" pb="5vh" minHeight="100vh">{children}</Background>
		{/* <Background2 zIndex="-2" width="100%" height="100%"><icons.circles.circle4 height="100vh" width="100vw" ></icons.circles.circle4></Background2> */}
		{/* <containers.absolute m="auto"> {children}</containers.absolute> */}

	</>)
}
