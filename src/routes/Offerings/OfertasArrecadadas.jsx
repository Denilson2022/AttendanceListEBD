import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import styled from 'styled-components';



const firebaseApp = initializeApp({
    apiKey: "AIzaSyBs2HcwXcaFhRyr7R7Mbi-06h7pWhX37W4",
    authDomain: "ebd4-ef0e8.firebaseapp.com",
    projectId: "ebd4-ef0e8",
    storageBucket: "ebd4-ef0e8.appspot.com",
    messagingSenderId: "817327298885",
    appId: "1:817327298885:web:d9dcfbb337f961b242462c"
});



const DivBox = styled.div`
min-height: 100vh;
background-color: #fff;
background-image: linear-gradient(193deg, #FFFFFF 0%, #5f5f5f 16%, #282828 34%, #1d1d1d 62%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
ul{
    background-color: #222;
    width: 80vw;
    padding: 4vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    border-radius: 5%;
    box-shadow: -1px -2px 4px #ffffff53;
}
li{
    background-color: #f91;
    width: 300px;
    text-align: center;
    font-size: 1.5rem;
    padding: 2vw;
    border-radius: 5%;
    &:hover{
        background-color: yellow;
    }
}
button{
    background-color: #5c5c5c;
    border: none;
    padding: 1vw 2vw;
    margin-top: 1vw;
    border-radius: 15%;
    color: white;
}
`
const Total = styled.div`
    color: #f91;
    font-size: 4vw;
`
const DataOffering =  styled.div`
    color: black;
  
`
const Value = styled.div`
    color: brow;
    font-weight: bolder;
`

const OfertasArrecadadas = () => {
    const [ofertas, setOfertas] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const db = getFirestore(firebaseApp);
          const ofertasRef = collection(db, 'ofertas');
          const data = await getDocs(ofertasRef);
  
          const ofertasData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setOfertas(ofertasData);
        } catch (error) {
          console.error('Error fetching ofertas:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const totalArrecadado = ofertas.reduce((total, oferta) => total + oferta.valor, 0);
  
    const handleExcluirOferta = async (ofertaId) => {
      try {
        const db = getFirestore();
        const ofertaRef = doc(db, 'ofertas', ofertaId);
        await deleteDoc(ofertaRef);
  
        // Atualiza a lista após a exclusão
        setOfertas((prevOfertas) => prevOfertas.filter((oferta) => oferta.id !== ofertaId));
      } catch (error) {
        console.error('Erro ao excluir oferta:', error);
      }
    };
  
    // Adicione a lógica para editar oferta aqui (pode ser um modal ou uma nova página)
  
    return (
      <DivBox>
        <Total>TOTAL OFERTAS: R$ {totalArrecadado.toFixed(2)}</Total>
        <ul>
          {ofertas.map((oferta) => (
            <li key={oferta.id}>
              <DataOffering>Data: {oferta.data}</DataOffering>
              <Value>R$ {oferta.valor ? oferta.valor.toFixed(2) : 'Valor não definido'}</Value>
              <button onClick={() => handleExcluirOferta(oferta.id)}>Excluir</button>
              {/* Adicione o botão ou link para editar aqui */}
            </li>
          ))}
        </ul>
      </DivBox>
    );
  };
  
  export default OfertasArrecadadas;