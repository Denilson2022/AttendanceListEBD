import React from 'react'
import { DateTimeWeather, MagicSquare, Quadrado, Quadrados } from '../../styles/components'
import WeatherApp from '../../components/WeatherApp'
import DateTime from '../../components/DateTime'
import styled from 'styled-components'
import {stylesDisplayHome } from '../../styles/GeneralStyles'


const Main = styled.div`
display: flex;
justify-content: space-around;
font-family: sans-serif;
`;



const App = () => {
  return (
      <Main>
        <DateTimeWeather>
          <WeatherApp />
          <DateTime />
        </DateTimeWeather>

        <MagicSquare squareSize={{ Mac: 100, tl: 100, lg: 100, md: 100, sm: 100 }}>
          <Quadrado>
            <Quadrados>
              <a href="/dasboardattendances">PRESENÇAS</a>
            </Quadrados>
            <Quadrados>
              <a href="/offerings">OFERTAS</a>
            </Quadrados>
            <Quadrados>
              <a href="/expenses">GASTOS</a>
            </Quadrados>
            <Quadrados style={stylesDisplayHome}>
              <a href="/dashboard">ADMINISTRADOR</a>
            </Quadrados>
          </Quadrado>
            
        </MagicSquare>
      </Main>
  )
}

export default App