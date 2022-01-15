import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToLogin } from "../../Router/Coordinator"
import logo from '../../Assets/logo01.png'

const Intro = () => {
    const history = useHistory()

    const waiting = () => {
        setTimeout(function () {
            goToLogin(history)
        }, 2000)
    }

    useEffect(() => {
        waiting()
    }, [])

    return (
        <div>
            <img src={logo} />
        </div>
    )
}

export default Intro