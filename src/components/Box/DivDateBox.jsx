import styled from "styled-components"
import { Theme } from "../../Theme/Theme"

const DivDateBox = styled.div`
padding: 0;
margin: 0;
background-image: ${Theme.backgrounds.ColorBody};
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
min-height: 100vh;
gap: 2vh;
ul{
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80vw;
    gap: 4vh 1vh;
    margin-right: 4vh;
}
li{
    background-color: #f91;
    min-height: 8vh;
    min-width: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5vh;
    transition: all;
    &:hover{
        background-color: aliceblue;
    }
    
    a{
        list-style: none;
        text-decoration: none;
        font-size: 1.5rem;
        color: black;
    }
}
h2{
    color: white;
    text-transform: uppercase;
    text-align: center;
    margin: 2vh 0;
}

`

export default DivDateBox