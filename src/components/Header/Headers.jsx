import React from 'react'

import styled from 'styled-components'
import AuthButton from '../Button/AuthButton'

const Header = styled.div`
    height: 5vh;
    width: 100vw;
    background-color: antiquewhite;
    display: flex;
    justify-content: end;
`


function Headers() {
  return (
    <Header>
     <AuthButton/> 
    </Header>
  )
}

export default Headers