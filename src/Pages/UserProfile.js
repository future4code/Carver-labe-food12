import React from 'react'
import styled from 'styled-components'
import edit from '../img/edit.png'
// import useRequestData from '../hooks/useRequestData'
// import { Base_url } from '../Constants/url'

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  letter-spacing: -0.39px;
  color: black;
  width: 4.25rem;
  height: 1.188rem;
  margin: 1.25rem 5.75rem 0 5.813rem;
  padding: 0.813rem 3.344rem 0.75rem;
`

const Text = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  align: center;
  letter-spacing: -0.39px;
  color: black;
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  display: inline-block;
`

const Info1 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 80%;
`
const ButtonEdit = styled.div`
  width: 10%;
  padding-top: 1%;
`
const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
const Info2 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 80%;
  background-color: #eeeeee;
`
const Text2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  align: center;
  letter-spacing: -0.39px;
  color: black;
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  display: inline-block;
  width: 60%;
  color: #b8b8b8;
`
const ButtonEdit2 = styled.div`
  width: 10%;
  background-color: #eeeeee;
  padding-top: 3%;
`
const Box3 = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 80%;
`
const Text3 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  align: center;
  letter-spacing: -0.39px;
  color: black;
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  margin-inline-start: 2.1rem;
  display: inline-block;
`

export default function UserProfile() {
  // const profile = useRequestData(`${Base_url}/profile`)

  return (
    <div>
      <Title>Meu perfil</Title>
      <hr size="1" width="100%" color="#f9f5f7" />
      {/* <NameText>{profile.user.name}</NameText> */}
      <Box1>
        <Info1>
          <Text>Bruna Oliveira</Text>
          <Text>bruna_o@gmailcom</Text>
          <Text>333.333.333-33</Text>
        </Info1>
        <ButtonEdit>
          <img src={edit} alt="Botão de edição com imagem de lápis." />
        </ButtonEdit>
      </Box1>
      <Box2>
        <Info2>
          <Text2>Endereço cadastrado</Text2>
          <Text>Rua Alessandra Vieira, 42</Text>
        </Info2>
        <ButtonEdit2>
          <img src={edit} alt="Botão de edição com imagem de lápis." />
        </ButtonEdit2>
      </Box2>
      <Box3>
        <Text3>Histórico de pedidos</Text3>
      </Box3>
      <hr size="1" width="100%" color="black" />
    </div>
  )
}
