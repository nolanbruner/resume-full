import React from "react";
import styled from "styled-components";
import Toolbar from "../Toolbar";
const DropdownItem = styled.option`
    background:blue;
`
const Background = styled.div`
    background:linear-gradient(#2da5ff,#1e1a75,black);
    height:300vh
`
const Themes = () => {
    const [value, setValue] = React.useState('fruit');
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <Background>
            <Toolbar />
            <label>
                Pick a Theme
                <select value={value} onChange={handleChange}>
                    <DropdownItem value="fruit">Under Water</DropdownItem>
                    <option value="vegetable">Trippy Moon</option>
                    <option value="meat">Meat</option>
                </select>
            </label>

            <p>We eat {value}!</p>
        </Background>
    );
};
export default Themes