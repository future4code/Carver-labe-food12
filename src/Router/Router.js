import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../Pages/Home"
import PageNotFound from "../Pages/PageNotFound"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Details from "../Pages/Details"
import UserProfile from "../Pages/UserProfile"

export default function Router () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = {'/'}>
                    <Home />
                </ Route>

                <Route exact path = {'/login'}>
                    <Login />
                </ Route>

                <Route exact path = {'/register'}>
                    <Register />
                </ Route>

                <Route exact path = {'/details'}>
                    <Details />
                </ Route>

                <Route exact path = {'/profile'}>
                    <UserProfile />
                </ Route>

                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}