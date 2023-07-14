import { createGlobalStyle } from 'styled-components';

const AboutModuleStyles = createGlobalStyle`
  .about-module {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 999;
    min-width: 300px;
  }

  .close-btn {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default AboutModuleStyles;
