import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Theme } from '../../Theme/Theme';
import Card from './Card';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import ButtonsHeaders from '../../components/Button/ButtonsHeaders';


import { getAuth } from "firebase/auth"
import FirebaseConfig from '../../service/firebase';
import { initializeApp } from "firebase/app"
import BodyBox from '../../components/Box/BodyBox';

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app)



const DivBox = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-direction: column;
  background-color: #fff;
  background-image: ${Theme.backgrounds.ColorBody};
  height: 100vh;
  h1 {
    color: ${Theme.colors.primary};
    text-shadow: 2px 2px 2px #222;
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
    color: #fff;
    text-shadow: 2px 2px 2px #111;
  }
`;

const DashboardContainer = styled.div`
  ${Theme.centering}
  flex-wrap: wrap;
  padding: 20px;
  h2 {
    color: black;
    font-size: 1.5rem;
    text-shadow: none;
  }
  a {
    text-decoration: none;
  }
`;

const DashboardAttendances = () => {
  const navigate = useNavigate();
  const [numAlunosAdultos, setNumAlunosAdultos] = useState(0);
  const [numAlunosJovens, setNumAlunosJovens] = useState(0);
  const [numAlunosAdolescentes, setNumAlunosAdolescentes] = useState(0);
  const [numAlunosCrianca, setNumAlunosCrianca] = useState(0);

  useEffect(() => {
    const fetchNumAlunos = async () => {
      try {
        const db = getFirestore(app);

        const adultosRef = collection(db, 'adulto');
        const adultosData = await getDocs(adultosRef);
        setNumAlunosAdultos(adultosData.docs.length);

        const jovensRef = collection(db, 'jovens');
        const jovensData = await getDocs(jovensRef);
        setNumAlunosJovens(jovensData.docs.length);

      const adolescentesRef = collection(db, 'adolescentes');
      const adolescentesData = await getDocs(adolescentesRef);
      setNumAlunosAdolescentes(adolescentesData.docs.length);

   const criancaRef = collection(db, 'criancas');
   const criancaData = await getDocs(criancaRef);
   setNumAlunosCrianca(criancaData.docs.length);

      } catch (error) {
        console.error('Error fetching number of students:', error);
      }
    };

    fetchNumAlunos();
  }, []);

  return (
    <BodyBox>
      <ButtonsHeaders />
      <h1>CLASSES</h1>
      <h2>REGISTRO DE FREQUÊNCIAS</h2>
      <DashboardContainer>
        <a href="/frequenceadultos">
          <Card title="ADULTOS" value={numAlunosAdultos} />
        </a>
        <a href="/frequencejovens">
          <Card title="JOVENS" value={numAlunosJovens} />
        </a>
        <a href="/frequenceadolescentes">
          <Card title="ADOLESCENTES" value={numAlunosAdolescentes} />
        </a>
        <a href="/frequencecriancas">
          <Card title="CRIANÇAS" value={numAlunosCrianca} />
        </a>
      
      </DashboardContainer>
    </BodyBox>
  );
};

export default DashboardAttendances;
