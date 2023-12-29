
import GlobalStyle from './styles/GlobalStyle.js'

import React from 'react'
import ReactDOM from 'react-dom/client'
import AppPrivate from './Log/AppPrivate'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <GlobalStyle />

    <AppPrivate />
    
  </React.StrictMode>
  </>
) 