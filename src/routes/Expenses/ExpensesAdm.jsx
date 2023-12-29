

  import React, { useEffect, useState } from 'react';
  import { getFirestore, collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
  import styled from 'styled-components';
  import FirebaseConfig from '../../service/firebase';
  import { initializeApp } from "firebase/app"
  import ButtonsHeaders from '../../components/Button/ButtonsHeaders';
  import DivSendBox from '../../components/Box/DivSendBox';
  import DivInputBox from '../../components/Box/DivInputBox';
  
  const app = initializeApp(FirebaseConfig);
  
  
  const Total = styled.div`
      margin-top: 5vw;
      color: #fff;
      padding: 1vw 4vw;
      font-size: 6vw;
      font-weight: bolder;
      background-color: #0c181c;
      span{
        color: #f91;
        
      }
    `
  
  const DataOffering = styled.div`
      color: black;
    `
  
  const Value = styled.div`
      color: #0c181c;
      font-weight: bolder;
    `
  
  
  const ExpensesAdm = () => {
    const [ofertas, setOfertas] = useState([]);
    const [novaOferta, setNovaOferta] = useState('');
    const [novaOfertaData, setNovaOfertaData] = useState('');
    const [erroData, setErroData] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const db = getFirestore(app);
          const ofertasRef = collection(db, 'gastos');
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
        const ofertaRef = doc(db, 'gastos', ofertaId);
        await deleteDoc(ofertaRef);
  
        // Atualiza a lista após a exclusão
        setOfertas((prevOfertas) => prevOfertas.filter((oferta) => oferta.id !== ofertaId));
      } catch (error) {
        console.error('Erro ao excluir oferta:', error);
      }
    };
  
    const handleEnviarOferta = async () => {
      try {
        if (!novaOferta || !novaOfertaData) {
          console.error('Valor da oferta e data não podem estar vazios.');
          // Define o estado de erroData como verdadeiro
          setErroData(true);
          return;
        }
  
        const db = getFirestore(app);
        const ofertasRef = collection(db, 'gastos');
  
        // Adiciona a nova oferta ao banco de dados
        await addDoc(ofertasRef, {
          valor: parseFloat(novaOferta), // Converte para número
          data: new Date(novaOfertaData), // Converte a string de data para um objeto de data
        });
  
        // Atualiza a lista de ofertas após o envio bem-sucedido
        setOfertas((prevOfertas) => [
          ...prevOfertas,
          {
            valor: parseFloat(novaOferta),
            data: new Date(novaOfertaData),
          },
        ]);
  
        // Limpa os inputs e redefine o estado de erroData após o envio
        setNovaOferta('');
        setNovaOfertaData('');
        setErroData(false);
  
        console.log('Oferta enviada com sucesso.');
      } catch (error) {
        console.error('Erro ao enviar oferta:', error);
      }
    };
  
    const formatDate = (data) => {
        if (!data || !data.toDate) return 'Data não definida';
        
        // Obtenha a data e formate para "YYYY-MM-DD"
        const formattedDate = new Date(data.toDate()).toISOString().split('T')[0];
        return formattedDate;
      };
      
  
  
    return (
      <DivSendBox>
        <ButtonsHeaders />
  
        <Total>TOTAL DE GASTOS: <span>R$ {totalArrecadado.toFixed(2)}</span></Total>
  
        <DivInputBox>
          <input
            type="number"
            placeholder="Digite o valor da despesa"
            value={novaOferta}
            onChange={(e) => setNovaOferta(e.target.value)}
          />
          <input
            type="date"
            placeholder="Digite a data da despesa"
            value={novaOfertaData}
            onChange={(e) => setNovaOfertaData(e.target.value)}
          />
          <button onClick={handleEnviarOferta}>Enviar Despesas</button>
          {erroData && <p style={{ color: 'red' }}>Por favor, insira a data antes de enviar a oferta.</p>}
        </DivInputBox>
  
        <ul>
    {ofertas.map((oferta) => (
      <li key={oferta.id}>
        <DataOffering>Data: {formatDate(oferta.data)}</DataOffering>
        <Value>R$ {oferta.valor ? oferta.valor.toFixed(2) : 'Valor não definido'}</Value>
        <button onClick={() => handleExcluirOferta(oferta.id)}>Excluir</button>
      </li>
    ))}
  </ul>
      </DivSendBox>
    );
  };
  
  export default ExpensesAdm;
  