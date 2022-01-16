import React, { useContext } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext'
import useProtectedPage  from '../../Hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'

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
        <div>
            <div>
                <h3> Endereço </h3>
                <div>
                    <input 
                        label='Endereço'
                        type='text'
                        onChange={onChangeStreet}
                        required
                    />
                    <input 
                        label='Número'
                        type='number'
                        onChange={onChangeNumber}
                        required
                    />
                    <input 
                        label='Complemento'
                        type='text'
                        onChange={onChangeComplement}
                    />
                    <input 
                        label='Bairro'
                        type='text'
                        onChange={onChangeNeighbourhood}
                        required
                    />
                    <input 
                        label='Cidade'
                        type='text'
                        onChange={onChangeCity}
                        required
                    />
                    <input 
                        label='Estado'
                        type='text'
                        onChange={onChangeState}
                        required
                    />
                    <button text='ENVIAR' onClick={() => requests.putAddAddress(history)}/>
                </div>
            </div>
        </div>
    )
}

export default Address