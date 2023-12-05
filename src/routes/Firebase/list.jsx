

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



const SubTitle = styled.div`
    display: flex;
    margin-left: 5vw;
    gap: 50vw;
    width: 100vw;
    background-color: antiquewhite;
    `


const Bibi = styled.div`
    display: flex;
    `


const ListStyle = styled.div`

ul{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: brown;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
    height: 50vh;
}
li{

    width: 50vw;
    padding-left: 3vw;
    background-color: black;
    font-size: 3vw;
    color: white;
}



li:nth-child(odd){
    list-style: none;
    margin-top: 2vh;
}
li:nth-child(even){
    list-style: none;

    margin-top: 2vh;
}
`



const firebaseApp = initializeApp({
    apiKey: "AIzaSyBs2HcwXcaFhRyr7R7Mbi-06h7pWhX37W4",
    authDomain: "ebd4-ef0e8.firebaseapp.com",
    projectId: "ebd4-ef0e8",
    storageBucket: "ebd4-ef0e8.appspot.com",
    messagingSenderId: "817327298885",
    appId: "1:817327298885:web:d9dcfbb337f961b242462c"
});






const List = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore(firebaseApp);
                const usersRef = collection(db, 'adulto');
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

        fetchData();
    }, []);

    return (
        <ListStyle>
            <SubTitle>
                <h1>Nome</h1>
                <h1>Email</h1>
            </SubTitle>
            <ul>
                {users.map((user) => (
                    <Bibi key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                    </Bibi>
                ))}
            </ul>
        </ListStyle>
    );
};

export default List;