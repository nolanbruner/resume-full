import * as layouts from "../layouts"
import { default as Toolbar } from "../Toolbar"
import { default as About } from "./about"
import { default as Projects } from "./projectsPage"
const Home = () => {
    return (<>
        <div>welcome to my page</div>
        <Toolbar />
        <div>
            <layouts.statement>GPA</layouts.statement>
            <body>3.313</body>
            <About></About>
            
        </div>
        <layouts.footer />
    </>
    );
}

export default Home;