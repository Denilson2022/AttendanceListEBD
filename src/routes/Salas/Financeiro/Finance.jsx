import React from 'react'

import styled from 'styled-components';
import Card from '../../Dasboard/Card';
import ButtonsHeaders from '../../../components/Button/ButtonsHeaders';
import { Theme } from '../../../Theme/Theme';
import BodyBox from '../../../components/Box/BodyBox';
import TitleBox from '../../../components/Box/TitleBox';


const DashboardContainer = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding: 20px;
h2{
  color: black;
  font-size: 1.5rem;
  text-shadow: none;

}
  a{
    text-decoration: none;
  }
`;



function Finance() {
    return (
        <BodyBox>
            <ButtonsHeaders />
            <TitleBox>FINANCEIRO</TitleBox>
            <DashboardContainer>
                <a href="/ofertasarrecadadas">
                    <Card title="OFERTAS" />
                </a>
                <a href="/expensesadm">
                    <Card title="GASTOS" />
                </a>
            </DashboardContainer>
        </BodyBox>
    )
}

export default Finance