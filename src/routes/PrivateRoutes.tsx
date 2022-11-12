import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoutes = () => {
  const { signed } = useAuth();
  
  if(signed === null) return null;

  return (
    signed ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes