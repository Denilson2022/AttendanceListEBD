/* // SignIn.js
import React, { useState } from "react";
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

const SignIn = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSingUp = () => {
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("Usuário já cadastrado!");
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
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

      <button type="button" onClick={handleSingUp}>
        Sign Up
      </button>
    </FielSet>
  );
};

export default SignIn;
 */