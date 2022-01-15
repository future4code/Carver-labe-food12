import React, { useContext} from "react";
import {useHistory} from "react-router-dom";
import {useState} from "react"
import { ScreenContainer, LogoImage, InputsContainer, Button, SignUpButtonContainer } from "./Style"
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import useForm from "../../Hooks/useForm";
import {goToSignUp, goToUserProfile} from "../../Router/Coordinator"
import {login} from "../../Services/user"
import logo01 from "../../Assets/logo01.png"

function Login({anotherLog, setAnotherLog}) {
    useUnprotectedPage()
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setAnotherLog, setLoading)
        console.log(form)
    }

    return (
        <ScreenContainer>            
           <LogoImage src={logo01}></LogoImage>
            <InputsContainer>            
                <form  
                onSubmit={onSubmitForm}
                anotherLog={anotherLog} setAnotherLog={setAnotherLog} >
                    <input
                        name={"email"}
                        placeholder="e-mail"
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
                    <input
                        name={"password"}
                        placeholder="senha"
                        value={form.password}
                        onChange={onChange}
                        label={"senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />                    
                    <Button onClick={()=>goToUserProfile(history)}
                        type={"submit"}                       
                    >Entrar</Button>
                </form>
                
                    <SignUpButtonContainer
                        onClick={()=>goToSignUp(history)}
                        type={"submit"}
                        variant={"outlined"}                      
                    >Faça seu Cadastro
                    </SignUpButtonContainer>               
            </InputsContainer>
        </ScreenContainer>
    )
}

export default Login;