
import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import FirebaseConfig from '../../../service/firebase';
import { initializeApp } from 'firebase/app';
import BodyBox from '../../../components/Box/BodyBox';
import ButtonsHeaders from '../../../components/Button/ButtonsHeaders';
import TitleBox from '../../../components/Box/TitleBox';
import DivBox from '../../../components/Box/DivBox';
import { customStyles } from '../../../styles/GeneralStyles';
import DivListBox from '../../../components/Box/DivListBox';
import DivPresencaBox from '../../../components/Box/DivPresencaBox';
import DivInterBox from '../../../components/Box/DivInterBox';
import DivSeccionBox from '../../../components/Box/DivSeccionBox';
import { Theme } from '../../../Theme/Theme';
import { useParams } from 'react-router-dom';
import { format, utcToZonedTime } from 'date-fns-tz';

const app = initializeApp(FirebaseConfig);

const DatasChamadasCriancasPorData = () => {
  const [users, setUsers] = useState([]);
  const { date } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(app);
        const usersRef = collection(db, 'criancas');
        const data = await getDocs(usersRef);

        const usersData = data.docs.map((doc) => {
          const userData = doc.data();

          const presencaKeys = Object.keys(userData).filter(
            (key) => key.startsWith('presenca_') && key.includes(date)
          );

          const trueCount = presencaKeys.filter(
            (key) => userData[key]['000Z'] === true
          ).length;
          const falseCount = presencaKeys.filter(
            (key) => userData[key]['000Z'] === false
          ).length;

          const bibliaKeys = Object.keys(userData).filter(
            (key) => key.startsWith('biblia_') && key.includes(date)
          );

          const bibliaTrueCount = bibliaKeys.filter(
            (key) => userData[key]['000Z'] === true
          ).length;
          const bibliaFalseCount = bibliaKeys.filter(
            (key) => userData[key]['000Z'] === false
          ).length;

          const revistaKeys = Object.keys(userData).filter(
            (key) => key.startsWith('revista_') && key.includes(date)
          );

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
  }, [date]);

  const formattedDate = format(
    utcToZonedTime(new Date(date), 'UTC'), // Ajusta para UTC antes de formatar
    'dd/MM/yyyy',
    { timeZone: 'America/Sao_Paulo' } // Substitua 'America/Sao_Paulo' pelo seu fuso horário
  );

  return (
    <BodyBox>
      <ButtonsHeaders />
      <div style={Theme.textCenter}>
        SALA DAS CRIANÇAS
        <TitleBox style={customStyles}>
          Lista de matriculados e presenças
        </TitleBox>
        <p>Chamada do dia {formattedDate}</p>
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
            </DivListBox>
          ))}
        </ul>
      </DivBox>
    </BodyBox>
  );
};

export default DatasChamadasCriancasPorData;