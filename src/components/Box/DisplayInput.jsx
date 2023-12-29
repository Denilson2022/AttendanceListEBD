import styled from "styled-components"

const DisplayInput = styled.label`
width: 50vw;
font-size: 5vw;
display: flex;
justify-content: space-around;
align-items: end;
padding-right: 2vh;
span{
    text-shadow: none;

}

input{
    transform: scale(2);
}

label:nth-child(odd){
    color: yellow;
//    text-shadow: 1px 1px 0 #000;
    
}

label:nth-child(even){
    color: #6b0000;
    margin-left: 2vw;
}

`

export default DisplayInput