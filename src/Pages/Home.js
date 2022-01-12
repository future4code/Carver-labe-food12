import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import GlobalStateContext from "../Context/GlobalStateContext"
import { Feed, Bar, Title, Rectangle, SearchImg, TitleTextS3, Restaurante, Filtro, SearchText, RestaurantCard, ImageLogo, Rectangle2, RestaurantName, Details, DeliveryTime, Shipping } from "../Styled-Components/Home"
import Search from '../Assets/search.png'
import Footer from "../Components/Footer"

const Home = () => {
    //variaveis
    const { states, setters, requests } = useContext (GlobalStateContext)

    //history
    const history = useHistory()
    const goToRestaurantDetails = (history, id) => {
        history.push(`/details/${id}`)
    }

    //useEffect
    useEffect (() => {
        requests.getRestaurants()
    }, [])

    //filtros
    const onChangeFilterByName = (event) => {
        setters.setFilterByName(event.target.value)
    }

    const onClickSetCategory = (category) => {
        setters.setCategory(category)
    }

    const getCategory = states.restaurants.map ((restaurant) => {
        return (
            <div onClick={() => onClickSetCategory(restaurant.category)}>
                {restaurant.category}
            </div>
        )
    })

    const restaurantsAfterFilter = states.restaurants.filter ((restaurant) => {
        if (states.category === 0) {
            return (
                restaurant.deliveryTime >= 0 && restaurant.name.includes(states.filterByName))
        } else {
            return (
                restaurant.category === states.category && restaurant.name.includes(states.filterByName)
            )
        }
    })

    //map
    const showRestaurants = restaurantsAfterFilter.map ((restaurant) => {
        return (
            <Rectangle2 onClick = {() => goToRestaurantDetails (history, restaurant.id)}>
                <ImageLogo src={restaurant.logoUrl} />
                <RestaurantName> {restaurant.name} </RestaurantName>
                <Details>
                    <DeliveryTime> {restaurant.deliveryTime} min</DeliveryTime>
                    <Shipping> Frete R$ {restaurant.shipping} </Shipping>
                </Details>
                
                
            </Rectangle2>
        )
    })

    return (
        <Feed>
            <Bar>
                <Title>
                    <TitleTextS3>Ifuture</TitleTextS3>
                </Title>                
            </Bar>
            <Rectangle>
                <SearchImg src={Search} />
                <Restaurante onChange={onChangeFilterByName}> Restaurante </Restaurante>
            </Rectangle>
            <Filtro>
                {states.restaurants ? getCategory : "<SearchText> </SearchText>"}
                <SearchText onClick={() => onClickSetCategory(0)}> Todos </SearchText>
            </Filtro>
            <RestaurantCard>
                { states.restaurants ? showRestaurants : "<p></p>"}
            </RestaurantCard>
            <Footer />
        </Feed>
    )
}

export default Home