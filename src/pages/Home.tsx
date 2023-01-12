import * as layouts from "../layouts"
import { default as Toolbar } from "../layouts/Toolbar"
import { default as About } from "../layouts/about"
import Projects from "./projectsPage"
import { Outlet } from "react-router-dom";
import Resume from "./resume"


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
        {/* <layouts.footer /> */}
            </>
    )

}

export default Home;