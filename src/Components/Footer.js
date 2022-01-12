import React from "react";
import { Avatar, ContainerFooter, Homepage, ShoppingCart } from '../Styled-Components/Footer'
import homepage from '../Assets/homepage.png'
import shoppingCart from '../Assets/shopping-cart.png'
import avatar from '../Assets/avatar.png'

const Footer = () => {
    return (
        <ContainerFooter>
            <Homepage src = {homepage} />
            <ShoppingCart src = {shoppingCart} />
            <Avatar src = {avatar} />
        </ContainerFooter>
    )
}

export default Footer