import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import DatePicker from 'react-datepicker';
import FirebaseConfig from '../../service/firebase';
import 'react-datepicker/dist/react-datepicker.css';
import { ButtonStyleAttendanceRegister } from '../../styles/Button/ButtonStyleAttendanceRegister';
import ButtonsHeaders from '../../components/Button/ButtonsHeaders';
import ResponsiveContainer from '../../styles/ResponsiveContainer';
import DisplayInput from '../../components/Box/DisplayInput';
import BodyBox from '../../components/Box/BodyBox';
import TitleBox from '../../components/Box/TitleBox';
import DisplayBox from '../../components/Box/DisplayBox';
import DivTopBox from '../../components/Box/DivTopBox';
import { DivBibleBox } from '../../components/Box/DivBibleBox';
import { DivSubBox } from '../../components/Box/DivSubBox';
import { DivMagazineBox } from '../../components/Box/DivMagazineBox';




const app = initializeApp(FirebaseConfig);




const ChamadasJovens = () => {
    const [users, setUsers] = useState([]);
    const [chamadaDate, setChamadaDate] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore(app);
                const usersRef = collection(db, 'jovens');
                const data = await getDocs(usersRef);

                const usersData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    checkedTrue: false,
                    checkedFalse: false,
                    checkedBiblia: false,
                    checkedRevista: false,
                    bibliaTrue: false,
                    bibliaFalse: false,
                    revistaTrue: false,
                    revistaFalse: false,
                }));

                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, [chamadaDate]);

    const handleCheckboxChange = (id, type) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) => {
                if (user.id === id) {
                    return {
                        ...user,
                        checkedTrue: type === 'true' ? !user.checkedTrue : user.checkedTrue,
                        checkedFalse: type === 'false' ? !user.checkedFalse : user.checkedFalse,
                        checkedBiblia: type === 'biblia' ? !user.checkedBiblia : user.checkedBiblia,
                        checkedRevista: type === 'revista' ? !user.checkedRevista : user.checkedRevista,
                        bibliaTrue: type === 'bibliaTrue' ? !user.bibliaTrue : user.bibliaTrue,
                        bibliaFalse: type === 'bibliaFalse' ? !user.bibliaFalse : user.bibliaFalse,
                        revistaTrue: type === 'revistaTrue' ? !user.revistaTrue : user.revistaTrue,
                        revistaFalse: type === 'revistaFalse' ? !user.revistaFalse : user.revistaFalse,
                    };
                }
                return user;
            })
        );
    };

    const handleUpdatePresence = async () => {
        try {
            if (!chamadaDate) {
                setErrorMessage('Por favor, selecione uma data antes de atualizar a presença.');
                return;
            }

            const db = getFirestore(app);
            const usersRef = collection(db, 'jovens');

            const usersToUpdate = users.filter(
                (user) => user.checkedTrue || user.checkedFalse ||
                    user.bibliaTrue || user.bibliaFalse ||
                    user.revistaTrue || user.revistaFalse
            );

            const formattedDate = chamadaDate.toISOString();

            const updatePromises = usersToUpdate.map(async (user) => {
                const presenceValue = user.checkedTrue ? true : false;
                const bibliaValue = user.bibliaTrue ? true : user.bibliaFalse ? false : null;
                const revistaValue = user.revistaTrue ? true : user.revistaFalse ? false : null;

                await updateDoc(doc(usersRef, user.id), {
                    [`presenca_${formattedDate}`]: presenceValue,
                    [`biblia_${formattedDate}`]: bibliaValue,
                    [`revista_${formattedDate}`]: revistaValue,
                });
            });

            await Promise.all(updatePromises);

            setSuccessMessage('Dados atualizados com sucesso.');

            setUsers((prevUsers) =>
                prevUsers.map((user) => ({
                    ...user,
                    checkedTrue: false,
                    checkedFalse: false,
                    bibliaTrue: false,
                    bibliaFalse: false,
                    revistaTrue: false,
                    revistaFalse: false,
                }))
            );

            // Recarregar a página automaticamente após o sucesso
        } catch (error) {
            setErrorMessage('Erro ao atualizar campos: ' + error.message);
        }
    };

    return (
        <ResponsiveContainer>
            <BodyBox>
                <ButtonsHeaders />
                SALA DOS JOVENS
                <TitleBox>ALUNOS CHAMADAS</TitleBox>
                <DatePicker selected={chamadaDate} onChange={(date) => setChamadaDate(date)} />
                <ul>
                    {users.map((user) => (
                        <DisplayBox key={user.id}>
                            <DivTopBox>
                                <li>{user.name}</li>
                                <label>
                                    Presente:
                                    <input
                                        className='input'
                                        type="checkbox"
                                        checked={user.checkedTrue || false}
                                        onChange={() => handleCheckboxChange(user.id, 'true')}
                                        disabled={user.checkedFalse}
                                    />
                                </label>
                                <label>
                                    Falta:
                                    <input
                                        className='input'
                                        type="checkbox"
                                        checked={user.checkedFalse || false}
                                        onChange={() => handleCheckboxChange(user.id, 'false')}
                                        disabled={user.checkedTrue}
                                    />
                                </label>
                            </DivTopBox>
                            <DisplayInput>
                                <DivSubBox>
                                    <DivBibleBox>

                                        <label>
                                            <span>Bíblia: </span> Sim
                                            <input
                                                className='input'
                                                type="checkbox"
                                                checked={user.bibliaTrue}
                                                onChange={() => handleCheckboxChange(user.id, 'bibliaTrue')}
                                                disabled={user.bibliaFalse}
                                            />
                                        </label>

                                        <label>
                                            Não
                                            <input
                                                className='input'
                                                type="checkbox"
                                                checked={user.bibliaFalse}
                                                onChange={() => handleCheckboxChange(user.id, 'bibliaFalse')}
                                                disabled={user.bibliaTrue}
                                            />
                                        </label>



                                    </DivBibleBox>


                                    <DivMagazineBox>


                                        <label>
                                            <span>Revista: </span>Sim
                                            <input
                                                className='input'
                                                type="checkbox"
                                                checked={user.revistaTrue}
                                                onChange={() => handleCheckboxChange(user.id, 'revistaTrue')}
                                                disabled={user.revistaFalse}
                                            />
                                        </label>
                                        <label>
                                            Não
                                            <input
                                                className='input'
                                                type="checkbox"
                                                checked={user.revistaFalse}
                                                onChange={() => handleCheckboxChange(user.id, 'revistaFalse')}
                                                disabled={user.revistaTrue}
                                            />
                                        </label>
                                    </DivMagazineBox>
                                </DivSubBox>
                            </DisplayInput>
                        </DisplayBox>
                    ))}
                </ul>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                <ButtonStyleAttendanceRegister onClick={handleUpdatePresence}>
                    Atualizar Dados
                </ButtonStyleAttendanceRegister>
            </BodyBox>
        </ResponsiveContainer>
    );
};

export default ChamadasJovens;
