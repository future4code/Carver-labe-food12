import React from "react";
import {useHistory} from "react-router-dom";
import {useState} from "react"
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer } from "./Style"


function Login({anotherLog, setAnotherLog}) {
    useUnprotectedPage()

    const history = useHistory()

    const [loading, setLoading] = useState(false)

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setAnotherLog, setLoading)

    }



    return (
        <ScreenContainer>
           
            <InputsContainer>
                <form  
                onSubmit={onSubmitForm}
                anotherLog={anotherLog} setAnotherLog={setAnotherLog} >
                    <div
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"e-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}

                    />
                    <div
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}

                    ></Button>


                </form>

                <SignUpButtonContainer>
                    <Button
                        onClick={()=>goToSignUp(history)}
                        type={"submit"}
                        fullWidth
                        variant={"outlined"}
                        color={"primary"}

                    >Faça seu Cadastro
                    </Button>

                </SignUpButtonContainer>


            </InputsContainer>

        </ScreenContainer>
    )

}

export default Login;