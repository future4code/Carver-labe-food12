import React, { useContext, useState} from "react"
import useUnprotectedPage from "../../Hooks/useUnprotectedPage"
import logo01 from "../../Assets/logo01.png"
import { DivForm, MainContainer } from "./Style"
import {goToLogin} from '../../Router/Coordinator'
import GlobalStateContext from "../../Context/GlobalStateContext"
import { useHistory } from "react-router-dom"
import useForm from '../../Hooks/useForm'
import { signUp } from "../../Services/user"


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
        const password = states.password
        const passwordConfirmation = states.confirmPassword
        event.preventDefault()
        if (password === passwordConfirmation) {
            requests.signUp(history)
        } else {
            alert('verifique se a senha digitada é a mesma da confirmação')
        }
    }

    
    return (
        <MainContainer>      
            <img src={logo01} alt={'logotipo'}/>
            <p>Cadastrar</p>
            <DivForm onSubmit={signUp}>

                <input
                    name='name'
                    value={states.name}
                    onChange={onChangeName}
                    label="Nome"
                    placeholder="Nome e sobrenome"
                    required
                />

                <input
                    name='email'
                    value={states.email}
                    onChange={onChangeEmail}
                    label="E-mail"
                    type="email"
                    placeholder="email@email.com"
                    required
                />

                <input
                    name='cpf'
                    type='number'
                    value={states.cpf}
                    onChange={onChangeCpf}
                    label="CPF"
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                    placeholder="000.000.000-00"
                    required
                />

                <input
                    name='password'
                    type='password'
                    value={states.password}
                    onChange={onChangePassword}
                    label="Senha"
                    pattern="^(?=.*[a-z])[0-9a-z]{6,}$"
                    placeholder="Mínimo 6 caracteres"
                    required
                />

                <input
                    name='password-confirm'
                    type='password'
                    value={states.confirmPassword}
                    onChange={onChangeConfirmPassword}
                    label="Confirme sua senha"
                    placeholder="Confirme a senha anterior"
                    required
                />

                <button>Criar</button>
            </DivForm>
        </MainContainer>
    )
}

export default Register;