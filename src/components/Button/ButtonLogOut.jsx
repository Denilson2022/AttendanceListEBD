import React from 'react';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { getAuth } from "firebase/auth"
import FirebaseConfig from '../../service/firebase';
import { initializeApp } from "firebase/app"
import { Theme } from '../../Theme/Theme';


const app = initializeApp(FirebaseConfig);
const auth = getAuth(app)






const DivBox = styled.div` 

button{
    background-color: #910;
    box-shadow: 1px 2px 2px #00000063;
    width: 20vw;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    padding: 1.5rem 2rem;
    align-items: center;
    ${Theme.centering}
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all .3s;
    &:hover{
        background-color: #f3f3f3;
        color: #900;

    }
}
`



const ButtonLogOut = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log('Sign Out');
            // Redireciona para a página Home
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    return (
        <DivBox>
            <button onClick={handleSignOut}>Logout</button>
        </DivBox>
    );
};

export default ButtonLogOut;
