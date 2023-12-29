import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import styled from 'styled-components';
import FirebaseConfig from '../../service/firebase';
import { initializeApp } from 'firebase/app';
import ButtonsHeaders from '../../components/Button/ButtonsHeaders';
import DivSendBox from '../../components/Box/DivSendBox';

const app = initializeApp(FirebaseConfig);

const Total = styled.div`
  margin-top: 5vw;
  color: #fff;
  padding: 1vw 4vw;
  font-size: 6vw;
  font-weight: bolder;
  background-color: #0c181c;
  span {
    color: #f91;
  }
`;

const DataOffering = styled.div`
  color: black;
`;

const Value = styled.div`
  color: #0c181c;
  font-weight: bolder;
`;

const UlList = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    margin-top: 10px;
    background-color: #f91;
  }
`;

const Expenses = () => {
  const [ofertas, setOfertas] = useState([]);

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

  const formatDate = (data) => {
    if (!data || !data.toDate) return 'Data não definida';

    // Obtenha a data sem a hora
    const formattedDate = new Date(data.toDate()).toLocaleDateString();
    return formattedDate;
  };

  return (
    <DivSendBox>
      <ButtonsHeaders />
      <Total>
        TOTAL DE GASTOS: <span>R$ {totalArrecadado.toFixed(2)}</span>
      </Total>

      <UlList>
        {ofertas.map((oferta) => (
          <li key={oferta.id}>
            <DataOffering>Data: {formatDate(oferta.data)}</DataOffering>
            <Value>R$ {oferta.valor ? oferta.valor.toFixed(2) : 'Valor não definido'}</Value>
          </li>
        ))}
      </UlList>
    </DivSendBox>
  );
};

export default Expenses;
