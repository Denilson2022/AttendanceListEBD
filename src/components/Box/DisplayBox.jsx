import styled from 'styled-components';

const DisplayBox = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
height: auto;
color: black;
background-color: transparent;
border: solid 1px white;
border-radius: 10% 0;
padding: 10px 0;
label{
  font-size: 4vh;
  input{
    width: fit-content;
    margin-left: 8vh;
  }
}
li{
  font-size: 4vh;
  height: auto;
}

&:hover{
  background-color: #5d5d9b;
  background-color: #9b5d5d;
  background-color: #5d9b5d;
  }


button{
  height: 8vh;
  width: 25vw;
  border: none;
  border-radius: 5%;
  background-color: black;
  color: white;
  font-size: 1.3rem;
  &:hover{
    background-color: #444;
    cursor: pointer;
  }
}

`

export default DisplayBox;


