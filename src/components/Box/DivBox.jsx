import styled from "styled-components";

const DivBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: auto;
padding: 5vw;
background-color: #111;
color: white;
font-size: 4vh;
transition: all .3s;
border-radius: 5%;
form{
  display: flex;
  gap: 1rem;
  button{
  height: 8vh;
  width: 10vw;
  border-radius: 5%;
  background-color: #000;
  font-size: 2rem;
  color: white;
  border: none;

  &:hover{
    background-color: #444;
    cursor: pointer;
  }
  input{
    transform: scale(2);
    width: 70vw;
  }
  input::placeholder {
      font-size: 2rem; 
  }

  
  }

}
ul{
  gap: .5vw;
}
`

export default DivBox