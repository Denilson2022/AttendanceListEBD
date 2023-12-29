import styled from "styled-components"


const DivTopBox = styled.div`
justify-content: space-around;
margin-bottom: 5vw;
padding: 2px;
color: #0c181c;
background-color: #5d9b5d;
box-shadow: 2px 2px 3px #ffffff8d;

li{
    background-color: #9b5d5d;
    background-color: #5d9b5d;
    background-color: #5d5d9b;
    background-color: #0c181c;
    color: white;
    
    text-align: center;
    margin-bottom: 2vw;
}
label{
width: max-content;
}

input{
    margin-right: 10px;
    transform: scale(2.5);
}
input:nth-child(odd){
    margin-left: 50px;
}

`

export default DivTopBox