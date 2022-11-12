import { useCallback, useRef } from 'react'
import * as S from './styles'
import BrandSvg from '../../../public/brand-icon.svg'
import EmailSvg from '../../../public/email.svg'
import PasswordSvg from '../../../public/password.svg'
import { validateForm } from '../../utils/validateForm'

const Login = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    const validateData = validateForm([email.current?.value, password.current?.value]);
    
    if(!validateData) return console.log("Erro");
  }, []);

  return (
    <S.Login>
      <S.LoginContainer>
        <S.BrandIcon src={BrandSvg} alt="Brand Logo" />
        <S.Title>Bem vindo novamente!</S.Title>
        <S.FormWrapper>
          <S.InputWrapper>
            <S.Label>Email</S.Label>
            <S.Input 
              type="email" 
              placeholder='Digite seu e-mail aqui'
              ref={email}
            />
            <S.Icon src={EmailSvg} alt="E-mail" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>Senha</S.Label>
            <S.Input 
              type="password" 
              placeholder='Digite sua senha aqui'
              ref={password}
            />
            <S.Icon src={PasswordSvg} alt="Password" />
          </S.InputWrapper>
        </S.FormWrapper>
        <S.Button onClick={handleClick}>Entrar</S.Button>
      </S.LoginContainer>
    </S.Login>
  )
}

export default Login