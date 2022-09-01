import styled from "styled-components"

const buttons = styled.div`
    padding:10px;
    background:blue;
    color: white;
    width:20vw;
    border:none;
    &:hover{
        background:lightblue;
    }
`
const dropdown = styled.select`
    padding:10px;
    background:blue;
    color: white;
    width:20vw;
    border:none;
    &:hover{
        background:lightblue;
    }
`
const DropdownItem = styled.option`
    padding:10px;
    background:blue;
    color: white;
    width:20vw;
    border:none;
    &:hover{
        background:lightblue;
    }
`
const statement = styled.h3`
    font-family:Ariel;
    margin:10px;
 `
const expression = styled.p`
    font:13px;
    font-family:Times New Roman;
    margin:20px
`


export { buttons, statement, expression,dropdown,DropdownItem }