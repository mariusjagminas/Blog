import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../../assets/styles/theme"
import GlobalStyle from "../../assets/styles/GlobalStyle"
import Header from "../../components/Header/Header"

const MainTemplate = props => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        {props.children}
      </>
    </ThemeProvider>
  </>
)

export default MainTemplate
