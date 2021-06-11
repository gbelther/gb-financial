import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #000000;

    --gray-100: #EDF2F7;
    --gray-300: #CBD5E0;
    --gray-400: #A0AEC0;
    --gray-600: #4A5568;
    --gray-900: #171923;
    --gray-700: #2D3748;

    --red-600: #C53030;

    --green-600: #2F855A;
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
    background: var(--gray-700);
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
