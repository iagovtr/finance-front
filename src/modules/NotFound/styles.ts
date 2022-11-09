import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const NotFoundImage = styled.img`
  width: 90%;

  @media(min-width: 768px) {
    max-width: 700px;
  }

  @media(min-width: 1500px) {
    max-width: 800px;
  }
`;

export const Redirect = styled(Link)`
  border: 2px solid #DEF6E5;
  border-radius: 4px;
  padding: 15px;
  color: #263238;
  background: #DEF6E5;
  font-weight: 600;


  &:hover {
    background: transparent;
    color: #DEF6E5;
  }
`;