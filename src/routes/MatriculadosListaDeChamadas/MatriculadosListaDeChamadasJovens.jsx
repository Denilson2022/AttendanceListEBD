

import { initializeApp } from "firebase/app";

import React, { useState, useEffect } from 'react';
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    Timestamp,
} from "firebase/firestore";
import styled from "styled-components";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBs2HcwXcaFhRyr7R7Mbi-06h7pWhX37W4",
    authDomain: "ebd4-ef0e8.firebaseapp.com",
    projectId: "ebd4-ef0e8",
    storageBucket: "ebd4-ef0e8.appspot.com",
    messagingSenderId: "817327298885",
    appId: "1:817327298885:web:d9dcfbb337f961b242462c"
});


const ListStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
background-image: linear-gradient(193deg, #FFFFFF 0%, #5f5f5f 16%, #282828 34%, #1d1d1d 62%);
min-height: 100vh;

ul{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0;
        gap: 2vw;
        height: auto;
        width: 80vw;
        background-color: #111;
        padding: 4vw;
        border-radius: 8%;
        box-shadow: 1px 1px 5px #ffffff65;
    }
    
    li{
        width: 100vw;
        font-size: 3vw;
        color: #111;
        list-style: none;
        display: flex;
        justify-content: space-between;
}`

    const Title = styled.h1`

    color: #f91;
    font-size: 2.5rem;
    text-shadow: 2px 2px 2px #111111a2;

    `
    const SubTileH2 = styled.h1`

        color: yellow;
        font-size: 1rem;
     
    @media screen and (min-width: 800px) {
        font-size: 3rem;
    }

    
        `

const SubTitle = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
    margin-left: 5vw;
    margin-bottom: -5vw;
    height: 20vh;
    width: 100vw;
    color: #f91;
    text-shadow: 2px 2px 2px black;
    
    `

const Bibi = styled.div`
    display: flex;
    align-items: center;
    background-color: #f91;
    width: 70vw;
    height: 8vw;
    text-shadow: 1px 1px 1px #0000007b;
    padding-left: 5vw;
        &:hover
        {
            background-color: yellow;
        }
        li{
            
            font-size: 1.5rem;
            
        }
        `
        
const Nome = styled.h1`
    margin-right: 30vw;
    font-size: 1rem;
    color: white;
    @media screen and (min-width: 800px) {
    font-size: 2rem;
    }
    `;

const Centro = styled.h1`
    margin-right: 10vw; 
    font-size: 1rem;
    color: white;
    @media screen and (min-width: 800px) {
    font-size: 2rem;
    }
    `;

const DivPresenca = styled.div`
display: flex;
align-items: center;
li{
    width: 20vw;
    text-align: end;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 1px #000000ad;
    
    
}
span{
    color: red;
    font-weight: bolder;
    text-shadow: 1px 1px 1px #000000ad;
}

`



const MatriculadosListaDeChamadasJovens = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore(firebaseApp);
                const usersRef = collection(db, 'jovens');
                const data = await getDocs(usersRef);

                const usersData = data.docs.map((doc) => {
                    const userData = doc.data();

                    // Encontra as chaves que começam com "presenca_"
                    const presencaKeys = Object.keys(userData).filter(key => key.startsWith("presenca_"));

                    // Calcula o número de presenças e faltas
                    const trueCount = presencaKeys.filter(key => userData[key] === true).length;
                    const falseCount = presencaKeys.filter(key => userData[key] === false).length;

                    return {
                        ...userData,
                        id: doc.id,
                        trueCount,
                        falseCount,
                    };
                });

                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ListStyle>
            <Title>SALA DOS JOVENS</Title>
            <SubTileH2>
                Lista de matriculados e presenças
            </SubTileH2>
            <SubTitle>
                <Nome>Nome</Nome>
                <Centro>Presenças</Centro>
                <Centro>Faltas</Centro>
            </SubTitle>
            <ul>
                {users.map((user) => (
                    <Bibi key={user.id}>
                        <li>{user.name}</li>
                        <DivPresenca>
                            <li>{user.trueCount}</li>
                            <li><span>{user.falseCount}</span></li>
                        </DivPresenca>
                    </Bibi>
                ))}
            </ul>
        </ListStyle>
    );
};

export default MatriculadosListaDeChamadasJovens;


