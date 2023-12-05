import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 400px;
  background-color: #fff;
`;

const Title = styled.h2`
  color: #333;
`;

const Chart = () => {
  // Aqui você pode adicionar a lógica para renderizar um gráfico (por exemplo, usando Chart.js ou D3.js)
  return (
    <ChartContainer>
      <Title><a href="/">HOME</a></Title>
      {/* Adicione o componente de gráfico aqui */}
      <p>Chart Goes Here</p>
    </ChartContainer>
  );
};

export default Chart;
