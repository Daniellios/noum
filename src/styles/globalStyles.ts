import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: #213547;
    background-color: #ffffff;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }

  #root {
  max-width: 1980px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  }


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;

export const COLORS = {
  yellow: "#ffac02",
  black: "black",
};

export const theme = {
  colors: COLORS,
};
