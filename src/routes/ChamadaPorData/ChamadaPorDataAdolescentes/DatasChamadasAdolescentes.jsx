
import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ButtonsHeaders from '../../../components/Button/ButtonsHeaders';
import TitleBox from '../../../components/Box/TitleBox';
import DivDateBox from '../../../components/Box/DivDateBox';
import ChamadasAdolescentesPorData from './ChamadasAdolescentesPorData ';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import FirebaseConfig from '../../../service/firebase';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import DivTitleBox from '../../../components/Box/DivTitleBox';

const app = initializeApp(FirebaseConfig);

const DatasChamadasAdolescentes = () => {
  const [datesByMonth, setDatesByMonth] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(app);
        const usersRef = collection(db, 'adolescentes');
        const data = await getDocs(usersRef);

        const datesObj = {};

        data.docs.forEach((doc) => {
          const userData = doc.data();
          const presencaKeys = Object.keys(userData).filter(
            (key) => key.startsWith('presenca_')
          );

          presencaKeys.forEach((key) => {
            const dateString = key.replace('presenca_', '');
            const date = new Date(dateString);

            if (!isNaN(date.getTime())) {
              const monthYear = format(date, 'MMMM/yyyy', { locale: ptBR });
              const formattedDate = format(date, 'dd/MM/yyyy');

              if (!datesObj[monthYear]) {
                datesObj[monthYear] = [];
              }

              const path = format(date, 'yyyy-MM-dd');

              // Verifica se a data já foi adicionada antes de fazê-lo
              if (!datesObj[monthYear].some((d) => d.path === path)) {
                datesObj[monthYear].push({
                  date: formattedDate,
                  path: path,
                });
              }
            }
          });
        });

        // Ordena as chaves (meses/anos) de forma mais recente para a mais antiga
        const sortedMonths = Object.keys(datesObj).sort((a, b) =>
          new Date(b) - new Date(a)
        );

        const sortedDatesObj = {};
        sortedMonths.forEach((monthYear) => {
          sortedDatesObj[monthYear] = datesObj[monthYear];
        });

        setDatesByMonth(sortedDatesObj);
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DivDateBox>
      <ButtonsHeaders />
      <DivTitleBox>
        <h1>SALA DOS ADOLESCENTES</h1>
        <TitleBox>Datas das chamadas</TitleBox>
      </DivTitleBox>
      <Routes>
        {Object.entries(datesByMonth).map(([monthYear, dates]) => (
          <Route
            key={monthYear}
            path={`./${format(new Date(dates[0].path), 'yyyy-MM-dd')}`}
            element={<ChamadasAdolescentesPorData dates={dates} />}
          />
        ))}
        <Route
          path="/"
          element={(
            <ul>
              {Object.entries(datesByMonth).map(([monthYear, dates]) => (
                <div key={monthYear}>
                  <h2>{monthYear}</h2>
                  <ul>
                    {dates.map((date) => (
                      <li key={date.path}>
                        <Link to={`./${date.path}`}>
                          {date.date}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          )}
        />
      </Routes>
    </DivDateBox>
  );
};

export default DatasChamadasAdolescentes;
