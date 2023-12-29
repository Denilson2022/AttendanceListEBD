import React from 'react'
import ButtonsHeaders from '../../components/Button/ButtonsHeaders'
import BodyFrequenceBox from '../../components/Box/BodyFrequenceBox'
import TitleBox from '../../components/Box/TitleBox'

function FrequenceCriancas() {
  return (
    <BodyFrequenceBox>
      <ButtonsHeaders />
      <TitleBox>FREQUÊNCIAS</TitleBox>
        <ul>
          <li>
            <a href="/DatasChamadasCriancas">Frequência por Data</a>
          </li>
          <li>
            <a href="/MatriculadosListaDeChamadasCriancas">Frequência Trimestral</a>
          </li>
        </ul>

    </BodyFrequenceBox>
  )
}

export default FrequenceCriancas