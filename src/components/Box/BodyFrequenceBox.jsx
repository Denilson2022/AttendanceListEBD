import styled from "styled-components";
import { Theme } from "../../Theme/Theme";

const BodyFrequenceBox = styled.div`
min-height: 100vh;
gap: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
font-size: 4vw;
color: aliceblue;
background-image: ${Theme.backgrounds.ColorBody};
background: #0c181c;


ul{
    ${Theme.centering}
    list-style: none;
    height: auto;
    margin-block: 0;
    padding-inline-start: 0px;
    gap: 3rem;
    flex-direction: column;
    border: dashed 1px white;
    margin-bottom: 150px;
    padding: 5vh;
    } 
    li{
        background-color: #f91;
        padding: 5vh;
        transition: all .3s;
        &:hover{
            background-color: yellow;
        }
    }
    a{
        color: #0c181c;
        text-decoration: none;
    }

p{
  font-size: 2rem;
}
`

export default BodyFrequenceBox
