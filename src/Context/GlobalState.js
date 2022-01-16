import React, { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../Constants/url"
import GlobalStateContext from "./GlobalStateContext"
import { goToAddress, goToHome, goToLogin } from '../Router/Coordinator'

const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [restaurantProducts, setRestaurantProducts] = useState([])
    const [restaurantDetails, setRestaurantDetails] = useState([])
    const [filterByName, setFilterByName] = useState('')
    const [category, setCategory] = useState(0)
    const [user, setUser] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [profileData, setProfileData] = useState({})
    const [cart, setCart] = useState([])
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")
    const [complement, setComplement] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [orders, setOrders] = useState([])
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

    const postLogin = (history) => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${BASE_URL}/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToHome(history)
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
            localStorage.setItem('token', response.data.token)
            alert('Endereço adicionado com sucesso')
            goToHome(history)
        })
        .catch((error) => {
            alert('Verifique se os dados estão corretos e tente novamente')
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

    const signup = (history) => {
        const body = {
            name: name,
            email: email,
            cpf: cpf,
            password: password
        }
        axios.post(`${BASE_URL}/signup`, body)
        .then((response) => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            goToAddress(history)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const updateProfile = () => {
        const body = {
            name: name,
            email: email,
            cpf: cpf
        }
        axios.put(`${BASE_URL}/profile`, body)
        .then((response) => {
            setProfileData(response.data.user)
        })
        .catch((error) => {
            alert('Verifique os dados e tente novamente')
        })
    }

    const getOrdersHistory = () => {
        axios.get(`${BASE_URL}/orders/history`, auth)
        .then((response) => {
            setOrders(response.data.order)
        })
    }

    const states = {
        restaurants,
        filterByName,
        category,
        email,
        password,
        confirmPassword,
        profileData,
        street,
        number,
        neighbourhood,
        city,
        state,
        complement,
        cart,
        restaurantDetails,
        restaurantProducts,
        name,
        cpf,
        orders
    }

    const setters = {
        setFilterByName,
        setCategory,
        setEmail,
        setPassword,
        setConfirmPassword,
        setCart,
        setStreet,
        setNumber,
        setNeighbourhood,
        setCity,
        setState,
        setComplement,
        setName,
        setCpf,
        setOrders
    }

    const requests = {
        getRestaurants,
        postLogin,
        getProfile,
        putAddAddress,
        getRestaurantDetails,
        signup,
        updateProfile,
        getOrdersHistory
    }

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value = { data }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState