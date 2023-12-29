// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import { Theme } from '../Theme/Theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    background-color: ${Theme.backgrounds.ColorBody};
  }

`;

export default GlobalStyle;
