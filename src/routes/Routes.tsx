import React from 'react'
import {
  BrowserRouter,
  Routes as Router,
  Route,
} from 'react-router-dom'
import NotFound from '../modules/NotFound/NotFound'
import Header from '../modules/Shared/Header/Header'

const Routes = () => {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Router>
          <Route path='/' element={""}/>
          <Route path='*' element={<NotFound/>}/>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default Routes