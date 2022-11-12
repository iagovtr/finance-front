import styled from 'styled-components'

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BrandIcon = styled.img`
  width: 80px;
`;

export const Title = styled.h2`
  margin-top: 30px;
`;

export const FormWrapper = styled.div`
  margin-top: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;

  & + & {
    margin-top: 26px;
  }
`;

export const Label = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

export const Input = styled.input`
  margin-top: 3px;
`;

export const Icon = styled.img`
  position: absolute;
  top: 27px;
  left: 6px;
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  max-width: 266px;
  height: 35px;
  border-radius: 2px;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  background: #2D5652;
`;
