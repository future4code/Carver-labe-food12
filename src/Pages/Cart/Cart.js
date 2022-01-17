import React, { useEffect, useContext, useState } from "react"
import GlobalStateContext from '../../Context/GlobalStateContext'
import { ScreenContainer, Box, Box5, Title, Settings, Settings2, TitleS4, ContainerValues, Confirm, TitleS5, ContainerSub, TitleSub, TitleS3, ContainerInputs, InputDisplay, LabelDisplay, RectangleDetails, ImgProduct, TitleS1, TitleS2, TitleS6, ImageLogo, RestaurantName, Description, Rectangle, ContainerProductsMap, Details, MainContainer, SendInfo, SpecialContainer} from "./styled"
import { useHistory, useParams } from "react-router-dom"
import Footer from '../../Components/Footer'
import useProtectedPage from "../../Hooks/useProtectedPage"

const Cart = () => {
    useProtectedPage()
    const { states, setters, requests } = useContext(GlobalStateContext)
    const history = useHistory()
    const pathParams = useParams()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        requests.getProfile()
        sumItems()
      }, [states.cart])

    const removeItem = (item) => {
        const i = states.cart.findIndex((index) =>
            index.id === item.id
        )
        let newCart = [...states.cart]
        if (newCart[i].amount === 1) {
            newCart.splice(i, 1)
        } else {
            newCart[i].amount -= 1
        }
        setters.setCart(newCart)
        alert(`${item.name} foi removido ao carrinho`)
    }

    const sumItems = () => {
        let currentTotal = 0
        states.cart.forEach((item) => {
            currentTotal += (item.price * item.amount) + states.restaurantDetails.shipping
        })
        setTotal(currentTotal)
    }

    const itemsOnCart = states.cart.map((item) => {
        return (
            <RectangleDetails key={item.id}>
                <ImgProduct src={item.photoUrl}/>
                <Details>
                    <TitleS1>{item.name}</TitleS1>
                    <TitleS2>R$ {item.price.toFixed(2)}</TitleS2>
                    <SpecialContainer>
                        <TitleS6>Quantidade {item.amount}</TitleS6>
                        <SendInfo onClick={()=> {removeItem(item)}}>Remover</SendInfo>   
                    </SpecialContainer>                    
                </Details>                             
            </RectangleDetails>            
        )
    })

    return (
        <ScreenContainer>
            <Box>
                <Title>Meu carrinho</Title>
            </Box>
            <Box5>
                <Settings2>Endereço cadastrado</Settings2>
                <Settings>{states.profileData.address}</Settings>
            </Box5>
            <MainContainer>
                { itemsOnCart.length > 0 ? <div> 
                        <Rectangle> 
                            <ImageLogo src={states.restaurantDetails.logoUrl}/>
                            <RestaurantName> {states.restaurantDetails.name} </RestaurantName>
                            <Description> {states.restaurantDetails.address} </Description>
                            <Description> Tempo de Entrega: {states.restaurantDetails.deliveryTime} minutos</Description>    
                        </Rectangle>
                        <ContainerProductsMap>{itemsOnCart}</ContainerProductsMap>                    
                    </div> : <TitleS4> Carrinho vazio</TitleS4> }
            </MainContainer>
            <ContainerValues>                
                <TitleS5>Frete R$ {states.restaurantDetails.shipping ? states.restaurantDetails.shipping.toFixed(2) : '0.00'} </TitleS5>
                <ContainerSub>
                    <div>SUBTOTAL</div>
                    <TitleSub>R$ {total.toFixed(2)}</TitleSub>
                </ContainerSub>
                <div>
                    <TitleS3>Forma de pagamento</TitleS3>
                    <ContainerInputs>
                        <InputDisplay>
                            <input
                                type='radio' 
                                name="paymentMethod"
                                name="money"
                                value={states.paymentMethod}
                                onChange={setters.setPaymentMethod}

                            />
                            <LabelDisplay>Dinheiro</LabelDisplay>
                        </InputDisplay>
                        <InputDisplay>
                            <input
                                type='radio' 
                                name="paymentMethod"
                                name="creditcard"
                                value={states.paymentMethod}
                                onChange={setters.setPaymentMethod}
                            />
                            <LabelDisplay>Cartão de crédito</LabelDisplay>
                        </InputDisplay>                   
                    </ContainerInputs>
                </div>
                <Confirm onClick={()=>requests.postPlaceOrder(pathParams.id)}
                        type={"submit"} > Confirmar </Confirm> 
            </ContainerValues>
            <Footer />
        </ScreenContainer>
    )
}

export default Cart