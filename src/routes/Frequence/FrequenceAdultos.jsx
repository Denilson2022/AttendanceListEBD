import React from 'react'
import ButtonsHeaders from '../../components/Button/ButtonsHeaders'
import BodyFrequenceBox from '../../components/Box/BodyFrequenceBox'
import TitleBox from '../../components/Box/TitleBox'

function FrequenceAdultos() {
  return (
    <BodyFrequenceBox>
      <ButtonsHeaders />
      <TitleBox>FREQUÊNCIAS</TitleBox>
        <ul>
          <li>
            <a href="/DatasChamadasAdultos">Frequência por Data</a>
          </li>
          <li>
            <a href="/MatriculadosListaDeChamadasAdultos">Frequência Trimestral</a>
          </li>
        </ul>
    </BodyFrequenceBox>
  )
}

export default FrequenceAdultos