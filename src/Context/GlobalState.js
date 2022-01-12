import React, { useState } from "react"
import axios from "axios"
import { Base_url } from "../Constants/url"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [filterByName, setFilterByName] = useState('')
    const [category, setCategory] = useState(0)
    const token = localStorage.getItem('token')
    const auth = { headers: { auth: token } }

    const getRestaurants = () => {
        axios.get(`${Base_url}/restaurants`, auth)
        .then ((response) => {
            setRestaurants(response.data.restaurants)
        })
        .catch ((error) => {
            console.log(error)
        })
    }

    const states = {
        restaurants,
        filterByName,
        category
    }

    const setters = {
        setFilterByName,
        setCategory
    }

    const requests = {
        getRestaurants
    }

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value = { data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState