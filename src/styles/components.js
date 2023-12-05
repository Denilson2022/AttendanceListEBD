import styled, { css } from "styled-components";
import { breakpoints } from "./responsive";


export const DateTimeWeather = styled.div`
position: absolute;
display: flex;
justify-content: space-around;
align-items: center;
height: 15vh;
width: 80%;

`


export const MagicSquare = styled.div`

display: flex;
align-items: center;
justify-content: center;
border: solid 2px black;
background-color: #fff;
background-image: linear-gradient(163deg, #FFFFFF 0%, #5f5f5f 22%, #282828 44%, #1d1d1d 82%);


${({ squareSize }) => {
        return responsiveProp(
            squareSize, (breakpoint) => css`
  width: calc( ${squareSize[breakpoint.name]}vw); 
  height: calc(${squareSize[breakpoint.name]}vh); 
  `
        )
    }}
`


export default function responsiveProp(prop, callback) {
    if (prop) {
        return breakpoints.map((breakpoint) => {
            if (prop[breakpoint.name]) {
                return css`
                @media (max-width: ${breakpoint.media}vw){
                     ${callback(breakpoint)} 
                }
               

                `
            }
        })
    }

}


export const Quadrado = styled.div`

display: flex;
flex-direction: column;
gap: 6vh;

align-items: center;
justify-content: center;
border: solid 2px black;
background-color: #000;
height: 70vh;
width: 60vw;
border-radius: 5%;
box-shadow: 1px 1px 5px rgba(150, 154, 227, 0.424);
   a{
        text-decoration: none;
        color: #222;
    }
`

export const Quadrados = styled.div`

display: flex;
align-items: center;
justify-content: center;
font-size: 4vw;
font-weight: bolder;
letter-spacing: 1vw;
height: 8vh;
width: 50vw;
border: 3px solid rgba(19, 19, 19, 0.668);
border-radius: 5%;
background-color: #f91;
transition: ease .3s;

& > #general {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4vw;
    font-weight: bolder;
    letter-spacing: 1vw;
    height: 8vh;
    width: 50vw;
    border: 3px solid white;
    border-radius: 5%;
    transition: ease .3s;

    &:hover{
        background-color: yellowgreen;
        color: black;
        border: none;

    }

    }


&:hover{
    color: black;
    background-color: yellow;
    border: 3px solid yellow;


}
`
