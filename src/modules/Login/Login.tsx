import * as S from './styles'
import BrandSvg from '../../../public/brand-icon.svg'
import EmailSvg from '../../../public/email.svg'
import PasswordSvg from '../../../public/password.svg'

const Login = () => {
  return (
    <S.Login>
      <S.LoginContainer>
        <S.BrandIcon src={BrandSvg} alt="Brand Logo" />
        <S.Title>Bem vindo novamente!</S.Title>
        <S.FormWrapper>
          <S.InputWrapper>
            <S.Label>Email</S.Label>
            <S.Input type="email" placeholder='Digite seu e-mail aqui'/>
            <S.Icon src={EmailSvg} alt="E-mail" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>Senha</S.Label>
            <S.Input type="password" placeholder='Digite sua senha aqui'/>
            <S.Icon src={PasswordSvg} alt="Password" />
          </S.InputWrapper>
        </S.FormWrapper>
        <S.Button>Entrar</S.Button>
      </S.LoginContainer>
    </S.Login>
  )
}

export default Login