

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'

import { onAuthStateChanged } from 'firebase/auth'


import CadastroAdultos from '../routes/Cadastros/CadastroAdultos'
import CadastroAdolescente from '../routes/Cadastros/CadastroAdolecentes'
import LogInAndOut from './LogInAndOut'
import CadastroJovens from '../routes/Cadastros/CadastroJovens'
import CadastroCriancas from '../routes/Cadastros/CadastroCriancas'
import App from '../routes/Home/App'
import Dashboard from '../routes/Dasboard/Dashboard'
import Adultos from '../routes/Salas/Adultos/Adultos'
import Expenses from '../routes/Expenses/Expenses'
import ChamadasJovens from '../routes/Chamadas/ChamadasJovens'
/* import List from '../routes/Firebase/list'
import Checkbox from '../routes/Firebase/Checkbox' */
import Jovens from '../routes/Salas/Jovens/Jovens'
import Adolescentes from '../routes/Salas/Adolescentes/Adolescentes'
import Criancas from '../routes/Salas/Criancas/Criancas'
import ChamadasAdultos from '../routes/Chamadas/ChamadasAdultos'
import ChamadasAdolescentes from '../routes/Chamadas/ChamadasAdolescentes'
import ChamadasCriancas from '../routes/Chamadas/ChamadasCriancas'
import MatriculadosListaDeChamadasCriancas from '../routes/MatriculadosListaDeChamadas/MatriculadosListaDeChamadasCriancas'
import MatriculadosListaDeChamadasJovens from '../routes/MatriculadosListaDeChamadas/MatriculadosListaDeChamadasJovens'
import MatriculadosListaDeChamadasAdultos from '../routes/MatriculadosListaDeChamadas/MatriculadosListaDeChamadasAdultos'
import MatriculadosListaDeChamadasAdolescentes from '../routes/MatriculadosListaDeChamadas/MatriculadosListaDeChamadasAdolescentes'
import Ofertas from '../routes/Offerings/Offerings'
import OfertasArrecadadas from '../routes/Offerings/OfertasArrecadadas'
import DashboardAttendances from '../routes/Dasboard/DashboardAttendances'


import { getAuth } from "firebase/auth"
import FirebaseConfig from '../service/firebase'
import { initializeApp } from "firebase/app"
/* import ListForDate from '../routes/LisForDate/ListForDate' */
import ProcessoInfo from '../API/API'
import ExpensesAdm from '../routes/Expenses/ExpensesAdm'
import Finance from '../routes/Salas/Financeiro/Finance'
import ChamadasAdolescentesPorData from '../routes/ChamadaPorData/ChamadaPorDataAdolescentes/ChamadasAdolescentesPorData '
import DatasChamadasAdolescentes from '../routes/ChamadaPorData/ChamadaPorDataAdolescentes/DatasChamadasAdolescentes'
import DatasChamadasAdolescentesPorData from '../routes/ChamadaPorData/ChamadaPorDataAdolescentes/DatasChamadasAdolescentesPorData'
import DatasChamadasCriancasPorData from '../routes/ChamadaPorData/ChamadaPorDataCriancas/DatasChamadasCriancasPorData'
import DatasChamadasCriancas from '../routes/ChamadaPorData/ChamadaPorDataCriancas/DatasChamadasCriancas'
import ChamadasCriancasPorData from '../routes/ChamadaPorData/ChamadaPorDataCriancas/ChamadaPorDataCriancas'
import DatasChamadasJovensPorData from '../routes/ChamadaPorData/ChamadaPorDataJovens/DatasChamadasJovensPorData'
import DatasChamadasJovens from '../routes/ChamadaPorData/ChamadaPorDataJovens/DatasChamadasJovens'
import ChamadasjovensPorData from '../routes/ChamadaPorData/ChamadaPorDataJovens/ChamadaPorDataJovens'
import DatasChamadasAdultosPorData from '../routes/ChamadaPorData/ChamadaPorDataAdultos/DatasChamadasAdultosPorData'
import DatasChamadasAdultos from '../routes/ChamadaPorData/ChamadaPorDataAdultos/DatasChamadasAdultos'
import ChamadasAdultosPorData from '../routes/ChamadaPorData/ChamadaPorDataAdultos/ChamadaPorDataAdultos'
import FrequenceAdolescentes from '../routes/Frequence/FrequenceAdolescentes.jsx'
import FrequenceJovens from '../routes/Frequence/FrequenceJovens.jsx'
import FrequenceAdultos from '../routes/Frequence/FrequenceAdultos.jsx'
import FrequenceCriancas from '../routes/Frequence/FrequenceCriancas.jsx'


console.log(FirebaseConfig);
const app = initializeApp(FirebaseConfig);
const auth = getAuth(app)

function AppPrivate() {
  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setIsFetching(false)
        return
      }
      setUser(null)
      setIsFetching(false)
    })
    return () => unsubscribe()
  }, [])

  if (isFetching) {
    return <h2>Loading...</h2>
  }

  return (
    <BrowserRouter>

      {/* --------------------   Rotas Protegidas -------------------------*/}
      <Routes>
        <Route index path='/LogInAndOut' element={<LogInAndOut user={user}></LogInAndOut>}></Route>
        <Route path='/dashboard' element={<ProtectedRoute
          user={user}><Dashboard /></ProtectedRoute>}></Route>

        <Route path='/cadastroadultos' element={<ProtectedRoute
          user={user}><CadastroAdultos></CadastroAdultos></ProtectedRoute>}></Route>

        <Route path='/cadastroadolescentes' element={<ProtectedRoute
          user={user}><CadastroAdolescente></CadastroAdolescente></ProtectedRoute>}></Route>

        <Route path='/cadastrojovens' element={<ProtectedRoute
          user={user}><CadastroJovens></CadastroJovens></ProtectedRoute>}></Route>

        <Route path='/cadastrocriancas' element={<ProtectedRoute
          user={user}><CadastroCriancas /></ProtectedRoute>}></Route>



        <Route path='/chamadasadultos' element={<ProtectedRoute
          user={user}><ChamadasAdultos /></ProtectedRoute>}></Route>

        <Route path='/chamadasadolescentes' element={<ProtectedRoute
          user={user}><ChamadasAdolescentes /></ProtectedRoute>}></Route>

        <Route path='/chamadasjovens' element={<ProtectedRoute
          user={user}><ChamadasJovens /></ProtectedRoute>}></Route>

        <Route path='/chamadascriancas' element={<ProtectedRoute
          user={user}><ChamadasCriancas /></ProtectedRoute>}></Route>

        <Route path='/expensesAdm' element={<ProtectedRoute
          user={user}><ExpensesAdm /></ProtectedRoute>}></Route>

        <Route path='/ofertasarrecadadas' element={<ProtectedRoute
          user={user}><OfertasArrecadadas /></ProtectedRoute>}></Route>

        <Route path='/finance' element={<ProtectedRoute
          user={user}><Finance /></ProtectedRoute>}></Route>



        {/* --------------------   Rotas Protegidas -------------------------*/}


        <Route path='/' element={<App />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/adultos' element={<Adultos />}></Route>
        <Route path='/expenses' element={<Expenses />}></Route>
        <Route path='/offerings' element={<Ofertas />}></Route>
       {/*  <Route path='/list' element={<List />}></Route>
        <Route path="/checkbox" element={<Checkbox />}></Route> */}
        <Route path='/adultos' element={<Adultos />}></Route>
        <Route path='/jovens' element={<Jovens />}></Route>
        <Route path='/adolescentes' element={<Adolescentes />}></Route>
        <Route path='/criancas' element={<Criancas />} ></Route>
        <Route path='/MatriculadosListaDeChamadasCriancas' element={<MatriculadosListaDeChamadasCriancas />}></Route>
        <Route path='/MatriculadosListaDeChamadasjovens' element={<MatriculadosListaDeChamadasJovens />}></Route>
        <Route path='/MatriculadosListaDeChamadasadultos' element={<MatriculadosListaDeChamadasAdultos />}></Route>
        <Route path='/MatriculadosListaDeChamadasadolescentes' element={<MatriculadosListaDeChamadasAdolescentes />}></Route>
        <Route path='/loginandout' element={<LogInAndOut />}></Route>
        <Route path='/loginandout' element={<AppPrivate />}></Route>
        <Route path='/dasboardattendances' element={<DashboardAttendances />}></Route>
{/*         <Route path='/listfordate' element={<ListForDate />}></Route> */}
        <Route path='/processoInfo' element={<ProcessoInfo />}></Route>


        {/* <Route index element={<App />} /> */}
{/*         <Route path="/dataschamadasadolescentes/:date" element={<DatasChamadasAdolescentes />} /> */}

        <Route path="/DatasChamadasAdolescentes/:date" element={<DatasChamadasAdolescentesPorData />}/>
        <Route path="/dataschamadasadolescentes/*" element={<DatasChamadasAdolescentes />} />
        <Route path='/chamadasadolescentespordata' element={<ChamadasAdolescentesPorData />}></Route>

        <Route path="/datasChamadascriancas/:date" element={<DatasChamadasCriancasPorData />}/>
        <Route path="/dataschamadascriancas/*" element={<DatasChamadasCriancas />} />
        <Route path='/chamadascriancaspordata' element={<ChamadasCriancasPorData />}></Route>


        <Route path="/datasChamadasjovens/:date" element={<DatasChamadasJovensPorData />}/>
        <Route path="/dataschamadasjovens/*" element={<DatasChamadasJovens />} />
        <Route path='/chamadasjovenspordata' element={<ChamadasjovensPorData />}></Route>


        <Route path="/datasChamadasadultos/:date" element={<DatasChamadasAdultosPorData />}/>
        <Route path="/dataschamadasadultos/*" element={<DatasChamadasAdultos />} />
        <Route path='/chamadasadultospordata' element={<ChamadasAdultosPorData />}></Route>

        <Route path='/frequenceadolescentes' element={<FrequenceAdolescentes />}></Route>
        <Route path='/frequencejovens' element={<FrequenceJovens />}></Route>
        <Route path='/frequenceadultos' element={<FrequenceAdultos />}></Route>
        <Route path='/frequencecriancas' element={<FrequenceCriancas />}></Route>



      </Routes >
    </BrowserRouter >
  )
}

export default AppPrivate

