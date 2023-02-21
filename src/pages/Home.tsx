import * as layouts from "../components"
import { default as Toolbar } from "../components/Toolbar"
import { default as About } from "../components/about"
import Projects from "./projectsPage"
import { Outlet } from "react-router-dom";
import Resume from "./resume"


const Home = () => {
    const isMobile = window.innerWidth <= 840;
    if (isMobile) {
        return (
            <>
                    <layouts.Splash maxWidth="100vw">
                        <layouts.Sidebar width="80vw" m="auto"/>
                        <About color="white" iconWidth="60px" />
                        <layouts.Bod m="auto" width="90vw" ><Projects isMobile={isMobile} /></layouts.Bod>
                        <Resume ismobile={isMobile} />
                    </layouts.Splash>
            </>
        )
    }
    return (<>

        <layouts.Splash className="splash" flexDirection="column" >
            <Toolbar ></Toolbar>
            <layouts.Bod m="auto" mr="10vw" >
                <layouts.flex>
                    <layouts.Sidebar width="30%" m="0" />
                    <Outlet />
                </layouts.flex>
            </layouts.Bod>

        </layouts.Splash>
        {/* <layouts.footer /> */}
    </>
    )

}

export default Home;