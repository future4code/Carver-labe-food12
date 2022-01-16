import React, { useContext} from "react";
import useProtectedPage  from '../../Hooks/useProtectedPage'
import GlobalStateContext from '../../Context/GlobalStateContext'
import { useHistory } from 'react-router-dom'
import { ScreenContainer, Box, Back, Title, Form, Rectangle, FieldName, InputField, Confirm } from "./styled"
import { goBack } from '../../Router/Coordinator'
import back from '../../Assets/back.png'

const EditProfile = () => {
    useProtectedPage()
    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalStateContext)

    const onChangeName = (event) => {
        setters.setName(event.target.value)
    }

    const onChangeEmail = (event) => {
        setters.setEmail(event.target.value)
    }

    const onChangeCpf = (event) => {
        setters.setCpf(event.target.value)
    }

    return (
        <ScreenContainer>
            <Box>
                <Back src={back} onClick={() => goBack(history)} />
                <Title>Editar</Title>
            </Box>
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
                    <FieldName>CPF*</FieldName>
                    <InputField 
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
                <Confirm type="submit" onClick={() => requests.updateProfile(history)}>Salvar</Confirm>
            </Form>
        </ScreenContainer>
    )
}

export default EditProfile