import styled from "styled-components"
import { Theme } from "../../Theme/Theme"


export const DivBibleBox = styled.div`
${Theme.centering}
//background-color: #000;
padding: 2vw;
margin-bottom: 2vw;

label{
    display: flex;
}
span{
    color: white;
    margin-right: 2vw;

}

input:nth-child(even){
    margin-left: 40px;
}
input:nth-child(odd){
    margin-left: 60px;
}

`