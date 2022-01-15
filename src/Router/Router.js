import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Details from "../Pages/Details/Details"
import UserProfile from "../Pages/UserProfile/UserProfile"

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
          <Home />
        </Route>

        <Route exact path={'/login'}>
          <Login />
        </Route>

        <Route exact path={'/register'}>
          <Register />
        </Route>

        <Route exact path = {`/details`}>
          <Details />
         </ Route>

        <Route exact path={'/profile'}>
          <UserProfile />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}