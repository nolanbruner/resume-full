import React from "react"
import { Link } from "react-router-dom"
import * as layouts from "./layouts"

function toolbar() {
    return (
        <>
            <Link to="/"><layouts.buttons>Home</layouts.buttons></Link>
            <Link to="/resume"><layouts.buttons>Resume</layouts.buttons></Link>
            <Link to="/projects"><layouts.buttons>Projects</layouts.buttons></Link>
            <layouts.buttons>Activities</layouts.buttons>


            <layouts.dropdown>
                <option value="fruit">Under Water</option>
                <option value="vegetable">Trippy Moon</option>
                <option value="meat">Meat</option>
            </layouts.dropdown>


        </>)
}
export default toolbar