import { createGlobalStyle } from "styled-components";

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

  h1, h2, h3, h4, h5, h6, input, button, p {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle