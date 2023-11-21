import styled from "styled-components";
const Foot = styled.div`
    background:blue; 
    color:white;
    text-align:center;
    margin:0px;
    padding-top:10px;
    padding-bottom:20px;

`
const HyperLink = styled.a`
    color:white;
    text-decorations:none;
`

function footer() {
    return (
        <Foot>
            <h3>Call for more information</h3>
            <div></div>
            <HyperLink href="tel:5134301994">Phone: (513)-430-1994</HyperLink>
            <div></div>
            {/* <HyperLink>Email: nwbr227@uky.edu</HyperLink> */}
            <div></div>
            {/* <HyperLink href="">Github</HyperLink>
            <div></div>
            <HyperLink href="">linkedin</HyperLink> */}
        </Foot>
    )
}
export default footer