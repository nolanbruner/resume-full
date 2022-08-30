import * as layouts from "./layouts"
import { default as Toolbar } from "./toolbar"
import { default as About } from "./about"
import { default as Projects } from "./projects"
const Home = () => {
    return (<>
        <div>welcome to my page</div>
        <Toolbar />
        <div>
            <layouts.statement>GPA</layouts.statement>
            <body>3.313</body>
            <About></About>
            <Projects></Projects>
        </div>
        <layouts.footer />
    </>
    );
}

export default Home;