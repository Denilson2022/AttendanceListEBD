import styled from "styled-components";
import { Theme } from "../../Theme/Theme";

const BodyBox = styled.div`
padding-top: 2rem;
min-height: 100vh;
gap: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
font-size: 4vw;
color: aliceblue;
background-image: ${Theme.backgrounds.ColorBody};
background: #0c181c

;

form{
  width: 80vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    height: auto;
  }
  input::placeholder {
    font-size: 1rem;
    text-align: center;
  }
  input{
    position: relative;
    width: 100%;
    transform: scaleY(2);
    align-items: center;
}
button{
  transform: scaleY(2);
}
  
}
ul{
    ${Theme.centering}
    list-style: none;
    height: auto;
    margin-block: 0;
    padding-inline-start: 0px;
    gap: 3rem;
    flex-direction: column;
    } 

p{
  font-size: 2rem;
}
`

export default BodyBox
