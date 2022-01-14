import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import { useHistory } from "react-router";
import {signUp} from "../../Services/user"
import { StyledButton, StyledInput, DivForm } from "./Style";

const RegisterForm = () => {
    const [confirm, setConfirm] = useState('')
    const { form, onChangeInput, clear } = useForm(
        { name: '', 
        email: '', 
        cpf: '', 
        password: '' })
    const history = useHistory()
    

    const onSubmitForm = (event) => {
        event.preventDefault()
        if (confirm === form.password) {
            signUp(form, clear, history)
        }
    }

    const onChangeConfirm = (event) => {
        setConfirm(event.target.value)
    };

    return (
        <DivForm>
            <form onSubmit={onSubmitForm}>

                <StyledInput
                    name='name'
                    value={form.name}
                    onChange={onChangeInput}
                    label="Nome e Sobrenome"
                    variant="outlined"
                />

                <StyledInput
                    name='email'
                    value={form.email}
                    onChange={onChangeInput}
                    label="E-mail"
                    variant="outlined"
                />

                <StyledInput
                    name='cpf'
                    value={form.cpf}
                    onChange={onChangeInput}
                    label="CPF"
                    variant="outlined"
                />

                <StyledInput
                    name='password'
                    value={form.password}
                    onChange={onChangeInput}
                    label="Senha"
                    variant="outlined"
                />

                <StyledInput
                    name='password-confirm'
                    value={confirm}
                    onChange={onChangeConfirm}
                    label="Confirme a senha anterior"
                    variant="outlined"
                />

                <StyledButton>Criar</StyledButton>
            </form>
        </DivForm>

    )
}

export default RegisterForm;