import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../../Context/GlobalStateContext'
import useProtectedPage from '../../Hooks/useProtectedPage'
import edit from '../../Assets/edit.png'
import { ScreenContainer, Title, Box, Box2, Box3, Box4, Box5, Edit, Settings, Settings2, BoxTitle, Title2, Title3, CardOrders, ContainerPedidos } from './UserProfile.style'
import Footer from '../../Components/Footer'
import { goToEditProfile, goToAddress } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'

const UserProfile = () => {
  useProtectedPage()
  const history = useHistory()
  const { states, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getProfile()
  }, [])

  const getOrders = states.orders.map((order) => {
    return <CardOrders>
      <div>{order.restaurantName}</div>
      <div>{order.createdAt}</div>
      <div>{order.totalPrice}</div>      
    </CardOrders>
  })

  return (
    <ScreenContainer>
        <Box>
          <Title>Meu perfil</Title>
        </Box>      
        <Box2>
          <Box3>
            <Settings>{states.profileData.name}</Settings>
            <Settings>{states.profileData.email}</Settings>
            <Settings>{states.profileData.cpf}</Settings>
          </Box3>        
          <Edit src={edit} onClick={()=> {goToEditProfile(history)}}/>
        </Box2>
        <Box4>
          <Box5>
            <Settings2>Endereço cadastrado</Settings2>
            <Settings>{states.profileData.address}</Settings>
          </Box5>          
          <Edit src={edit} onClick={() => {goToAddress(history)}}/>
        </Box4>
        <BoxTitle>
          <Title2>Histórico de pedidos</Title2>
        </BoxTitle>
        <ContainerPedidos>
          { states.orders ? <Title3> Você não realizou nenhum pedido </Title3> : getOrders }
        </ContainerPedidos>           
      <Footer />
    </ScreenContainer>
    
  )
}

export default UserProfile