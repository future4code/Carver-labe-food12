import React from 'react'
import {
  Title,
  Text,
  Info1,
  ButtonEdit,
  Box1,
  Box2,
  Info2,
  Text2,
  ButtonEdit2,
  Box3,
  Text3,
  Text4
} from './UserProfile.style'
import edit from '../../Assets/edit.png'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL} from '../../Constants/url'

export default function UserProfile() {
  const profile = useRequestData(`${BASE_URL}/profile`)
  const history = useRequestData(`${BASE_URL}/orders/history`)

  return (
    <div>
      <Title>Meu perfil</Title>
      <hr size="1" width="100%" color="#f9f5f7" />

      <Box1>
        <Info1>
          <Text>{profile?.user.name}</Text>
          <Text>{profile?.user.email}</Text>
          <Text>{profile?.user.cpf}</Text>
        </Info1>
        <ButtonEdit>
          <img src={edit} alt="Botão de edição com imagem de lápis." />
        </ButtonEdit>
      </Box1>
      <Box2>
        <Info2>
          <Text2>Endereço cadastrado</Text2>
          <Text>{profile?.user.address}</Text>
        </Info2>
        <ButtonEdit2>
          {/* <button onClick={goToChooseProfileUpdate}> */}
          <img src={edit} alt="Botão de edição com imagem de lápis." />
          {/* </button> */}
        </ButtonEdit2>
      </Box2>
      <Box3>
        <Text3>Histórico de pedidos</Text3>
      </Box3>
      <hr size="1" width="100%" color="black" />
      <Text4>
        {history
          ? function list() {
              const list = history.order
              list.map()
            }
          : 'Você não realizou nenhum pedido'}
      </Text4>
    </div>
  )
}
