import React, { useContext} from "react";
import {useHistory} from "react-router-dom";
import {useState} from "react"
import { ScreenContainer, Logo, Title2, Box, Title, Form, Rectangle, FieldName, InputField, ShowHide, Confirm } from "./Style"
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import { goToSignUp } from "../../Router/Coordinator"
import logo01 from "../../Assets/logo01.png"
import senha from '../../Assets/senha.png'
import senha2 from '../../Assets/senha-2.png'
import GlobalStateContext from "../../Context/GlobalStateContext";

function Login() {
    useUnprotectedPage()
    const { states, setters, requests } = useContext(GlobalStateContext)
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)

    const onOffPass = () => {
        setShowPassword(!showPassword)
    }

    const onChangeEmail = (event) => {
        setters.setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setters.setPassword(event.target.value)
    }

    return (
        <ScreenContainer>
            <Box />                    
           <Logo src={logo01}></Logo>
           <Title>Entrar</Title>          
                <Form >
                    <Rectangle>
                        <FieldName>E-mail*</FieldName>
                        <InputField
                        name={"email"}
                        placeholder="email@email.com"
                        value={states.email}
                        onChange={onChangeEmail}
                        label={"e-mail"}
                        type={"email"}
                        required                                            
                    />
                    </Rectangle>
                    <Rectangle>
                        <FieldName>Senha*</FieldName>
                        <InputField
                            name={"password"}
                            placeholder="Mínimo 6 caracteres"
                            value={states.password}
                            onChange={onChangePassword}
                            label={"senha"}
                            type={showPassword ? "text" : "password"}
                            required                            
                        />
                        {showPassword ? <ShowHide src={senha} onClick={onOffPass}/> : <ShowHide src={senha2} onClick={onOffPass}/>}               
                    </Rectangle>
                        
                    <Confirm onClick={()=>requests.postLogin(history)}
                        type={"submit"}                       
                    >Entrar</Confirm>
                </Form>
                
                    <Title2
                        onClick={()=>goToSignUp(history)}
                        type={"submit"}
                        variant={"outlined"}                      
                    >Não possui cadastro? Clique aqui.
                    </Title2>               
        </ScreenContainer>
    )
}

export default Login;