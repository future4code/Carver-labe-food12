import React from "react";
import {useHistory} from "react-router-dom";
import {useState} from "react"
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer } from "./Style"
// import useUnprotectedPage from "../../Hooks/useUnprotectedPage";
import useForm from "../../Hooks/useForm";
import {goToSignUp} from "../../Router/Coordinator"
import {login} from "../../Services/user"
import logo01 from "../../Assets/logo01.png"


function Login({anotherLog, setAnotherLog}) {
    // useUnprotectedPage()

    const history = useHistory()

    const [loading, setLoading] = useState(false)

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setAnotherLog, setLoading)

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
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <button
                        type={"submit"}
                        variant={"contained"}
                        

                    >Entrar</button>


                </form>

                
                    <button
                        onClick={()=>goToSignUp(history)}
                        type={"submit"}
                        variant={"outlined"}
                        

                    >Faça seu Cadastro
                    </button>

                


            </InputsContainer>

        </ScreenContainer>
    )

}

export default Login;