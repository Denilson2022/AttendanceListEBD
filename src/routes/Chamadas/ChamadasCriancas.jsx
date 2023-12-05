import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
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




const DivMaior = styled.div`
background-color: #00000095;
height: 100vw;


`

const DivMenor = styled.div`
height: 80vh;
font-size: 2vw;
color: aliceblue;

`

const DivTitle = styled.div`
background-color: #000000;
display: flex;
justify-content: space-between;

`

const DivTitle2 = styled.div`
width: 50vw;
display: flex;
justify-content: space-around;
`


const UlElement = styled.ul`
list-style: none;
height: 60vh;
margin-block: 0;
padding-inline-start: 0px;

gap: 2vh;
display: flex;
flex-direction: column;

`
const DivBox = styled.div`
margin-top: 2vh;
display: flex;
height: 8vh;
justify-content: space-between;
align-items: center;
background-color: #f79708;
    &:hover{
    background-color: yellow;
    width: 100vw;

    }
`



const LiElement = styled.li`
height: 2vh;
width: 50vw;
font-size: 3vw;
color: black;
display: flex;
align-items: center;
`

const DivLabels = styled.label`
width: 50vw;
font-size: 3vw;
display: flex;
justify-content: space-around;
color: black;
.input{

    margin-left: 2vw;
    transform: scale(2);
}
`




const ChamadasCriancas = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore(firebaseApp);
                const usersRef = collection(db, 'criancas');
                const data = await getDocs(usersRef);

                const usersData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    checkedTrue: false,
                    checkedFalse: false,
                }));

                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    const handleCheckboxChange = (id, type) => {
        // Atualiza o estado local com o checkbox marcado
        setUsers((prevUsers) =>
            prevUsers.map((user) => {
                if (user.id === id) {
                    return {
                        ...user,
                        checkedTrue: type === 'true' ? !user.checkedTrue : user.checkedTrue,
                        checkedFalse: type === 'false' ? !user.checkedFalse : user.checkedFalse,
                    };
                }
                return user;
            })
        );
    };

    const handleUpdatePresence = async () => {
        try {
            const db = getFirestore(firebaseApp);
            const usersRef = collection(db, 'criancas');

            // Filtra apenas os usuários com pelo menos um dos checkboxes marcados
            const usersToUpdate = users.filter(
                (user) => user.checkedTrue || user.checkedFalse
            );

            // Atualiza o campo "presenca" para true ou false nos documentos dos usuários marcados
            const updatePromises = usersToUpdate.map(async (user) => {
                const presenceValue = user.checkedTrue ? true : false;
                await updateDoc(doc(usersRef, user.id), {
                    [`presenca_${Date.now()}`]: presenceValue,
                });
            });

            await Promise.all(updatePromises);

            console.log('Campos "presenca" atualizados com sucesso.');

            // Limpa as propriedades "checked" após a atualização
            setUsers((prevUsers) =>
                prevUsers.map((user) => ({
                    ...user,
                    checkedTrue: false,
                    checkedFalse: false,
                }))
            );
        } catch (error) {
            console.error('Erro ao atualizar campos "presenca":', error);
        }
    };

    return (
        <DivMaior>
            <DivMenor>
                <DivTitle>

                    <h1>Nome</h1>
                    <DivTitle2>
                        <h1>Presente</h1>
                        <h1>Falta</h1>
                    </DivTitle2>
                </DivTitle>
                <UlElement>
                    {users.map((user) => (
                        <DivBox key={user.id}>
                            <div>
                                <LiElement>{user.name}</LiElement>

                            </div>
                            <DivLabels>
                                <label>
                                    Presente:
                                    <input
                                        className='input'
                                        type="checkbox"
                                        checked={user.checkedTrue || false}
                                        onChange={() => handleCheckboxChange(user.id, 'true')}
                                        disabled={user.checkedFalse}
                                    />
                                </label>
                                <label>
                                    Falta:
                                    <input
                                        className='input'
                                        type="checkbox"
                                        checked={user.checkedFalse || false}
                                        onChange={() => handleCheckboxChange(user.id, 'false')}
                                        disabled={user.checkedTrue}
                                    />
                                </label>

                            </DivLabels>
                        </DivBox>
                    ))}
                </UlElement>
            </DivMenor >
            <button onClick={handleUpdatePresence}>Atualizar Presença</button>
        </DivMaior >
    );
};

export default ChamadasCriancas;
