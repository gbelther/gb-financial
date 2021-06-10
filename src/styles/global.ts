import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-100: #EDF2F7;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
    @media (max-width: 1280px) {
      font-size: 100%; // 16px
    }

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(----gray-100);
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
