import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ButtonLogOut from '../../../components/Button/ButtonLogOut'
import AuthButton from '../../../components/Button/AuthButton'
import ButtonsHeaders from '../../../components/Button/ButtonsHeaders'



const DivBox = styled.div`
background-color: #fff;
background-image: linear-gradient(193deg, #FFFFFF 0%, #5f5f5f 16%, #282828 34%, #1d1d1d 62%);
color: #f91;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 100vh;
h1{
  display: flex;
  align-items: center;
  justify-content: center;
  a{
  background-color: white;
  height: 10vh;
  padding: 2vw 35vw 0 40vw;
  &:hover{
    background-color: #999;
  }
}}
`
const DivSubBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 100%;
gap: 2vw;
  h2{
  height: 20vh;
  background-color: #f91;
border-radius: 5%;

  width: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover{
    background-color: yellow;
  }
}
a{
  text-decoration: none;
  color: black;
  font-weight: bolder;
  text-shadow: 2px 2px 2px #ffffff88;
}
`

function Adultos() {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };
  
  return (
    <DivBox>
      <ButtonsHeaders/>
        <h1>
          SALA DOS ADULTOS
        </h1>
      <DivSubBox>
        <h2><a href="/cadastroadultos">CADASTRO DOS ADULTOS</a></h2>
        <h2><a href="/chamadasadultos">CHAMADA ADULTOS</a></h2>
        <h2><a href="/MatriculadosListaDeChamadasadultos">MATRICULADOS E LISTA DE PRESENÇA</a></h2>
      </DivSubBox>

    </DivBox>
  )
}

export default Adultos


