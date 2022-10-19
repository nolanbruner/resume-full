import React from "react";
import Toolbar from "../layouts/Toolbar";
import styled from "@emotion/styled"
import { background, color, LayoutProps } from "styled-system"

const DropdownItem = styled.option`
    background:blue;
`
interface backgroundProps {
    background?: string,
    height?: string,
}
interface themed {
    primary?: string,
    secondary?: string,
}

const Background = styled.div<backgroundProps>`
  ${background}
  ${color}
  height:100vh;
`
const underWater =
{
    primary: "linear-gradient(#2da5ff,#1e1a75,black)",
    secondary: "black",
}

const trippyMoon = {
    primary: "linear-gradient(black,#444444,#999999)",
    secondary: "black",
}
const Themes = () => {
    const [theme, setTheme] = React.useState(underWater as themed);
    const handleChange = (event: any) => {
        setTheme(event.target.value);
    };
    console.log(theme)


    return (
        <Background background={theme.primary} color="white">
            <Toolbar color={theme.secondary} />
            <label>
                Pick a Theme
                {/* <select value={theme.primary} defaultValue="Pick a theme" onChange={handleChange}>
                    <option value={underWater.primary}>Under Water</option>
                    <option value={trippyMoon.primary}>Trippy Moon</option>
                    <option value="red">Meat</option>
                </select> */}
                <button onClick={() => setTheme(underWater as themed)}>Under Water</button>
                <button onClick={() => { setTheme(trippyMoon as themed) }}>Moon</button>
            </label>
            <div >
                <h3>Lorem ipsum </h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            </div>
        </Background>
    );
};
export default Themes