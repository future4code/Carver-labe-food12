import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import GlobalStateContext from "../Context/GlobalStateContext"

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
            <div onClick = {() => goToRestaurantDetails (history, restaurant.id)}>
                <img src={restaurant.logoUrl} />
                <p> {restaurant.name} </p>
                <p> Tempo de entrega: {restaurant.deliveryTime} </p>
                <p> Taxa de entrega: {restaurant.shipping} </p>
                
            </div>
        )
    })

    return (
        <div>
            <form>
               <input onChange={onChangeFilterByName} placeholder="Nome do Restaurante" />
            </form>
            <div>
                <button onClick={() => onClickSetCategory(0)}> Todos </button>
                {states.restaurants ? getCategory : "<div> </div>"}
            </div>
            <div>
                { states.restaurants ? showRestaurants : "<p></p>"}
            </div>
        </div>
    )
}

export default Home