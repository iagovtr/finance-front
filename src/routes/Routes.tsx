import { WrapperContainer, MainContainer } from '../styles/global'
import {
  BrowserRouter,
  Routes as Router,
  Route,
} from 'react-router-dom'
import NotFound from '../modules/NotFound/NotFound'
import Header from '../modules/Shared/Header/Header'
import Transactions from '../modules/Transactions/Transactions'

const Routes = () => {
  return (
    <>
      <Header/>
      <WrapperContainer>
        <MainContainer>
          <BrowserRouter>
            <Router>
              <Route path='/' element={""}/>
              <Route path='/transactions' element={<Transactions/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Router>
          </BrowserRouter>
        </MainContainer>
      </WrapperContainer>
    </>
  )
}

export default Routes