import React from "react"
import styled from "styled-components" 
import { useEffect, useState } from "react"
import { BASE_URL } from "../../Constants/url"
import axios from "axios"
import {
ContainerGeral,
DescriçãoDePagina,
Nome,
Email,
Telefone,
ContainerEndereço,
Informacoes,
InformacoesEEdicao,
Botao1,
Botao2,
Descricao,
Endereco,
EnderecoEEdicao,
Divisor,
HistoricoDePedidos
} from "./Details-style"


const Details = () => {


    useEffect(() => {
        tryGetProfile()

    }, [])




    const tryGetRestaurants = () => {
        const url = `${BASE_URL}/restaurants`
        // const token = localStorage.getItem('token')
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik8wTU8xbDJwNGhtY3hvUk1UOEJMIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYi5nYWJAbGJuLmNvbSIsImNwZiI6IjExMS4yMjIuMzMzLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY0MjAzNDIwN30.tmD-7bjevl_yrp1e492NbjwXzrwsvGRZtMqPbjgbXjM"
        const header = {headers: {auth: token}}

        axios.get(url,header)

        .then((res) => {   
            console.log(res.data.restaurants)     
        })

        .catch((err) =>{
            console.log(err.response)
        // alert("já pode chorar...!!!")
        })
    }   

    const tryGetRestaurantsDetails = () => {
        
        const url = `${BASE_URL}/restaurants/1`
        // const token = localStorage.getItem('token')
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik8wTU8xbDJwNGhtY3hvUk1UOEJMIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYi5nYWJAbGJuLmNvbSIsImNwZiI6IjExMS4yMjIuMzMzLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY0MjAzNDIwN30.tmD-7bjevl_yrp1e492NbjwXzrwsvGRZtMqPbjgbXjM"
        const header = {headers: {auth: token}}

        axios.get(url,header)

        .then((res) => {   
            console.log(res)     
        })

        .catch((err) =>{
            console.log(err.response)
        alert("já pode chorar...!!!")
        })
    }   



    const [profile, setProfile]= useState([])


    const tryGetOrdersHistory = () => {
        
        const url = `${BASE_URL}/orders/history`
        // const token = localStorage.getItem('token')
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik8wTU8xbDJwNGhtY3hvUk1UOEJMIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYi5nYWJAbGJuLmNvbSIsImNwZiI6IjExMS4yMjIuMzMzLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY0MjAzNDIwN30.tmD-7bjevl_yrp1e492NbjwXzrwsvGRZtMqPbjgbXjM"
        const header = {headers: {auth: token}}
        let array = []

        axios.get(url,header)

        .then((res) => {   
            console.log(res.data) 
            
        })

        .catch((err) =>{
            console.log("erro:",err.response)
        alert("já pode chorar...!!!")
        })
    }   




    const tryGetProfile = () => {
        
        const url = `${BASE_URL}/profile`
        // const token = localStorage.getItem('token')
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik8wTU8xbDJwNGhtY3hvUk1UOEJMIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYi5nYWJAbGJuLmNvbSIsImNwZiI6IjExMS4yMjIuMzMzLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY0MjAzNDIwN30.tmD-7bjevl_yrp1e492NbjwXzrwsvGRZtMqPbjgbXjM"
        const header = {headers: {auth: token}}
        let array = []

        axios.get(url,header)

        .then((res) => {   
            console.log(res.data.user) 
            array.push(res.data.user)
            setProfile(array)
            console.log("teset",res.data)
        })

        .catch((err) =>{
            console.log("erro:",err.response)
        alert("já pode chorar...!!!")
        })
    }   



    return(
        <ContainerGeral>

                <DescriçãoDePagina>
                    <p>Meu Perfil</p>
                </DescriçãoDePagina>

            <Divisor/>
                <InformacoesEEdicao>
                    <Informacoes>
                        <Nome>
                            {profile&&profile.map((item)=>{
                                return(<div>
                                    {item.name}
                                </div>)
                            })}
                        </Nome>
                        <Email>
                        {profile&&profile.map((item)=>{
                                return(<div>
                                    {item.email}
                                </div>)
                            })}
                        </Email>
                        <Telefone>
                    
                        {profile&&profile.map((item)=>{
                                return(<div>
                                    {item.cpf}
                                </div>)
                            })}
                        </Telefone>
                    </Informacoes>
                        <Botao1>
                            <button>✏️</button>
                        </Botao1>
                </InformacoesEEdicao>



                <EnderecoEEdicao>
                    <ContainerEndereço>
                        <Descricao>
                            <h3>Endereço Cadastrado</h3>
                        </Descricao>
                        <Endereco>
                        {profile&&profile.map((item)=>{
                                return(<div>
                                    {item.address}
                                </div>)
                            })}
                        </Endereco>
                    </ContainerEndereço>
                        <Botao2>
                          <button>✏️</button>
                        </Botao2>
                </EnderecoEEdicao>


                <HistoricoDePedidos>
                    <p>Historico de Pedidos</p>
                </HistoricoDePedidos>
                {/* <Divisor/> */}
                <button onClick={tryGetRestaurants}>Ver Restaurantes</button>
                <button onClick={tryGetRestaurantsDetails}>Ver Detalhes do restaurante</button>
                <button onClick={tryGetProfile}>Informaçoes do usuario</button>
                <button onClick={tryGetOrdersHistory}>Já finalizados</button>
        </ContainerGeral>
    )
}

export default Details