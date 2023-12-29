/* // SignOut.js
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../service/firebase";
import { Navigate } from "react-router-dom";
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

const SignOut = ({ user }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        // Implemente redirecionamento ou outras ações necessárias após o logout
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  if (!user) {
    // Se o usuário não estiver autenticado, redirecione para a página de login
    return <Navigate to="/login" />;
  }

  return (
    <FielSet>
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </FielSet>
  );
};

export default SignOut;
 */

// SignOut.js
/* 
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../service/firebase";
import { Navigate } from "react-router-dom";
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

const SignOut = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        // Redireciona o usuário para a página inicial ("/") após o logout
        return <Navigate to="/" />;
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  return (
    <FielSet>
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </FielSet>
  );
};

export default SignOut;
 */