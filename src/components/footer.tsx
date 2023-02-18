import styled from "styled-components";
const Foot = styled.div`
    background:blue; 
    color:white;
    text-align:center;
    margin:0px;
`
const HyperLink = styled.a`
    color:white;
    text-decorations:none;
`

function footer() {
    return (
        <Foot>
            <h3>Get Connected</h3>
            <div>Nolan Bruner</div>
            <HyperLink href="tel:5026813983">Phone: (502)-681-3983</HyperLink>
            <div></div>
            <HyperLink>Email: nwbr227@uky.edu</HyperLink>
            <div></div>
            <HyperLink href="">Github</HyperLink>
            <div></div>
            <HyperLink href="">linkedin</HyperLink>
        </Foot>
    )
}
export default footer