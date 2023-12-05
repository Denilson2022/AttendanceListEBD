import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #f91;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;

`;

const Title = styled.h2`
  color: #333;
`;

const Value = styled.p`
  color: #555;
  font-size: 1.2em;
  margin-top: 10px;
  text-decoration: none;

`;

const Card = ({ title, value }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </CardContainer>
  );
};

export default Card;
