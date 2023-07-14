import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  /* Example global styles for the price list */
  .price-list-container {
    margin-top: 16px;
  }

  .price-list-table {
    width: 100%;
    border-collapse: collapse;
  }

  .price-list-header {
    background-color: #333;
    color: #fff;
    padding: 8px;
    text-align: left;
  }

  .price-list-row:nth-child(even) {
    background-color: #f5f5f5;
  }

  .price-list-data {
    padding: 8px;
  }
`;

export default GlobalStyles;
