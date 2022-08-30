import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import * as layouts from "./layouts"
function toolbar() {
    return (
        <>
            <Link to="/"><layouts.buttons>Home</layouts.buttons></Link>
            <Link to="/resume"><layouts.buttons>Resume</layouts.buttons></Link>
            <layouts.buttons>Projects</layouts.buttons>
            <layouts.buttons>Activities</layouts.buttons>
        </>)
}
export default toolbar