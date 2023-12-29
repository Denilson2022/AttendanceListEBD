import styled from "styled-components"
import { Theme } from "../../Theme/Theme"


export const DivMagazineBox = styled.div`
${Theme.centering}
//background-color: #000;
padding: 2vw;
margin-bottom: 2vw;

label{
    display: flex;
}
span{
    margin-right: 2vw;
    color: white;
}

input:nth-child(even){
    margin-left: 20px;
}
input:nth-child(odd){
    margin-left: 60px;
}
`
