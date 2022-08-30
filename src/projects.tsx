import styled from "styled-components"
import * as layouts from "./layouts"
const Pic = styled.img`
border-radius: 50px;
border:2px fade black;
`
const projects = () => {
    return (
        <>
            <Pic src="" alt="Project Image" />
            <layouts.statement>Cafe website</layouts.statement>
            <p>This project used HTML,Bootstap 5.0, mySQL, and PHP to deliver a responsive menu for a fake cafe</p>
            <a href="./cafe.html" />

            <Pic src="" alt="Project Image" />
            <layouts.statement>Virtual Influencer</layouts.statement>
            <p>This project was created in ReactJS and allowed a user to interface with a AI face rendering program to create a virtual model/ Influencer to pose with a product</p>
            <a href="./cafe.html" />
        </>)
}
export default projects