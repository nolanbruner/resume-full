import React, { useState } from "react"
import * as layouts from "../layouts"
import feelings from "../assets/feelings"
import Toolbar from "../layouts/Toolbar"
const emotions = () => {
    const [emotion, setEmotion] = useState("")
    return (
        <>
            <Toolbar />
            <layouts.buttons.primary >
                depression
            </layouts.buttons.primary>
            <layouts.buttons.primary>
                anxiety
            </layouts.buttons.primary>
            <layouts.buttons.primary>
                worry
            </layouts.buttons.primary>
            <layouts.footer />
        </>
    )
}
export default emotions