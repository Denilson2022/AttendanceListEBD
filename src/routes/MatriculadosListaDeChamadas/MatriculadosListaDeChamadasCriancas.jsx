
import React, { useState, useEffect } from 'react';
import { Theme } from '../../Theme/Theme';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import FirebaseConfig from '../../service/firebase';
import { initializeApp } from 'firebase/app';
import BodyBox from '../../components/Box/BodyBox';
import ButtonsHeaders from '../../components/Button/ButtonsHeaders';
import TitleBox from '../../components/Box/TitleBox';
import DivBox from '../../components/Box/DivBox';
import { customStyles } from '../../styles/GeneralStyles';
import DivListBox from '../../components/Box/DivListBox' 
import DivPresencaBox from '../../components/Box/DivPresencaBox'
import DivInterBox from '../../components/Box/DivInterBox'
import DivSeccionBox from '../../components/Box/DivSeccionBox';


const app = initializeApp(FirebaseConfig);


const MatriculadosListaDeChamadasCriancas = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(app);
        const usersRef = collection(db, 'criancas');
        const data = await getDocs(usersRef);

        const usersData = data.docs.map((doc) => {
          const userData = doc.data();

          const presencaKeys = Object.keys(userData).filter(
            (key) => key.startsWith('presenca_')
          );
          const bibliaKeys = Object.keys(userData).filter(
            (key) => key.startsWith('biblia_')
          );
          const revistaKeys = Object.keys(userData).filter(
            (key) => key.startsWith('revista_')
          );

          const trueCount = presencaKeys.filter(
            (key) => userData[key]['000Z'] === true
          ).length;
          const falseCount = presencaKeys.filter(
            (key) => userData[key]['000Z'] === false
          ).length;

          const bibliaTrueCount = bibliaKeys.filter(
            (key) => userData[key]['000Z'] === true
          ).length;
          const bibliaFalseCount = bibliaKeys.filter(
            (key) => userData[key]['000Z'] === false
          ).length;

          const revistaTrueCount = revistaKeys.filter(
            (key) => userData[key]['000Z'] === true
          ).length;
          const revistaFalseCount = revistaKeys.filter(
            (key) => userData[key]['000Z'] === false
          ).length;

          return {
            ...userData,
            id: doc.id,
            trueCount,
            falseCount,
            bibliaTrueCount,
            bibliaFalseCount,
            revistaTrueCount,
            revistaFalseCount,
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
    <BodyBox>
      <ButtonsHeaders />
      <div style={Theme.textCenter}>
        SALA DAS CRIANÇAS
        <TitleBox style={customStyles}>
          Lista de matriculados e presenças
        </TitleBox>
      </div>
      <DivSeccionBox>
        <h2>Nome</h2>
        <div>
          <h5>Presença</h5>
          <h5>Falta</h5>
        </div>
      </DivSeccionBox>
      <DivBox>
        <ul>
          {users.map((user) => (
            <DivListBox key={user.id}>
              <li>
                <DivPresencaBox>
                  {user.name}
                  <DivInterBox>
                    <li>{user.trueCount}</li>
                    <li>
                      <span>{user.falseCount}</span>
                    </li>
                  </DivInterBox>
                </DivPresencaBox>

                <p>
                  Bíblia
                  <DivInterBox>
                    <li>{user.bibliaTrueCount}</li>
                    <li>
                      <span>{user.bibliaFalseCount}</span>
                    </li>
                  </DivInterBox>

                </p>
                <p>
                  Revista
                  <DivInterBox>
                    <li>{user.revistaTrueCount}</li>
                    <li>
                      <span>{user.revistaFalseCount}</span>
                    </li>
                  </DivInterBox>
                </p>
              </li>
            {/*   <DivCheckbox> */}

                {/*  <DivInter>
                <li>{user.trueCount}</li>
                <li>
                  <span>{user.falseCount}</span>
                </li>
                </DivInter>
              */}

             {/*    <DivLivros> */}
                  {/*  <DivInter>
                <li>{user.bibliaTrueCount}</li>
                <li>
                  <span>{user.bibliaFalseCount}</span>
                </li>
                </DivInter> */}

                  {/*    <DivInter>
                <li>{user.revistaTrueCount}</li>
                <li>
                  <span>{user.revistaFalseCount}</span>
                </li>
                </DivInter> */}



           {/*      </DivLivros>
              </DivCheckbox> */}
            </DivListBox>
          ))}
        </ul>
      </DivBox>
    </BodyBox>
  );
};

export default MatriculadosListaDeChamadasCriancas;
