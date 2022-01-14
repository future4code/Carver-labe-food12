import React from "react";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import logo01 from "../../Assets/logo01.png"
import { MainContainer } from "./Style";
// import Header from '../../components/Header/Header'
import {goToLogin} from '../../Router/Coordinator'
import RegisterForm from "./RegisterForm";

const Register = () => {
    // useUnprotectedPage()
    
    return (
        <MainContainer>
            {/* <Header title={''} goTo={goToLogin}/> */}
            {/* <img src={logo01} alt={'logotipo'}/> */}
            <p>Cadastrar</p>
            <RegisterForm />
        </MainContainer>
    )
}

export default Register;