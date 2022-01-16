import React, { useContext, useState} from "react"
import useUnprotectedPage from "../../Hooks/useUnprotectedPage"
import logo01 from "../../Assets/logo01.png"
import back from "../../Assets/back.png"
import { MainContainer, Logo, Box, Back, Title, Form, Rectangle, FieldName, InputField, InputCpf, InputConfirmation, Confirm, ShowHide } from "./Style"
import GlobalStateContext from "../../Context/GlobalStateContext"
import { useHistory } from "react-router-dom"
import { signUp } from "../../Services/user"
import { goBack } from '../../Router/Coordinator'
import senha from '../../Assets/senha.png'
import senha2 from '../../Assets/senha-2.png'


const Register = () => {
    useUnprotectedPage()
    const history = useHistory()
    const { states, setters, requests } = useContext (GlobalStateContext)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const onOffPass = () => {
        setShowPassword(!showPassword)
    }

    const onOffConfirmPass = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const onChangeName = (event) => {
        setters.setName(event.target.value)
    }

    const onChangeEmail = (event) => {
        setters.setEmail(event.target.value)
    }

    const onChangeCpf = (event) => {
        setters.setCpf(event.target.value)
    }

    const onChangePassword = (event) => {
        setters.setPassword(event.target.value)
    }

    const onChangeConfirmPassword = (event) => {
        setters.setConfirmPassword(event.target.value)
    }

    const validatePassword = (event) => {
        console.log(event)
        event.preventDefault()
        if (states.password === states.confirmPassword) {
            requests.signUp()
        } else {
            alert('verifique se a senha digitada é a mesma da confirmação')
        }
    }
    
    return (
        <MainContainer>
            <Box>  
                <Back src={back} onClick={() => goBack(history)}/>
            </ Box>   
            <Logo src={logo01} alt={'logotipo'}/>
            <Title>Cadastrar</Title>
            <Form>
                <Rectangle>
                    <FieldName>Nome*</FieldName>
                    <InputField
                        name='name'
                        value={states.name}
                        onChange={onChangeName}
                        label="Nome"
                        placeholder="Nome e sobrenome"
                        required
                    />
                </Rectangle>           
                <Rectangle>
                    <FieldName>E-mail*</FieldName>
                    <InputField
                        name='email'
                        value={states.email}
                        onChange={onChangeEmail}
                        label="E-mail"
                        type="email"
                        placeholder="email@email.com"
                        required
                    />
                </Rectangle>
                <Rectangle>
                    <FieldName> CPF*</FieldName>
                    <InputCpf
                        name='cpf'
                        type='number'
                        value={states.cpf}
                        onChange={onChangeCpf}
                        label="CPF"
                        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                        placeholder="000.000.000-00"
                        required
                    />
                </Rectangle>                
                <Rectangle>
                    <FieldName>Senha*</FieldName>
                    <InputField
                        name='password'
                        type={showPassword ? "text" : "password"}
                        value={states.password}
                        onChange={onChangePassword}
                        label="Senha"
                        pattern="^(?=.*[a-z])[0-9a-z]{6,}$"
                        placeholder="Mínimo 6 caracteres"
                        required
                    />
                    {showPassword ? <ShowHide src={senha} onClick={onOffPass}/> : <ShowHide src={senha2} onClick={onOffPass}/>} 
                </Rectangle>
                <Rectangle>
                    <FieldName>Confirmar*</FieldName>
                    <InputConfirmation
                        name='password-confirm'
                        type={showConfirmPassword ? "text" : "password"}
                        value={states.confirmPassword}
                        onChange={onChangeConfirmPassword}
                        label="Confirme sua senha"
                        placeholder="Confirme a senha anterior"
                        required
                    />
                    {showConfirmPassword ? <ShowHide src={senha} onClick={onOffConfirmPass}/> : <ShowHide src={senha2} onClick={onOffConfirmPass}/>} 
                </Rectangle>             
                <Confirm type="submit" onClick={validatePassword}>Criar</Confirm>
            </Form>
        </MainContainer>
    )
}

export default Register;