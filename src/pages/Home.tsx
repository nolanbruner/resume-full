import * as layouts from "../layouts"
import { default as Toolbar } from "../layouts/Toolbar"
import { default as About } from "../layouts/about"
import { ContainerProps } from "../layouts/style"
import styled from "@emotion/styled"
import * as system from "styled-system"
import gradPhoto from "../assets/gradphoto2.jpg"
import Projects from "./projectsPage"
import { Outlet } from "react-router-dom";
import Resume from "./resume"

interface props extends ContainerProps {

}

const Home = () => {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
        return (
            <>
                <layouts.Splash>
                    <layouts.Sidebar width="90vw" />
                    <About color="white" />
                    <layouts.Bod width="95vw" ><Projects isMobile={isMobile}/></layouts.Bod>
                    <Resume  ismobile={isMobile} />
                </layouts.Splash>
            </>
        )
    }
    return (<>

        <layouts.Splash className="splash" flexDirection="column" >
            <Toolbar ></Toolbar>
            <layouts.Bod m="auto" mr="10vw" >
                <layouts.flex>
                    <layouts.Sidebar width="30%" />
                    <Outlet/>
                </layouts.flex>
            </layouts.Bod>

        </layouts.Splash>
    </>
    )



    {/* 
        <layouts.Splash >
            <layouts.center >welcome to my page</layouts.center>
            <Toolbar color="blue" />
            <layouts.Bod m="auto" mr="10vw" >
                <layouts.flex >
                    <layouts.Sidebar width="40vw" />
                    <About color = "black"></About>
                </layouts.flex>
            </layouts.Bod>
        </layouts.Splash> */}

    // </>
    // );

}

export default Home;