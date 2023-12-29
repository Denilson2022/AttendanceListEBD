import styled from "styled-components"



const DivSendBox = styled.div`
    min-height: 100vh;
    background-color: #fff;
    background-image: linear-gradient(193deg, #FFFFFF 0%, #5f5f5f 16%, #282828 34%, #1d1d1d 62%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    ul {
      background-color: #222;
      width: 80vw;
      list-style: none;
      padding: 4vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 2vw;
      border-radius: 5%;
      box-shadow: -1px -2px 4px #ffffff53;
    }
    li {
      background-color: #f91;
      width: 300px;
      text-align: center;
      font-size: 1.5rem;
      padding: 2vw;
      border-radius: 5%;
      color: yellow;
      &:hover {
        background-color: yellow;
      }
    }

  `

  export default DivSendBox