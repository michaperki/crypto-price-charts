import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  /* Additional global styles for the footer */
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background-color: #333;
    color: #fff;
  }

  p {
    font-size: 14px;
    margin: 0;
  }
`;

export default GlobalStyles;
