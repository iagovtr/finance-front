import styled, { createGlobalStyle } from 'styled-components'
import ArrowSelect from '../../public/select-arrow.svg'

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: #333; 
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #FFFFFF;
  }

  #root {
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6, input, button, p, select {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
  }

  select {
    width: 110px;
    height: 35px;
    padding: 6px;
    color: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 2px;
    background: url(${ArrowSelect}) 95% 45% no-repeat transparent;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  option {
    background-color: #2E2E2E;
  }

  ul, li, a {
    text-decoration: none;
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export const WrapperContainer = styled.div`
  background: blue;
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 50px;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  position: relative;
  margin: 22px 14px;
  border: 1px solid;
`;

export default GlobalStyle