import styled, { createGlobalStyle } from "styled-components";

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

  h1, h2, h3, h4, h5, h6, input, button, p {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
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
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 50px;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  position: relative;
  margin: 22px 14px;
`;

export default GlobalStyle