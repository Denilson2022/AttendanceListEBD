import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


import { getAuth } from "firebase/auth"
import FirebaseConfig from '../../service/firebase';
import { initializeApp } from "firebase/app"
import ButtonsHeaders from '../../components/Button/ButtonsHeaders';
import BodyBox from '../../components/Box/BodyBox'; 
import TitleBox from '../../components/Box/TitleBox';


import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';








const app = initializeApp(FirebaseConfig);
const auth = getAuth(app)


const DivBox = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: #fff;
background-image: linear-gradient(193deg, #FFFFFF 0%, #5f5f5f 16%, #282828 34%, #1d1d1d 62%);
height: 100vh;
justify-content: space-between;

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
  const navigate = useNavigate();
  const [numAlunosAdultos, setNumAlunosAdultos] = useState(0);
  const [numAlunosJovens, setNumAlunosJovens] = useState(0);
  const [numAlunosAdolescentes, setNumAlunosAdolescentes] = useState(0);
  const [numAlunosCrianca, setNumAlunosCrianca] = useState(0);
  // Adicione estados semelhantes para outras salas, se necessário

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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Sign Out');
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <BodyBox>
      <ButtonsHeaders />
      <h2>ESCOLA BÍBLICA DOMINICAL</h2>
      <TitleBox>CLASSES</TitleBox>
      <DashboardContainer>
        <a href="/adultos">
          <Card title="ADULTOS" value={numAlunosAdultos} />
        </a>
        <a href="/jovens">
          <Card title="JOVENS" value={numAlunosJovens} />
        </a>
        <a href="/adolescentes">
          <Card title="ADOLESCENTES" value={numAlunosAdolescentes} />
        </a>
        <a href="/criancas">
          <Card title="CRIANÇAS" value={numAlunosCrianca} />
        </a>
        <a href="/finance">
          <Card title="FINANCEIRO" />
        </a>
      </DashboardContainer>
    </BodyBox>
  );
};

export default Dashboard;




