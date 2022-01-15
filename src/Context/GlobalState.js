import React, { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../Constants/url"
import GlobalStateContext from "./GlobalStateContext"
import { goToHome, gotToLogin } from '../Router/Coordinator'

const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [restaurantProducts, setRestaurantProducts] = useState([])
    const [restaurantDetails, setRestaurantDetails] = useState([])
    const [filterByName, setFilterByName] = useState('')
    const [category, setCategory] = useState(0)
    const [user, setUser] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profileData, setProfileData] = useState({})
    const [cart, setCart] = useState([])
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")
    const [complement, setComplement] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const token = localStorage.getItem('token')
    const auth = { headers: { auth: token } }

    const getRestaurants = () => {
        axios.get(`${ BASE_URL }/restaurants`, auth)
        .then ((response) => {
            setRestaurants(response.data.restaurants)
        })
        .catch ((error) => {
            console.log(error)
        })
    }

    const postLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${BASE_URL}/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
        })
        .catch((error) => {
            alert('E-mail ou senha estão errados ou você deve se cadastrar')
        })
        setEmail("")
        setPassword("")
    }

    const getProfile = () => {
        axios.get(`${BASE_URL}/profile`, auth)
        .then((response) => {
            setProfileData(response.data.user)
        })
        .catch((error) => {
            alert('Erro ao buscar o cadastro')
        })
    }

    const putAddAddress = (history) => {
        const body = {
            street: street,
            number: number,
            neighbourhood: neighbourhood,
            city: city,
            state: state,
            complement: complement
        }
        axios.put(`${BASE_URL}/address`, body, auth)
        .then((response) => {
            alert('Endereço adicionado com sucesso')
            goToHome(history)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const getRestaurantDetails = (id) => {
        axios.get(`${BASE_URL}/restaurants/${id}`, auth)
        .then((response) => {
            setRestaurantDetails(response.data.restaurant)
            setRestaurantProducts(response.data.restaurant.products)
        })
        .catch((error) => {
            alert('Erro ao conseguir informações sobre esse restaurante')
        })
    }

    const states = {
        restaurants,
        filterByName,
        category,
        email,
        password,
        profileData,
        street,
        number,
        neighbourhood,
        city,
        state,
        complement,
        cart,
        restaurantDetails,
        restaurantProducts
    }

    const setters = {
        setFilterByName,
        setCategory,
        setEmail,
        setPassword,
        setCart,
        setStreet,
        setNumber,
        setNeighbourhood,
        setCity,
        setState,
        setComplement
    }

    const requests = {
        getRestaurants,
        postLogin,
        getProfile,
        putAddAddress,
        getRestaurantDetails
    }

    const data = { states, setters, requests }

  
    return (
        <GlobalStateContext.Provider value = { data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState