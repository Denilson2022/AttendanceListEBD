import styled from 'styled-components';
import { smallScreen, mediumScreen, largeScreen } from './mediaQueries';
import DisplayBox from '../components/Box/DisplayBox';
import DivBox from '../components/Box/DivBox';
import BodyBox from '../components/Box/BodyBox';
import { Theme } from '../Theme/Theme';
import TitleBox from '../components/Box/TitleBox';
import DisplayInput from '../components/Box/DisplayInput';
import { ButtonStyleAttendanceRegister } from './Button/ButtonStyleAttendanceRegister';

const ResponsiveContainer = styled.div`


@media ${smallScreen} {
  
  ${BodyBox}{
    ul{
      ${Theme.centering}
      list-style: none;
      height: auto;
      width: 100%;
      margin-block: 0;
      padding-inline-start: 0px;
      gap: 1rem;
      flex-direction: column;
    }
    ${TitleBox}{
      text-shadow: 1px 1px 1px black;
      display: flex;
      align-items: center;
      justify-content: center;
      word-spacing: 1vw;
      background-color: #777;
      
      color: #000;
      width: 70vw;
      text-shadow: 2px 2px 4px #fff;
      padding: 1rem 3rem;
      font-size: 1.4rem;
      font-weight: 10;
      font-family: Arial, sans-serif;
    }
      ${ButtonStyleAttendanceRegister}{
        background-color: #777;
        color: #000;
        width: max-content;
        text-shadow: 2px 2px 2px #fff;
        padding: 1rem 3rem;
        font-size: 1.1rem;
        ${Theme.centering}
        transition: all .3s;
        &:hover{
        background-color: #999;
        }
    }
    
 }

 ${DivBox}{
   
   form{
        input{
          transform: scale(1);
          width: 60vw;
          height: auto;
        }
        input::placeholder {
          font-size: 5vw; 
        }
        button{
          min-width: 20vw;
          font-size: 2.5vh;
        }
      }
          }
          
        }
    ${DisplayBox} {
      
     /*  font-size: 4vh;
      width: auto;
      height: auto;
      padding: 2vh;
      transition: all .3s;
      &:hover{
      background-color: #fff;
      }
      li{
       width: 55vw;
      }
      ${DisplayInput}{
        width: 20vw;
        row-gap: .5rem;
        label{
          font-size: 3vh;
        }
        button{
          height: 8vh;
      }
    } */
    

  }



  @media ${mediumScreen} {
    /* Estilos para telas médias */
    background-color: lightgreen;
    height: 120px;
  }

  @media ${largeScreen} {
    /* Estilos para telas grandes */
    background-color: lightcoral;
    height: 150px;
  }
`


export default ResponsiveContainer
