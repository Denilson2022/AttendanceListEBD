
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../Theme/Theme";

import { getAuth } from "firebase/auth"
import FirebaseConfig from '../../service/firebase';
import { initializeApp } from "firebase/app"

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app)

const Button = styled.button`
  background-color: ${props => props.isLoggedIn ? '#9b5d5d' : 'green'};
  box-shadow: 1px 2px 2px #00000063;
  width: 20vw;
  display: flex;
  justify-content: center;
  padding: 1.5rem 2rem;
  align-items: center;
  ${Theme.centering}
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all .3s;
  
  &:hover {
    background-color: ${props => props.isLoggedIn ? '#f3f3f3' : 'lightgreen'};
    color: ${props => props.isLoggedIn ? '#900' : '#fff'};
  }
`;

const AuthButton = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        return navigate('/');
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  const handleSignIn = () => {
    console.log("Performing Sign In...");
    return navigate('/loginandout');
  };

  const handleButtonClick = () => {
    if (user) {
      handleSignOut();
    } else {
      handleSignIn();
    }
  };

  return (
    <Button type="button" onClick={handleButtonClick} isLoggedIn={user}>
      {user ? "Logout" : "Login"}
    </Button>
  );
};

export default AuthButton;
