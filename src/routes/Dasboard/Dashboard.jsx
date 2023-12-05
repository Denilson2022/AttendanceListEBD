import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import Chart from './Chart';


const DivBox = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: #fff;
background-image: linear-gradient(193deg, #FFFFFF 0%, #5f5f5f 16%, #282828 34%, #1d1d1d 62%);
height: 100vh;
justify-content: space-between;
h1{
  color: #f91;
  text-shadow: 2px 2px 2px #222;
  font-size: 3rem;
}
h2{
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px 2px #111;

}

`;

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

const Dashboard = () => {
  return (
    <DivBox>
    <h1>CLASSES</h1>
    <h2>ESCOLA BÍBLICA DOMINICAL</h2>
    <DashboardContainer>

      {/* Criar aqui embaixo rotas dinamicas sem mudar a pegina por completo, 
mas apenas o conteudo */}

      <a href="/adultos">
        <Card title="ADULTOS" value="1000" />
      </a>
      <a href="/jovens">
        <Card title="JOVENS" value="500" />
      </a>
      <a href="/adolescentes">
        <Card title="ADOLESCENTES" value="$50K" />
      </a>
      <a href="/criancas">
        <Card title="CRIANÇAS" value="200" />
      </a>
      <Chart />
    </DashboardContainer>
</DivBox>
  );
};

export default Dashboard;
