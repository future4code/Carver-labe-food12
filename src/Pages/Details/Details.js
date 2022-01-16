import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import GlobalStateContext from '../../Context/GlobalStateContext'

const RestaurantDetails = () => {
    useProtectedPage()
    const history = useHistory()
    const pathParams = useParams()
    const { states, setters, requests } = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getRestaurantsDetails(pathParams.id)
    }, [])

    const showRestaurant = states.restaurantProducts.map((item) => {
        
    })

    return (
        <div>

        </div>
    )
}