import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../Pages/Home"
import PageNotFound from "../Pages/PageNotFound"

export default function Router () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = {'/'}>
                    <Home />
                </ Route>

                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}