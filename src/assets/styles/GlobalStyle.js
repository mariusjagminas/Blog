import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Roboto&display=swap');

*, *::before, *::after {
  box-sizing: border-bo
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
