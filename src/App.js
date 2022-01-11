import React from 'react'
import Router from './Router/Router'
import GlobalState from './Context/GlobalState'

const App = () => {
  return (
    <GlobalState> 
      <Router />
    </GlobalState>
  )
}

export default App