import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  `;

const TimeNumber = styled.p`
  
  position: relative;
  display: flex;
  align-items: center;
  height: 7vw;
  font-size: 4.5vw;
  font-family: 'Arial', sans-serif;
  span
  {
    color: white;
  }
    
`;


const DateNumber = styled.p`
  display: flex;
  font-family: 'Arial', sans-serif;
  font-size: 2.5vw;
  color: yellow;

 
  `;

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Limpando o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []); // O array vazio assegura que o efeito é executado apenas uma vez, semelhante a componentDidMount

  const year = currentDateTime.getYear() - 100;
  const month = currentDateTime.getMonth() + 1;
  const day = currentDateTime.getDate();
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();
  const seconds = currentDateTime.getSeconds();

  const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
  const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <DateTimeContainer>
      <TimeNumber><span>{formattedTime}</span></TimeNumber>
      <DateNumber> {formattedDate}</DateNumber>
    </DateTimeContainer>
  );
};

export default DateTime;
