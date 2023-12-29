import { useNavigate } from "react-router-dom";


import React, { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  Timestamp,
} from 'firebase/firestore';

import FirebaseConfig from '../../service/firebase';
import { initializeApp } from "firebase/app"
import ResponsiveContainer from "../../styles/ResponsiveContainer";
import BodyBox from "../../components/Box/BodyBox";
import TitleBox from "../../components/Box/TitleBox";
import { customStyles } from "../../styles/GeneralStyles";
import ButtonsHeaders from "../../components/Button/ButtonsHeaders";
import styled from "styled-components";


const app = initializeApp(FirebaseConfig);




const DisplayListBox = styled.div`
  font-size: 2rem;
  color: aliceblue;
  background-color:  #9b5d5d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
`
const DivBox1 = styled.div`
  background-color: #0c181c;;
`







const CadastroJovens = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: ''});
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const db = getFirestore(app);
      const usersRef = collection(db, 'jovens');
      const data = await getDocs(usersRef);

      const usersData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = getFirestore(app);
      const usersRef = collection(db, 'jovens');

      // Adiciona um novo usuário ao Firestore
      const docRef = await addDoc(usersRef, {
        ...newUser,
        data: Timestamp.fromDate(new Date()),
        presenca: false,
      });

      console.log('Novo usuário foi adicionado com ID:', docRef.id);

      setMessage(`${newUser.name} foi incluído com sucesso!`);
      setNewUser({ name: ''});

      // Atualiza a lista de usuários
      fetchData();
    } catch (error) {
      console.error('Erro ao adicionar novo usuário:', error);
      setMessage('Erro ao adicionar documento.');
    }
  };

  const handleDeleteUser = async (userId, userName) => {
    try {
      const db = getFirestore(app);
      const usersRef = collection(db, 'jovens');

      // Exclui o usuário do Firestore
      await deleteDoc(doc(usersRef, userId));

      console.log('Usuário foi excluído com sucesso.');

      setMessage(`${userName} foi excluído com sucesso!`);

      // Atualiza a lista de usuários
      fetchData();
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      setMessage('Erro ao excluir documento.');
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <ResponsiveContainer>
    <BodyBox>
      <ButtonsHeaders />
        SALA DOS JOVENS
      <TitleBox style={customStyles}>
      Cadastrar ou excluir alunos
      </TitleBox>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Cadastre o nome do aluno"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />

        <button type="submit">Enviar</button>
      </form>
      <DivBox1>
        <ul>
          <ul>
            {users.map((user) => (
              <DisplayListBox key={user.id}>
                <li>{user.name}</li>
                <button onClick={() => handleDeleteUser(user.id, user.name)}>Excluir</button>
              </DisplayListBox>
            ))}
          </ul>
        </ul>
        {message && <p>{message}</p>}
      </DivBox1>
    </BodyBox>
    </ResponsiveContainer>
  );
};

export default CadastroJovens;
