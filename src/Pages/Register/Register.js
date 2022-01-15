import React from "react";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import logo01 from "../../Assets/logo01.png"
import { MainContainer } from "./Style";

import {goToLogin} from '../../Router/Coordinator'
import RegisterForm from "./RegisterForm";

const Register = () => {
    // useUnprotectedPage()
    
    return (
        <MainContainer>
      
            {/* <img src={logo01} alt={'logotipo'}/> */}
            <p>Cadastrar</p>
            <RegisterForm />
        </MainContainer>
    )
}

export default Register;