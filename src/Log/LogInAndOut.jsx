import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import styled from "styled-components";



import { getAuth } from "firebase/auth"
import FirebaseConfig from "../service/firebase";
import { initializeApp } from "firebase/app"
import ButtonHome from "../components/Button/ButtonHome";


console.log(FirebaseConfig);
const app = initializeApp(FirebaseConfig);
const auth = getAuth(app)



const BodyBox = styled.div`
  background-color: #fff;
  background-image: linear-gradient(163deg, #FFFFFF 0%, #5f5f5f 22%, #282828 44%, #1d1d1d 82%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    font-size: 2rem;
    margin-top: -15vh;
    color: #ffffff;
    letter-spacing: 1vw;
    

}
`;

const FielSet = styled.div`
  background-color: #000000;

  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  border-radius: 5%;
  button:nth-child(even) {
    background-color: #f91;
    padding: 1vw 4vw;
    border-radius: 5%;
    width: 10rem;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      background-color: #f61;
    }
  }
  button:nth-child(odd) {
    background-color: #006300;
    padding: 1vw 4vw;
    border-radius: 5%;
    width: 10rem;
    cursor: pointer;
    transition: all .3s;
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

const Login = ({ handleSignIn, handleEmailChange, handlePasswordChange }) => (
  <FielSet>
    <UlBox>
    <h1>Login</h1>
      <li>
        <label htmlFor="email">Email </label>
        <input type="text" id="email" onChange={handleEmailChange} />
      </li>
      <li>
        <label htmlFor="password">Senha </label>
        <input type="password" id="password" onChange={handlePasswordChange} />
      </li>
    </UlBox>
     <button type="button" onClick={handleSignIn}>Sign In</button>
     <ButtonHome/>
    
  </FielSet>
);

const LogInAndOut = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignIn = () => {
    if (!email || !password) return alert("Email e/ou senha em branco!");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(() => {
        return alert("Informe um email e/ou senha válidos!!!")
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  if (user) {
    return <Navigate to="/dashboard"></Navigate>;
  }


return (
  <BodyBox>
  <form>
      <Login
        handleSignIn={handleSignIn}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        />

    </form>
  </BodyBox>
);
};

export default LogInAndOut;
