import React from 'react';
import { useNavigate } from 'react-router-dom';

//import { ButtonGoBackStyles } from '../../styles/GeneralStyles';
import styled from 'styled-components';






 const ButtonHomeStyles = styled.button`
    background-color: #5d9b5d;
    box-shadow: 1px 2px 2px #00000063;
    width: 20vw;
    display: flex;
    justify-content: center;
    padding: 1.5rem 2rem;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        color: #000;
        background-color: #d1d1d1
    }
` 

const ButtonHome = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
       return navigate('/');
     
    };
    return (
        <>
            <ButtonHomeStyles onClick={handleSignOut}>Home</ButtonHomeStyles>
        </>
    );
};

export default ButtonHome;
