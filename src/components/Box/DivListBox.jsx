import styled from "styled-components";
import { Theme } from "../../Theme/Theme";

const DivListBox = styled.div`
  ${Theme.centering}
  background-color: #fff;
  justify-content: space-between;
  height: auto;
  width: 80vw;
  color: #0c181c;
  li {
    font-size: 3vw;
    
  }
  p{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
    color: #5d5d9b;

    
  }
  p:nth-child(odd){
    background-color: transparent;
    width: 100;
    color: #15204e;

  }
`;

export default DivListBox