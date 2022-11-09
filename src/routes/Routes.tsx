import React from 'react'
import {
  BrowserRouter,
  Routes as Router,
  Route,
} from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={""}/>
      </Router>
    </BrowserRouter>
  )
}

export default Routes