/* import React, { useState } from 'react';
import axios from 'axios';

const ProcessoInfo = () => {
  const [numeroOAB, setNumeroOAB] = useState('');
  const [processoData, setProcessoData] = useState(null);

  const buscarProcesso = async () => {
    try {
      const response = await axios.get(`https://api.infosimples.com/api/v2/consultas/tribunal/tjsp/primeiro-grau${numeroOAB}`);
      setProcessoData(response.data.data);
      console.log(setProcessoData);
    } catch (error) {
      console.error('Erro ao buscar informações do processo', error);
    }
  };

  return (
    <div>
      <h2>Buscar Informações do Processo</h2>
      <label>
        Número da OAB:
        <input
          type="text"
          value={numeroOAB}
          onChange={(e) => setNumeroOAB(e.target.value)}
        />
      </label>
      <button onClick={buscarProcesso}>Buscar</button>

      {processoData && (
        <div>
          <h3>Informações do Processo</h3>
          <pre>{JSON.stringify(processoData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ProcessoInfo;
 */


import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Theme } from '../Theme/Theme';





const Buttons = styled.div`
  display: flex;
  max-width: 140px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

`

/* 
label {
    position: relative;
    width: 60px;
    height: 60px;
    cursor: pointer;
    input {
      z-index: 4;
      position: absolute;
      right: -25px;
      top: 30px;
      transform: scale(5);
      &:checked ~ span {
        appearance: none;
        box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.2);

      }
    }
    span{
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(#fff, #ebf5fc, #ebf5fc);
      border-radius: 6px;
      box-shadow: inset 0 5px 1px 0 rgba(0,0,0,0.1),
      0 5px 15px rgba(0,0,0,0.1),
      0 -5px 15px rgba(0,0,0,0.15);
    }
    i{
      position: relative;
      top: 15px;
      left: 45px;
      font-size: 1.5em;
      color: #8db4d5;
      z-index: 1;
    }
  }

  ` */

 const DivTop = styled.div`
    background:     linear-gradient( 109deg, transparent, #291f57 73%, #0a0131 100% );

   height: 100vh;
   flex-direction: column;
   display: flex;
   align-items: center;
   justify-content: space-around;
  `
  
  
  
  const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  height: 40vw;
  width: 40vw;
  cursor: pointer;
  `;
  
  const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  &:checked ~ span {
    ${Theme.centering}

  }
  `;

const StyledSpan = styled.span`
padding: 5px;
display: block;
background: transparent;
height: 100%;
width: 100%;
border: solid 1px black;
${Theme.centering}
`;
const DivLab = styled.div`
height: 10vh;
width: 10vh;
background-color: #ffffff;
background: linear-gradient( #00000011,#0000002d, #0000002d 15%,  #fff, #fff);
border-radius: 15%;
border-top: solid 5px #ffffff90;
`

const DivLab2 = styled.div`
height: 10vh;
width: 10vh;
border-radius: 15%;
background: linear-gradient( #fff, #fff, #0000002d 80%, #00000011);
border-bottom: solid 4px #ffffff90;

`

const ProcessoInfo = () => {
  const [numeroOAB, setNumeroOAB] = useState('');
  const [processoData, setProcessoData] = useState(null);
  const [checked, setChecked] = useState(false);




  const handleInputChange = () => {
    setChecked(!checked);


  }


  const buscarProcesso = async () => {
    try {
      // Substitua 'SEU_TOKEN_AQUI' pelo seu token real
      const token = 'IxTkVFi2j8VoD1-W-XOnfRKCeYwDGYfZpKj_T2Pr';

      const response = await axios.post(
        'https://api.infosimples.com/api/v2/consultas/tribunal/tjsp/primeiro-grau',
        {
          oab: numeroOAB,
          token: token,
          // Outros parâmetros opcionais podem ser adicionados conforme necessário
        }
      );

      setProcessoData(response.data.data);
      console.log(setProcessoData);
    } catch (error) {
      console.error('Erro ao buscar informações do processo', error);
    }
  };



      
  return (
    <DivTop>
      <h2>Buscar Informações do Processo</h2>
      <label>
        Número da OAB:
        <input
          type="text"
          value={numeroOAB}
          onChange={(e) => setNumeroOAB(e.target.value)}
        />
      </label>
      <button onClick={buscarProcesso}>Buscar</button>

      {processoData && (
        <div>
          <h3>Informações do Processo</h3>
          {/* Renderize as informações do processo conforme necessário */}
          <pre>{JSON.stringify(processoData, null, 2)}</pre>
        </div>
      )}

      <Buttons>
      <StyledLabel>
      <StyledInput type="checkbox" name='check' onChange={handleInputChange} />
      <StyledSpan checked={checked}> {checked ? <DivLab></DivLab> : <DivLab2></DivLab2>}</StyledSpan>
    </StyledLabel>
        
      </Buttons>
    </DivTop>
  );
};

export default ProcessoInfo;
