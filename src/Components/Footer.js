import React from "react";
import { Avatar, ContainerFooter, Homepage, ShoppingCart } from '../Styled-Components/Footer'
import homepage from '../Assets/homepage.png'
import shoppingCart from '../Assets/shopping-cart.png'
import avatar from '../Assets/avatar.png'
import {goToHome, goToUserProfile, goToCart } from '../Router/Coordinator'
import { useHistory } from "react-router-dom";

const Footer = () => {
    const history = useHistory()
    return (
        <ContainerFooter>
            <Homepage src={homepage} onClick={()=>{goToHome(history)}}/>
            <ShoppingCart src={shoppingCart} onClick={()=>{goToCart(history)}}/>
            <Avatar src={avatar} onClick={()=>{goToUserProfile(history)}}/>
        </ContainerFooter>
    )
}

export default Footer