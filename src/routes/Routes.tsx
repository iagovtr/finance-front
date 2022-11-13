import { WrapperContainer, MainContainer } from '../styles/global'
import {
  BrowserRouter,
  Routes as Router,
  Route,
} from 'react-router-dom'
import NotFound from '../modules/NotFound/NotFound'
import Header from '../modules/Shared/Header/Header'
import Transactions from '../modules/Transactions/Transactions'
import Login from '../modules/Login/Login'
import PrivateRoutes from './PrivateRoutes'
import useAuth from '../hooks/useAuth'

const Routes = () => {
  const { signed } = useAuth();

  return (
    <>
      {signed && <Header/>}
      <WrapperContainer>
        <MainContainer>
          <BrowserRouter>
            <Router>
              <Route element={<PrivateRoutes/>}>
                <Route path='/transactions' element={<Transactions/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Route>
              <Route path='/' element={<Login/>}/>
            </Router>
          </BrowserRouter>
        </MainContainer>
      </WrapperContainer>
    </>
  )
}

export default Routes