import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css?family=Mali&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #ffffff;
}

html {
  font-size: 16px;
}
`

export default GlobalStyle
