import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import useProtectedPage from '../../Hooks/useProtectedPage'
import GlobalStateContext from '../../Context/GlobalStateContext'
import { ScreenContainer, Box, Title, Back, Rectangle, ImageLogo, RestaurantName, Description, RectangleDetails, ImgProduct, Details, TitleS1, TitleS2, TitleS3, ContainerProductsMap, AddButton, RemoveButton, SendInfo, SpecialContainer } from "./Details-style"
import back from '../../Assets/back.png'
import { goBack } from "../../Router/Coordinator"
import Footer from '../../Components/Footer'

const RestaurantDetails = () => {
    useProtectedPage()
    const history = useHistory()
    const pathParams = useParams()
    const { states, setters, requests } = useContext(GlobalStateContext)
    const [addItemButton, setAddItemButton] = useState(true)

    useEffect(() => {
        requests.getRestaurantDetails(pathParams.id)
    }, [])

    const showItems = states.restaurantProducts.map((item) => {
        return (
        <RectangleDetails key={item.id}>
            <ImgProduct src={item.photoUrl}/>
            <Details>
                <TitleS1>{item.name}</TitleS1>
                <TitleS2>{item.description}</TitleS2>
                <SpecialContainer>
                    <TitleS3>R$ {item.price.toFixed(2)}</TitleS3>
                    <SendInfo type="submit" onClick={() => {addItemToCart(item)}}>adicionar</SendInfo>   
                </SpecialContainer>                
            </Details>                 
        </RectangleDetails>
    )})

    const addItemToCart = (newItem) => {
        const i = states.cart.findIndex((index) =>
            index.id === newItem.id
        )
        let newCart = [...states.cart]
        if (i === -1) {
            newCart.push({
                ...newItem, 
                amount:1
            })
        } else {
            newCart[i].amount += 1
        }
        setters.setCart(newCart)
        alert(`${newItem.name} foi adicionado ao carrinho`)
        buttonAddRemove()
    }

    const onOffAdd = () => {
        setAddItemButton(!addItemButton)
    }

    const buttonAddRemove = () => {
        return (
            <div>
                { addItemButton ? <RemoveButton onClick={onOffAdd}>remover 
                </RemoveButton> : <AddButton onClick={onOffAdd}>adicionar</AddButton>}    
            </div> 
        )
    }

    return (
        <ScreenContainer>
            <Box>
                <Back src={back} onClick={() => goBack(history)} />
                <Title>Restaurante</Title>
            </Box>
            <Rectangle>
            <div>
                <ImageLogo src={states.restaurantDetails.logoUrl}/>
                <RestaurantName> {states.restaurantDetails.name} </RestaurantName>
                <Description> {states.restaurantDetails.address} </Description>
                <Description> Tempo de Entrega: {states.restaurantDetails.deliveryTime} minutos</Description>      
             </div>
            </Rectangle>
            <ContainerProductsMap>
                {showItems}
            </ContainerProductsMap>
            <Footer />
        </ScreenContainer>
    )
}

export default RestaurantDetails