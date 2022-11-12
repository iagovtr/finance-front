import { createContext, useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import api from '../configs/api'
import { IAuthContext, IDecoded } from './types'

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: any) => {
  const [authStatus, setAuthStatus] = useState<boolean | null>(null);
  const [userData, setUserData] = useState<IDecoded>();

  const login = ( email: IAuthContext, password: IAuthContext ) => {
    api.post('/login', {
      'email': email,
      'password': password
    }).then(response => {
      localStorage.setItem('App:Token', response.data.token);
      setAuthStatus(true);
      window.location.replace('/transactions');
    }).catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() => {
    const token = localStorage.getItem('App:Token');
    
    if(!token) return setAuthStatus(false);
    
    const decoded: IDecoded = jwt(token);
    const dateExp = new Date(decoded.exp * 1000);
    
    if(dateExp < new Date()) {
      localStorage.removeItem('App:Token');
      setAuthStatus(false);
    } else {
      setAuthStatus(true);
      setUserData(decoded);
    }
  }, []);

  return (
    <AuthContext.Provider value={{signed: authStatus, login, userData}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext