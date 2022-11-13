import GlobalStyle from './styles/global'
import Routes from './routes/Routes'
import { AuthProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      <GlobalStyle/>
    </>
  )
}

export default App
