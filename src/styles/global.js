import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #22272e;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
  }

  button {
    font-family: 'Roboto', sans-serif;
  }
`;