import styled from "styled-components";
import ButtonGoBack from "./ButtonGoBack";
import ButtonHome from "./ButtonHome";
import AuthButton from "./AuthButton";

const Styles = styled.div` 
display: flex;
width: 100vw;
justify-content: space-around;
align-items: center;
`
const ButtonsHeaders = () => {
    return(
        <Styles>
        <ButtonGoBack/>
        <ButtonHome/>
        <AuthButton/>
        </Styles>
    )
}


export default ButtonsHeaders