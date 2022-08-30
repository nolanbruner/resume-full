import styled from "styled-components"

const buttons = styled.button`
    padding:10px;
    background:blue;
    color: white;
    width:25vw;
    border:none;
    &:hover{
        background:lightblue;
    }
`
const statement = styled.h3`
    font-family:Ariel;
`

export { buttons, statement }