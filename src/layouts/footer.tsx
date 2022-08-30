import styled from "styled-components";
const Foot = styled.div`
background:blue; 
color:white;
`

function footer() {
    return (
        <Foot>
            <h3>Get Connected</h3>
            <div>Nolan Bruner</div>
            <div>Phone: (502)-681-3983</div>
            <div>Email: nwbr227@uky.edu</div>
            <div>Github</div>
            <div>linkedin</div>
        </Foot>
    )
}
export default footer