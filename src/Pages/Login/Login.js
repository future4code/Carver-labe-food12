import React, { useContext} from "react";
import {useHistory} from "react-router-dom";
import {useState} from "react"
import { ScreenContainer, Logo, Title2, Box, Title, Form, Rectangle, FieldName, InputField, ShowHide, Confirm } from "./Style"
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import useForm from "../../Hooks/useForm";
import {goToSignUp, goToUserProfile} from "../../Router/Coordinator"
import {login} from "../../Services/user"
import logo01 from "../../Assets/logo01.png"
import senha from '../../Assets/senha.png'
import senha2 from '../../Assets/senha-2.png'

function Login({anotherLog, setAnotherLog}) {
    useUnprotectedPage()
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const onOffPass = () => {
        setShowPassword(!showPassword)
    }

    const [form, onChange, clear] = useForm({ 
        email: "", 
        password: "" 
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setAnotherLog, setLoading)
        console.log(form)
    }

    return (
        <ScreenContainer>
            <Box />                    
           <Logo src={logo01}></Logo>
           <Title>Entrar</Title>          
                <Form  
                    onSubmit={onSubmitForm}
                    anotherLog={anotherLog} setAnotherLog={setAnotherLog} >
                    <Rectangle>
                        <FieldName>E-mail*</FieldName>
                        <InputField
                        name={"email"}
                        placeholder="e-mail@e-mail.com"
                        value={form.email}
                        onChange={onChange}
                        label={"e-mail"}
                        variant={"outlined"}
                        multiline={"true"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}                    
                    />
                    </Rectangle>
                    <Rectangle>
                        <FieldName>Senha*</FieldName>
                        <InputField
                            name={"password"}
                            placeholder="Mínimo 6 caracteres"
                            value={form.password}
                            onChange={onChange}
                            label={"senha"}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                            type={showPassword ? "text" : "password"}
                        />
                        {showPassword ? <ShowHide src={senha} onClick={onOffPass}/> : <ShowHide src={senha2} onClick={onOffPass}/>}               
                    </Rectangle>
                        
                    <Confirm onClick={()=>goToUserProfile(history)}
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