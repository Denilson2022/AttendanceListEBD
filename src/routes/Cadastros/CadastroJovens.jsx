/* import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBs2HcwXcaFhRyr7R7Mbi-06h7pWhX37W4",
  authDomain: "ebd4-ef0e8.firebaseapp.com",
  projectId: "ebd4-ef0e8",
  storageBucket: "ebd4-ef0e8.appspot.com",
  messagingSenderId: "817327298885",
  appId: "1:817327298885:web:d9dcfbb337f961b242462c"
});




const Firebase = () => {
  const [users, setUsers] = useState([]);
  const [trueCount, setTrueCount] = useState(0);

  const db = getFirestore(firebaseApp);
  const useCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(useCollectionRef);
        const usersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        // Conta a quantidade de vezes que o campo booleano é true (no campo presença)
        const trueCount = usersData.filter(user => user.presença === true).length;
        setTrueCount(trueCount);

        // Tratamento de datas/horas
        const formattedUsers = usersData.map(user => {
          return {
            ...user,
            data: user.data.toDate().toLocaleString(),
          };
        });

        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, [useCollectionRef]);

  return (
    <div>
      <input type="text" placeholder="nome"/>
      <input type="text" placeholder=""/>
      <p>Quantidade de vezes que o booleano é verdadeiro: {trueCount}</p>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <li>{user.name}</li>
            <li>{user.data}</li>
            <li>{user.presença.toString()}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Firebase */


//********************************************************************************************************************* */



// Importe as bibliotecas necessárias
/* 
import { initializeApp } from "firebase/app";

import React, { useState } from 'react';
import { firebase } from 'firebase/app';
import 'firebase/firestore';

// Configure o Firebase com suas credenciais
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBs2HcwXcaFhRyr7R7Mbi-06h7pWhX37W4",
  authDomain: "ebd4-ef0e8.firebaseapp.com",
  projectId: "ebd4-ef0e8",
  storageBucket: "ebd4-ef0e8.appspot.com",
  messagingSenderId: "817327298885",
  appId: "1:817327298885:web:d9dcfbb337f961b242462c"
});



firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// Componente principal
function Firebase() {
  // Estados para armazenar o nome e o email inseridos pelo usuário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Adiciona os dados ao banco de dados do Firebase
    await firestore.collection('users').add({
      name,
      email,
    });

    // Limpa os campos após o envio
    setName('');
    setEmail('');
  };

  // Renderiza o componente
  return (
    <div>
      <h1>Formulário Firebase</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Firebase;
 */




import { initializeApp } from "firebase/app";


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
import styled from "styled-components";



const firebaseApp = initializeApp({
  apiKey: "AIzaSyBs2HcwXcaFhRyr7R7Mbi-06h7pWhX37W4",
  authDomain: "ebd4-ef0e8.firebaseapp.com",
  projectId: "ebd4-ef0e8",
  storageBucket: "ebd4-ef0e8.appspot.com",
  messagingSenderId: "817327298885",
  appId: "1:817327298885:web:d9dcfbb337f961b242462c"
});

const Title = styled.h1`

color: #f91;
font-size: 5vw;
font-weight: bolder;
text-shadow: 2px 2px 2px #333;
`

const DivTitle = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
height: auto;
gap: 5vw;
background-color: #ffffff;
background-image: linear-gradient(193deg, #FFFFFF 0%, #5f5f5f 16%, #282828 34%, #1d1d1d 62%);
color: white;
  p{
  text-align: center;
}

span{
  color: #eeff00;
}

form{
  display: flex;
  gap: 1vh;
  input{
    transform: scale(1);
    width: 70vw;
  }
input::placeholder {
        font-size: 3vw; 
    }

    :-ms-input-placeholder {
        font-size: 3vw; 
    }

    ::-ms-input-placeholder {
        font-size: 3vw; 
    }
  
    button{
    height: 8vh;
    width: 10vw;
    border-radius: 5%;
    background-color: #000;
    font-size: 2vw;
    color: white;
    border: none;
  
    &:hover{
      background-color: #444;
      cursor: pointer;
    }
  }
}
`


const DivBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 10vh;
width: 50vh;
font-size: 3vw;
padding: 5px;
background-color: #f91;
color: black;
border-radius: 10% 0;

&:hover{
  background-color: yellow;
}
li:nth-child(even){
  width: 0vw;
}

button{
  height: 8vh;
  width: 25vw;
  border: none;
  border-radius: 5%;
  background-color: black;
  color: white;
  &:hover{
    background-color: #444;
    cursor: pointer;
  }
}

`
const DivSubBox = styled.div`



font-size: 4vw;
  ul{
  gap: 1vw;
  padding-inline-start: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  display: flex;
  justify-content: space-around;
  background-color: black;
  width: 80vw;
  padding: 2vw;
  border-radius: 5%;

  
}

li{
    list-style: none;
  width: 100vw;
  }
  `

const DivUl = styled.ul`
display: flex;
flex-wrap: wrap;
padding-inline-start: 0;
margin-block-end: 0;
margin-block-start: 0;


`

const CadastroJovens = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const db = getFirestore(firebaseApp);
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
      const db = getFirestore(firebaseApp);
      const usersRef = collection(db, 'jovens');

      // Adiciona um novo usuário ao Firestore
      const docRef = await addDoc(usersRef, {
        ...newUser,
        data: Timestamp.fromDate(new Date()),
        presenca: false,
      });

      console.log('Novo usuário foi adicionado com ID:', docRef.id);

      setMessage(`${newUser.name} foi incluído com sucesso!`);
      setNewUser({ name: '', email: '' });

      // Atualiza a lista de usuários
      fetchData();
    } catch (error) {
      console.error('Erro ao adicionar novo usuário:', error);
      setMessage('Erro ao adicionar documento.');
    }
  };

  const handleDeleteUser = async (userId, userName) => {
    try {
      const db = getFirestore(firebaseApp);
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

  return (
    <DivTitle>
      <Title>
        SALA DOS JOVENS
        </Title>
      <h1>Cadastrar/<span>Excluir</span> aluno</h1>
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
      <DivSubBox>
      <ul>
        <DivUl>
        {users.map((user) => (
          <DivBox key={user.id}>
            <li>{user.name}</li>
            <button onClick={() => handleDeleteUser(user.id, user.name)}>Excluir</button>
          </DivBox>
        ))}
        </DivUl>
      </ul>
      {message && <p>{message}</p>}
      </DivSubBox>
    </DivTitle>
  );
};

export default CadastroJovens;