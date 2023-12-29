import React from 'react'
import ButtonsHeaders from '../../components/Button/ButtonsHeaders'
import BodyFrequenceBox from '../../components/Box/BodyFrequenceBox'
import TitleBox from '../../components/Box/TitleBox'

function FrequenceJovens() {
  return (
    <BodyFrequenceBox>
      <ButtonsHeaders />
      <TitleBox>FREQUÊNCIAS</TitleBox>
        <ul>
          <li>
            <a href="/DatasChamadasJovens">Frequência por Data</a>
          </li>
          <li>
            <a href="/MatriculadosListaDeChamadasJovens">Frequência Trimestral</a>
          </li>
        </ul>


    </BodyFrequenceBox>
  )
}

export default FrequenceJovens