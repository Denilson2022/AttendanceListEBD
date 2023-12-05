import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyle.js'


/* Confirgurar router */

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './routes/Home/App.jsx'
/* import AttendanceList from './routes/AttendanceList/AttendanceList.jsx'
 */import Expenses from './routes/Expenses/Expenses.jsx'
import Offerings from './routes/Offerings/Offerings.jsx'
import Dashboard from './routes/Dasboard/Dashboard.jsx'
import List from './routes/Firebase/list.jsx'
import Checkbox from './routes/Firebase/Checkbox.jsx'
import Adultos from './routes/Salas/Adultos/Adultos.jsx'
import Adolescentes from './routes/Salas/Adolescentes/Adolescentes.jsx'
import Jovens from './routes/Salas/Jovens/Jovens.jsx'
import Criancas from './routes/Salas/Criancas/Criancas.jsx'
import CadastroAdultos from './routes/Cadastros/CadastroAdultos.jsx'
import CadastroJovens from './routes/Cadastros/CadastroJovens.jsx'
import CadastroAdolescentes from './routes/Cadastros/CadastroAdolecentes.jsx'
import CadastroCriancas from './routes/Cadastros/CadastroCriancas.jsx'
import ChamadasAdultos from './routes/Chamadas/ChamadasAdultos.jsx'
import ChamadasCriancas from './routes/Chamadas/ChamadasCriancas.jsx'
import ChamadasJovens from './routes/Chamadas/ChamadasJovens.jsx'
import ChamadasAdolescentes from './routes/Chamadas/ChamadasAdolescentes.jsx'
import MatriculadosListaDeChamadasCriancas from './routes/MatriculadosListaDeChamadas/MatriculadosListaDeChamadasCriancas.jsx'
import MatriculadosListaDeChamadasJovens from './routes/MatriculadosListaDeChamadas/MatriculadosListaDeChamadasJovens.jsx'
import MatriculadosListaDeChamadasAdultos from './routes/MatriculadosListaDeChamadas/MatriculadosListaDeChamadasAdultos.jsx'
import MatriculadosListaDeChamadasAdolescentes from './routes/MatriculadosListaDeChamadas/MatriculadosListaDeChamadasAdolescentes.jsx'
import OfertasArrecadadas from './routes/Offerings/OfertasArrecadadas.jsx'


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />

  },
  {
    path: "dashboard",
    element: <Dashboard />

  },
  {
    path: "/expenses",
    element: <Expenses />

  },
  {
    path: "/offerings",
    element: <Offerings />

  },
  {
    path: "/ofertasarrecadadas",
    element: <OfertasArrecadadas />

  },
 /*  {
    path: "/dashboard",
    element: <Dashboard />

  }, */
  {
    path: "/list",
    element: <List />
  },
  {
    path: "/checkbox",
    element: <Checkbox />

  },
  {
    path: "/adultos",
    element: <Adultos />
  
  },
  {
    path: "/jovens",
    element: <Jovens />
  },
  {
    path: "/adolescentes",
    element: <Adolescentes />
  },
  {
    path: "/criancas",
    element: <Criancas />
  },
  {
    path: "/cadastroAdultos",
    element: <CadastroAdultos />

  },
  {
    path: "/cadastrojovens",
    element: <CadastroJovens />
  },
  {
    path: "/cadastroadolescentes",
    element: <CadastroAdolescentes />
  },
  {
    path: "/cadastrocriancas",
    element: <CadastroCriancas />
  },
  {
    path: "/chamadasadultos",
    element: <ChamadasAdultos />
  },
  {
    path: "/chamadasadolescentes",
    element: <ChamadasAdolescentes />
  },
  {
    path: "/chamadasjovens",
    element: <ChamadasJovens />
  },
  {
    path: "/chamadascriancas",
    element: <ChamadasCriancas />
  }, 

  {
    path: "/MatriculadosListaDeChamadasCriancas",
    element: <MatriculadosListaDeChamadasCriancas />
  },
  {
    path: "/MatriculadosListaDeChamadasjovens",
    element: <MatriculadosListaDeChamadasJovens />
  },
  {
    path: "/MatriculadosListaDeChamadasadultos",
    element: <MatriculadosListaDeChamadasAdultos />
  },
  {
    path: "/MatriculadosListaDeChamadasadolescentes",
    element: <MatriculadosListaDeChamadasAdolescentes />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)