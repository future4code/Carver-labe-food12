import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Details from "../Pages/Details/Details"
import UserProfile from "../Pages/UserProfile/UserProfile"
import Intro from '../Pages/Intro/Intro'
import Address from '../Pages/Address/Address'
import Cart from '../Pages/Cart/Cart'
import EditProfile from '../Pages/EditProfile/EditProfile'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
          <Intro />
        </Route>

        <Route exact path={'/Home'}>
          <Home />
        </Route>

        <Route exact path={'/address'}>
          <Address />
        </Route>

        <Route exact path={'/login'}>
          <Login />
        </Route>

        <Route exact path={'/register'}>
          <Register />
        </Route>

        <Route exact path = {`/details/:id`}>
          <Details />
         </ Route>

        <Route exact path={'/profile'}>
          <UserProfile />
        </Route>

        <Route exact path={'/edit'}>
          <EditProfile />
        </Route>

        <Route exact path={'/cart'}>
          <Cart />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}