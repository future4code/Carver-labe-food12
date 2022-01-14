import axios from "axios";
import { goToUserProfile, goToSignUp } from "../Router/Coordinator";
import { BASE_URL } from "../Constants/url";


export const login = (body, clear, history, setAnotherLog, setLoading) => {
    setLoading(true)
    axios.post (`${BASE_URL}/user/login`, body)
    .then((res)=>{
        console.log("token", res.data.token)
        clear()
        goToSignUp(history)
        // setAnotherLog("Logout")
        // setLoading(false)
    })
    .catch((err)=> alert(err.response.data.message)

    )
    
    
}

export const signUp = (body, clear, history) => {
    axios.post (`${BASE_URL}/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        alert("cadastro realizado com sucesso!")
        clear()
        goToSignUp(history)
    })
    .catch((err)=> alert(err.response.data.message)
    

    )
    
    
}