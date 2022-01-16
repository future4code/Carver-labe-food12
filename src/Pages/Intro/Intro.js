import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToLogin } from "../../Router/Coordinator"
import logo from '../../Assets/logo-future-eats.png'
import { Container } from './styledIntro'

const Intro = () => {
    const history = useHistory()

    const waiting = () => {
        setTimeout(function () {
            goToLogin(history)
        }, 2500)
    }

    useEffect(() => {
        waiting()
    }, [])

    return (
        <Container>
            <img src={logo} />
        </Container>
    )
}

export default Intro