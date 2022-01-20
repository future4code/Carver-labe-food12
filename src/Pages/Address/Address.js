import React, { useContext } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext'
import useProtectedPage  from '../../Hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { ScreenContainer, Box, Back, Title, Form, Rectangle, FieldName, InputField, InputAdd, Confirm } from './styled'
import back from '../../Assets/back.png'
import { goBack } from '../../Router/Coordinator'

const Address = () => {
    useProtectedPage()
    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalStateContext)

    const onChangeStreet = (event) => {
        setters.setStreet(event.target.value)
    }

    const onChangeNumber = (event) => {
        setters.setNumber(event.target.value)
    }

    const onChangeNeighbourhood = (event) => {
        setters.setNeighbourhood(event.target.value)
    }

    const onChangeCity = (event) => {
        setters.setCity(event.target.value)
    }
    
    const onChangeState = (event) => {
        setters.setState(event.target.value)
    }

    const onChangeComplement = (event) => {
        setters.setComplement(event.target.value)
    }

    return (
        <ScreenContainer>
            <Box>
                <Back src={back} onClick={() => goBack(history)} />
            </Box>
            <Title> Meu endereço </Title>
            <Form>                
                <Rectangle>
                    <FieldName>Logradouro*</FieldName>
                    <InputAdd 
                        label='Endereço'
                        value={states.street}
                        type='text'
                        onChange={onChangeStreet}
                        placeholder='Rua / Av.'
                        required
                    />
                </Rectangle>
                <Rectangle>
                    <FieldName>Número*</FieldName>
                    <InputField 
                        label='Número'
                        value={states.number}
                        type='number'
                        onChange={onChangeNumber}
                        placeholder='Número'
                        required
                    />
                </Rectangle>
                <Rectangle>
                    <FieldName>Complemento</FieldName>
                    <InputAdd 
                        label='Complemento'
                        value={states.complement}
                        placeholder='Apto. / Bloco'
                        onChange={onChangeComplement}
                    />
                </Rectangle>
                <Rectangle>
                    <FieldName>Bairro*</FieldName>
                    <InputField 
                        label='Bairro'
                        type='text'
                        value={states.neighbourhood}
                        placeholder='Bairro'
                        onChange={onChangeNeighbourhood}
                        required
                    />
                </Rectangle>
                <Rectangle>
                    <FieldName>Cidade*</FieldName>
                    <InputField 
                        label='Cidade'
                        type='text'
                        value={states.city}
                        placeholder='Cidade'
                        onChange={onChangeCity}
                        required
                    />
                </Rectangle>   
                <Rectangle>
                    <FieldName>Estado*</FieldName>
                    <InputField 
                        label='Estado'
                        type='text'
                        value={states.state}
                        placeholder='Estado'
                        onChange={onChangeState}
                        required
                    />
                </Rectangle>
                <Confirm type='submit' onClick={() => requests.putAddAddress(history)}>Salvar</Confirm>                
            </Form>
        </ScreenContainer>
    )
}

export default Address