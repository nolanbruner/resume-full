import * as layouts from "../layouts"
import { default as Toolbar } from "../layouts/Toolbar"
import { default as About } from "../layouts/about"
import Projects from "./Gallary"
import { Outlet } from "react-router-dom";
import AboutUs from "./aboutUs"


const Home = () => {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
        return (
            <>
                <layouts.Splash>
                    <layouts.Sidebar width="90vw" />
                    <About color="white" />
                    <layouts.Bod width="95vw" ><Projects isMobile={isMobile} /></layouts.Bod>
                    <AboutUs ismobile={isMobile} />
                </layouts.Splash>
            </>
        )
    }
    return (<>

        <layouts.Splash className="splash" flexDirection="column" pb="0" height="60vh" >
            <Toolbar ></Toolbar>
            <layouts.Bod m="auto" mt="3vh"  >
                <layouts.flex>
                    {/* <layouts.Sidebar width="30%" /> */}
                    <Outlet />
                </layouts.flex>
            </layouts.Bod>

        </layouts.Splash>
        <layouts.footer />
    </>
    )

}

export default Home;