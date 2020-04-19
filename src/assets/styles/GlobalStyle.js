import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Roboto:100&display=swap');

*, *::before, *::after {
   box-sizing: border-box;
}

body {
  margin: 0;
  background: #ffffff;
}

html {
  font-family: "'Roboto', sans-serif";
  font-size: 16px;
  line-height: 1.6;
}

p {
  font-size: 1.1rem;
  font-weight: 400;
  text-align: justify;
}

`

export default GlobalStyle
