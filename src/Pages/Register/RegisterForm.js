import React, { useState } from "react";
import useForm from "../../hooks/useForm";
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
        <div>
            <form onSubmit={onSubmitForm}>

                <input
                    name='name'
                    value={form.name}
                    onChange={onChangeInput}
                    label="Nome e Sobrenome"
                    
                />

                <input
                    name='email'
                    value={form.email}
                    onChange={onChangeInput}
                    label="E-mail"
                    
                />

                <input
                    name='cpf'
                    value={form.cpf}
                    onChange={onChangeInput}
                    label="CPF"
                    
                />

                <input
                    name='password'
                    value={form.password}
                    onChange={onChangeInput}
                    label="Senha"
                    
                />

                <input
                    name='password-confirm'
                    value={confirm}
                    onChange={onChangeConfirm}
                    label="Confirme a senha anterior"
                    
                />

                <button>Criar</button>
            </form>
        </div>

    )
}

export default RegisterForm;