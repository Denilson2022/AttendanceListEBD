import React from 'react'
import { DateTimeWeather, MagicSquare, Quadrado, Quadrados } from '../../styles/components'
import WeatherApp from '../../components/WeatherApp'
import DateTime from '../../components/DateTime'
import styled from 'styled-components'


const Main = styled.div`
display: flex;
justify-content: center;
`;

const App = () => {
  return (
    <div className="App" >

      <Main>
        <DateTimeWeather>
          <WeatherApp />
          <DateTime />
        </DateTimeWeather>

        <MagicSquare squareSize={{ Mac: 100, tl: 100, lg: 100, md: 100, sm: 100 }}>
          <Quadrado>
            {/* <Quadrados>
              <a href="/cadastro">CADASTRO</a>
            </Quadrados> */}
            <Quadrados>
              <a href="/checkbox">CHAMADAS</a>
            </Quadrados>
            <Quadrados>
              <a href="/Offerings">OFERTAS</a>
            </Quadrados>
            <Quadrados>
              <a href="/expenses">GASTOS</a>
            </Quadrados>
            <Quadrados>
              <a id='general' href="/dashboard">SALAS</a>
            </Quadrados>
          </Quadrado>

        </MagicSquare>
      </Main>
    </div>
  )
}

export default App