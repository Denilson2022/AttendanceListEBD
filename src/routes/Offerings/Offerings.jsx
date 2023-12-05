import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import styled from 'styled-components';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBs2HcwXcaFhRyr7R7Mbi-06h7pWhX37W4",
    authDomain: "ebd4-ef0e8.firebaseapp.com",
    projectId: "ebd4-ef0e8",
    storageBucket: "ebd4-ef0e8.appspot.com",
    messagingSenderId: "817327298885",
    appId: "1:817327298885:web:d9dcfbb337f961b242462c"
});




const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f91;
  min-height: 100vh;
  h1{
  text-shadow: 1px 1px 1px #ffffff7b;
  text-align: center;
  font-size: calc(1rem + ((4vw - 7.68px) * 0.6944));
  letter-spacing: -.1rem;
}
h2{
  text-align: center;
  font-size: 1rem;
  font-size: calc(1rem + ((2vw - 7.68px) * 0.6944));

}
  label {
    color: white;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    background-color: #5c5c5c;
    border: none;
    padding: 1rem 2rem;
    border-radius: 15%;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    &:hover{
      background-color: #444;
    }
  }
`;

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
`

const Ofertas = () => {
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  const handleEnviarOferta = async () => {
    try {
      const db = getFirestore(firebaseApp);
      const ofertasRef = collection(db, 'ofertas');

      await addDoc(ofertasRef, {
        valor: parseFloat(valor),
        data,
      });

      // Limpa os campos após enviar
      setValor('');
      setData('');
    } catch (error) {
      console.error('Erro ao enviar oferta:', error);
    }
  };

  return (
    <FormWrapper>
      <h1>SECRETARIA DA ESCOLA DOMINICAL</h1>
      <h2>OFERTAS ARRECADADAS</h2>
      <DivBox>
      <label>
        
        <input type="number" placeholder='Digite o valor da oferta' value={valor} onChange={(e) => setValor(e.target.value)} />
      </label>
      <label>
        
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
      </label>
      <button onClick={handleEnviarOferta}>Enviar Oferta</button>
      </DivBox>
    </FormWrapper>
  );
};

export default Ofertas;


/* 

const Ofertas = () => {
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  const handleEnviarOferta = async () => {
    try {
      const db = getFirestore(firebaseApp);
      const ofertasRef = collection(db, 'ofertas');

      await addDoc(ofertasRef, {
        valor: parseFloat(valor),
        data,
      });

      // Limpa os campos após enviar
      setValor('');
      setData('');
    } catch (error) {
      console.error('Erro ao enviar oferta:', error);
    }
  };

  return (
    <div>
      <label>
        Valor:
        <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
      </label>
      <label>
        Data:
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
      </label>
      <button onClick={handleEnviarOferta}>Enviar Oferta</button>
    </div>
  );
};

export default Ofertas;
 */