/* import React from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../service/firebase";
import styled from "styled-components";

const FielSet = styled.div`
  background-color: #000;
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  border-radius: 5%;
  button {
    background-color: #f91;
    padding: 1vw 4vw;
    border-radius: 5%;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #f61;
    }
  }
`;

const UlBox = styled.ul`
  color: white;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  li {
    list-style: none;
    font-size: 4vh;
  }
  #email {
    font-size: calc(1rem + ((1vw - 7.68px) * 0.6944));
    min-height: 0vw;
  }

  #password {
    font-size: calc(1rem + ((1vw - 7.68px) * 0.6944));
    min-height: 0vw;
  }
`;

const Login = ({ handleSignIn, handleSignUp, handleEmailChange, handlePasswordChange, isSignUpActive }) => (
  <FielSet>
    <UlBox>
      <li>
        <label htmlFor="email">Email </label>
        <input type="text" id="email" onChange={handleEmailChange} />
      </li>
      <li>
        <label htmlFor="password">Senha </label>
        <input type="password" id="password" onChange={handlePasswordChange} />
      </li>
    </UlBox>
    {isSignUpActive && <button type="button" onClick={handleSignUp}>Sign Up</button>}
    {!isSignUpActive && <button type="button" onClick={handleSignIn}>Sign In</button>}
  </FielSet>
);

export default Login;
 